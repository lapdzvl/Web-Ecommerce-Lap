import { cva } from "class-variance-authority";

export const styles = cva(
  [
    "border",
    "border-black",
    "px-4",
    "py-2.5",
    "transition-all",
    "ring-black",
    "outline-none",

    "hover:ring-1",
    "placeholder:text-gray-500",
  ]
  // {
  //   variants: {
  //     intent: {
  //       primary: ["bg-black", "text-white", "border-black"],
  //       secondary: ["bg-white", "text-black", "border-black"],
  //       inverse: ["bg-white", "text-white", "border-white", "hover:scale-100"],
  //     },
  //   },
  //   defaultVariants: {
  //     intent: "primary",
  //   },
  // }
);
