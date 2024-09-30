import { cva } from "class-variance-authority";

export const styles = cva(
  [
    "border",
    "duration-300",
    "px-8",
    "py-2.5",
    "transition-all",
    "hover:ring-1",
    "hover:shadow-md",
    "font-medium",
  ],
  {
    variants: {
      intent: {
        primary: ["bg-black", "text-white", "border-black", "hover:ring-black"],
        secondary: [
          "bg-white",
          "text-black",
          "border-black",
          "hover:ring-black",
        ],
        inverse: ["bg-white", "text-white", "border-white", "hover:ring-white"],
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);
