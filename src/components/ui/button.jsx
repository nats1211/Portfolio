import { createElement } from "react";

const variants = {
  primary:
    "border border-accent bg-accent text-accent-foreground hover:bg-accent-hover",
  secondary:
    "border border-border bg-background text-foreground hover:bg-surface",
};

function Button({
  as: Component = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  return createElement(Component, {
    ...props,
    className:
      `inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`,
  });
}

export default Button;
