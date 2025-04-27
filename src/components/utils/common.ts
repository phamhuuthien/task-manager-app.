import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cx = (...args:any[]) => twMerge(clsx(...args));

export { cx };