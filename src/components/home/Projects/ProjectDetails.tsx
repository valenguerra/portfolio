import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Icon } from "../../Icon";
import { Link } from "../../Link";
import { Subtitle } from "../../Text";
import { Project } from "../../../types";
import { ImageRow } from "./ImageRow";

interface Props {
  project: Project;
  onClose: () => any;
}

export const ProjectDetails = ({ project, onClose }: Props) => {
  const { title, description, images } = project;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-6">
        <Icon name="longArrowLeft" color="white" onClick={onClose} />
        <Subtitle className="flex-1">{title}</Subtitle>
      </div>
      {images &&
        (images.length === 1 ? (
          <img src={images[0]} alt={title} className="w-full rounded" />
        ) : (
          <ImageRow images={images.map((e) => ({ src: e, alt: title }))} />
        ))}
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        className="text-white"
        components={{
          a: ({ children }) => {
            const raw = children.toString();
            if (raw.includes("#")) {
              const data = raw.split("#");
              const url = data[0];
              const text = data[1].replace(/-/g, " ");

              return <Link to={url}>{text}</Link>;
            }

            return <Link to={raw}>{raw}</Link>;
          },
        }}
      >
        {description}
      </ReactMarkdown>
    </div>
  );
};
