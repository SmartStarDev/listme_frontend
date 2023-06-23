import { RefObject, useEffect } from "react";

export const useOutsideClick = (ref: RefObject<any>, callback: Function) => {
  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [callback, ref]);
};
