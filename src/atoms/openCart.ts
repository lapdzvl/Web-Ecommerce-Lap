import { atom, useAtomValue, useSetAtom } from "jotai";

const baseAtom = atom(false);

export const useIsCartOpenAtomValue = () => useAtomValue(baseAtom);

export const useIsCartOpenOperations = () => {
  const write = useSetAtom(baseAtom);

  return {
    open() {
      write(true);
    },
    close() {
      write(false);
    },
    toggle() {
      write((prev) => !prev);
    },
  };
};
