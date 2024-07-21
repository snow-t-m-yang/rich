import { useRef, useEffect } from "react";

export function useClickOutside(callback: () => void) {
  let ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function click({ target }: MouseEvent) {
      if (target && ref.current && !ref.current.contains(target as Node)) {
        callback();
      }
    }

    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, [callback]);

  return ref;
}
