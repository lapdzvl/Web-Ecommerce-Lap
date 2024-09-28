import { twMerge } from "tw-merge";
import type { ComponentProps } from "react";
import type { VariantProps } from "class-variance-authority";

import { styles } from "./styles";

type Props = ComponentProps<"button"> & VariantProps<typeof styles>;

export function Button({ className, intent, ...restProps }: Props) {
  return (
    <button className={twMerge(styles({ intent, className }))} {...restProps} />
  );
}
