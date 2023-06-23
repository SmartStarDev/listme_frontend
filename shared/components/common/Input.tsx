import React, { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import clsx from "clsx";

export type InputProps = {
  endIcon?: ReactNode;
  error?: string;
} & InputHTMLAttributes<any>;

// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, endIcon, error, ...rest }, ref) => {
    return (
      <>
        <input
          ref={ref}
          className={clsx(
            "w-full h-10 bg-white rounded-md px-4 py-1.5 border border-ink-450 border-b-[3px] text-ink-800 text-sm focus:outline-none bg-transparent focus:border-primary placeholder:text-ink-500",
            error && "!border-danger"
          )}
          {...rest}
        />
        {error && <p className="text-sm text-danger mt-1">{error}</p>}
      </>
    );
  }
);

export default Input;
