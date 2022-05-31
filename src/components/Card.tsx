import React, { RefObject } from "react";

interface Props {
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLElement, Props>(({ children }, ref): JSX.Element => {
  return (
    <section
      ref={ref}
      className="
      flex
      w-full
      flex-col
      gap-8
      rounded-xl
      border
      border-light-12/160
      bg-light-6/160
      py-6
      px-8
      backdrop-blur-md
      "
    >
      {children}
    </section>
  );
});
