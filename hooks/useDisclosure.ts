import { useCallback, useState } from 'react';

export const useDisclosure = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), [setIsOpen]);
  const close = useCallback(() => setIsOpen(false), [setIsOpen]);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), [setIsOpen]);

  return { isOpen, toggle, open, close };
};
