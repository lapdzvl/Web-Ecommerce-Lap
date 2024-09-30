import { cva } from "class-variance-authority";

export const styles = cva([
  "border",
  "border-gray-500",
  "px-4",
  "py-2.5",
  "transition-all",
  "outline-none",
  "focus:border-black",
  "focus:ring-1",
  "focus:ring-black",
  "hover:ring-1",
  "hover:ring-gray-500",
  "placeholder:text-gray-500",
]);
