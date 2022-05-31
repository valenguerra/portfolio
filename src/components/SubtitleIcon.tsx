import { ColoredIcon } from "./Icon";
import { Subtitle } from "./Text";

interface Props {
  title: string;
  iconSrc: string;
}

export const SubititleIcon = ({ title, iconSrc }: Props): JSX.Element => {
  return (
    <div className="flex items-center gap-3">
      <ColoredIcon src={iconSrc} size="small" alt={title} />
      <Subtitle>{title}</Subtitle>
    </div>
  );
};
