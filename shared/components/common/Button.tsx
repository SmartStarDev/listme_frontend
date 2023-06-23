import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Props = ButtonHTMLAttributes<{ className: string }> & {
  size?: "large" | "small";
  variant?: "contain" | "outline";
  color?: "primary" | "secondary";
};

const Button: React.FC<Props> = ({
  className,
  size = "large",
  variant = "contain",
  color = "primary",
  ...rest
}) => {
  return (
    <button
      className={clsx(
        "font-semibold rounded-[50px] py-3 px-5 hover:opacity-80",
        variant === "contain" && color === "primary" && "bg-primary text-white",
        variant === "contain" &&
          color === "secondary" &&
          "bg-ink-600 text-ink-500",
        variant === "outline" &&
          color === "primary" &&
          "bg-white border border-primary",
        variant === "outline" &&
          color === "secondary" &&
          "bg-white border border-ink-450 text-ink-600",
        size === "small" && "h-10 px-5 !py-0 rounded-3xl min-w-[150px]",
        size === "large" && "min-w-[263px]",
        className
      )}
      {...rest}
    />
  );
};

export default Button;
