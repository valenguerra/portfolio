import { ColoredIcon } from "./Icon";
import { Title } from "./Text";

interface Props {
  title: string;
  iconSrc: string;
}

export const TitleIcon = ({ title, iconSrc }: Props): JSX.Element => {
  return (
    <div className="flex items-center gap-3">
      <ColoredIcon src={iconSrc} size="big" alt={title} />
      <Title>{title}</Title>
    </div>
  );
};
