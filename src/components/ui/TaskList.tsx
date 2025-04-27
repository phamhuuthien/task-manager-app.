import React from "react";
import { cx } from "../utils/common";


interface TaskListProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const TaskList: React.FC<TaskListProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={cx(
        "bg-transparent space-y-[1rem] flex flex-col w-full  items-center justify-between overflow-y-auto",
        className
      )}
        
      {...props}
    >
      {children}
    </div>
  );
};
