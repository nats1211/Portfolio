import { createElement } from "react";
import { m, useReducedMotion } from "motion/react";

function Reveal({ children, className = "" }) {
  const shouldReduceMotion = useReducedMotion();

  return createElement(m.div, {
    className,
    initial: shouldReduceMotion ? false : { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.4,
      ease: "easeOut",
    },
    children,
  });
}

export default Reveal;
