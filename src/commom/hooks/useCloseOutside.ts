import { RefObject, useEffect } from "react";

interface IProps {
  ref: RefObject<HTMLElement>;
  action: () => void;
}

export function useClickOutside({ action, ref }: IProps) {
  function handleClickOutside(event: MouseEvent) {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      action();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return null;
}
