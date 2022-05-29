import { useState } from "react";
import { Icon } from "./Icon";

interface Props {
  children: React.ReactNode;
  title: React.ReactNode;
}

export const Expandable = ({ title, children }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <div className="flex w-full select-none flex-col items-start gap-2 text-white">
      <div
        className=" flex w-full cursor-pointer items-center justify-between rounded-md py-4 px-3 transition hover:bg-light-9/160 "
        onClick={toggleIsOpen}
      >
        {title}{" "}
        <Icon
          name="arrowDown"
          className={`transition duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      {isOpen && children}
    </div>
  );
};
