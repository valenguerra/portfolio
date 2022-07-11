import React, { RefObject } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Card = React.forwardRef<HTMLElement, Props>(({ children, className }, ref): JSX.Element => {
  return (
    <section
      ref={ref}
      className={`
      flex
      w-full
      flex-col
      gap-8
      rounded-xl
      border
      border-light-12/160
      bg-light-6/160
      py-6
      px-4
      backdrop-blur-md
      md:px-8
      ${className}
      `}
    >
      {children}
    </section>
  );
});
