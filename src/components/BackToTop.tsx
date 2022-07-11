import clsx from "clsx";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";

export const BackToTop = () => {
  const [showing, setShowing] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleShowing = () => setShowing(window.scrollY > 400);
    document.addEventListener("scroll", handleShowing);

    return () => document.removeEventListener("scroll", handleShowing);
  }, []);

  return (
    <div className="fixed right-0 left-0 bottom-0 flex px-8 py-6 md:left-auto md:justify-end">
      <div className="pointer-events-none fixed right-0 left-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />

      <Button
        className={clsx(
          "z-10 flex w-full items-center justify-center gap-3 transition duration-300 md:w-auto",
          showing ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={scrollToTop}
      >
        <Icon name="longArrowUp" />
        Back to top
      </Button>
    </div>
  );
};
