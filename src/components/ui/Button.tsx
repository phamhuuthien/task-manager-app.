import React from "react";
import { cx } from "../utils/common";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  loading?: boolean;
  loadingText?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    className,
    loading = false,
    loadingText,
    ...props
  }) => {
    return (
      <button
      className={cx(
        "px-[2rem] md:px-[3rem] xl:px-[5rem] py-[1rem] xl:py-[1.5rem] rounded-xl font-medium text-[1.6rem] text-white bg-[#237261] transition duration-150 ease-in-out cursor-pointer active:scale-95 active:opacity-80",
        className
      )}
      
        disabled={loading}
        {...props}
      >
        <span className={loading ? "opacity-80" : "" }>
          {loading ? loadingText : children}
        </span>
      </button>
    );
  };
  
