import React, { InputHTMLAttributes } from "react";

type Props = {
  label: string;
} & InputHTMLAttributes<any>;

// eslint-disable-next-line react/display-name
const CheckBox = React.forwardRef<HTMLInputElement, Props>(
  ({ label, ...rest }, ref) => {
    return (
      <div className="flex items-center">
        <input
          ref={ref}
          type="checkbox"
          className="absolute h-6 w-6 opacity-0 cursor-pointer"
          {...rest}
        />
        <div
          className="
        mr-3 flex h-6 w-6 flex-shrink-0 items-center border border-ink-450 justify-center rounded-md bg-white hover:cursor-pointer md:h-5 md:w-5"
        >
          <svg
            className="w-3"
            xmlns="http://www.w3.org/2000/svg"
            height="11.252"
            viewBox="0 0 15 11.252"
          >
            <g transform="translate(-1382 -582)">
              <path
                className="fill-white"
                d="M15.14,19.136l-3.751-3.75L9.514,17.261l5.626,5.626,9.374-9.376-1.873-1.877Z"
                transform="translate(1372.486 570.365)"
              />
            </g>
          </svg>
        </div>
        <label className="text-sm">{label}</label>
      </div>
    );
  }
);

export default CheckBox;
