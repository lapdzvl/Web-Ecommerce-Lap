import { useState } from "react";

type Return = [
  boolean,
  {
    open: () => void;
    close: () => void;
    toggle: () => void;
  },
];

export function useDisclosure(initialState: boolean = false): Return {
  const [isOpen, setIsOpen] = useState(initialState);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((state) => !state);

  return [isOpen, { open, close, toggle }];
}
