import { createElement } from "react";

function Card({ as: Component = "div", className = "", ...props }) {
  return createElement(Component, {
    ...props,
    className:
      `rounded-lg border border-border bg-background ${className}`,
  });
}

export default Card;
