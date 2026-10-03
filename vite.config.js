import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function localContactApi() {
  return {
    name: "local-contact-api",
    configureServer(server) {
      server.middlewares.use(async (request, response, next) => {
        if (request.url?.split("?")[0] !== "/api/contact") {
          return next();
        }

        if (request.method !== "POST") {
          response.setHeader("Allow", "POST");
          response.statusCode = 405;
          response.end(JSON.stringify({ error: "Method not allowed" }));
          return;
        }

        try {
          const chunks = [];
          let bodySize = 0;
          for await (const chunk of request) {
            bodySize += chunk.length;
            if (bodySize > 64 * 1024) {
              response.statusCode = 413;
              response.setHeader("Content-Type", "application/json");
              response.end(JSON.stringify({ error: "Request body is too large." }));
              return;
            }
            chunks.push(chunk);
          }

          let body;
          try {
            body = JSON.parse(Buffer.concat(chunks).toString("utf8"));
          } catch {
            response.statusCode = 400;
            response.setHeader("Content-Type", "application/json");
            response.end(JSON.stringify({ error: "Request body must be valid JSON." }));
            return;
          }

          const { default: handler } =
            await server.ssrLoadModule("/api/contact.js");
          const apiResponse = {
            statusCode: 200,
            status(code) {
              this.statusCode = code;
              return this;
            },
            setHeader(name, value) {
              response.setHeader(name, value);
            },
            json(value) {
              response.statusCode = this.statusCode;
              response.setHeader("Content-Type", "application/json");
              response.end(JSON.stringify(value));
              return this;
            },
          };

          const apiRequest = Object.create(request);
          apiRequest.body = body;
          await handler(apiRequest, apiResponse);
        } catch (error) {
          server.config.logger.error("Local contact API failed.", { error });
          if (!response.headersSent) {
            response.statusCode = 500;
            response.setHeader("Content-Type", "application/json");
            response.end(
              JSON.stringify({
                error: "Your message could not be sent. Please try again.",
              }),
            );
          }
        }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), localContactApi()],
});
