import clsx from "clsx";
import { useState } from "react";
import { Frame } from "../../../components/Frame";
import { Paragraph, Subtitle } from "../../../components/Text";
import { Project } from "../../../types";

interface Props {
  project: Project;
  onClick: () => any;
}

export const ProjectSummary = ({ project, onClick }: Props) => {
  const [hover, setHover] = useState(false);
  const { thumbnail, title, description, year, techStack } = project;

  return (
    <Frame
      onClick={onClick}
      className="relative h-20 cursor-pointer overflow-hidden px-0 py-0"
      onHover={() => setHover(true)}
      onLeaveHover={() => setHover(false)}
    >
      <div
        className={clsx(
          "absolute inset-0 flex items-center justify-center gap-4 bg-black bg-opacity-80 transition duration-300",
          hover ? "opacity-100" : "opacity-0"
        )}
      >
        {techStack.map((item, i) => (
          <img key={i} src={item} alt="stack" className="h-8 w-8" />
        ))}
      </div>
      <img src={thumbnail} alt={title} className="h-20 w-20 rounded-l" />
      <div className="flex flex-1 flex-col justify-between overflow-hidden py-2 pr-4">
        <div className="flex items-center justify-between gap-2">
          <Subtitle className="flex-1 line-clamp-1">{title}</Subtitle>
          <span className="font-light">{year}</span>
        </div>
        <Paragraph className="overflow-hidden text-ellipsis whitespace-nowrap">{description}</Paragraph>
      </div>
    </Frame>
  );
};
