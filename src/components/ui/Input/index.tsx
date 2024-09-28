import type { ComponentProps } from "react";
import type { VariantProps } from "class-variance-authority";

import { styles } from "./styles";
import { twMerge } from "tw-merge";

type Props = ComponentProps<"input"> & VariantProps<typeof styles>;

export function Input({ className, ...restProps }: Props) {
  return <input className={twMerge(styles({ className }))} {...restProps} />;
}
