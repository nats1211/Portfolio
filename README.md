# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Contact form

The contact form submits to `/api/contact`. In development, Vite serves this
endpoint locally; in production, Vercel serves the serverless function in
`api/contact.js`.

Configure these environment variables in Vercel, or in `.env.local` for local
development:

- `RESEND_API_KEY`: Resend API key (server-side only; do not prefix with `VITE_`).
- `EMAIL_FROM`: Sender address on a domain verified with Resend.
- `EMAIL_TO`: Address that receives contact messages.

Run `npm run dev` for local development. Keep the Resend API key server-side;
do not prefix it with `VITE_`.
