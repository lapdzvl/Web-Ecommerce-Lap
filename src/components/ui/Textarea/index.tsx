import type { ComponentProps } from "react";
import type { VariantProps } from "class-variance-authority";

import { styles } from "./styles";
import { twMerge } from "tw-merge";

type Props = ComponentProps<"textarea"> & VariantProps<typeof styles>;

export function Textarea({ className, ...restProps }: Props) {
  return <textarea className={twMerge(styles({ className }))} {...restProps} />;
}
