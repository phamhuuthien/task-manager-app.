import React from "react";
import { cx } from "../utils/common";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = ({ className, ...rest }: InputProps) => {
  return (
    <input
      {...rest}
      className={cx(
        "w-full rounded-[1rem] border-2  border-gray-300 px-[1rem] py-[1rem] xl:py-[1.5rem] text-[1.6rem] outline-none  transition",
        className
      )}
    />
  );
};
