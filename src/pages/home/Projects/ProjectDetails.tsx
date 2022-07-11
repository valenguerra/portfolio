import { Icon } from "../../../components/Icon";
import { Paragraph, Subtitle } from "../../../components/Text";
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
      <div className="flex gap-6">
        <Icon name="longArrowLeft" color="white" onClick={onClose} />
        <Subtitle>{title}</Subtitle>
      </div>
      {images &&
        (images.length === 1 ? (
          <img src={images[0]} alt={title} className="w-full rounded" />
        ) : (
          <ImageRow images={images.map((e) => ({ src: e, alt: title }))} />
        ))}
      <Paragraph>{description}</Paragraph>
    </div>
  );
};
