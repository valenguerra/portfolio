import { ColoredIcon } from "../../components/Icon";
import { Title } from "../../components/Text";

interface Props {
  title: string;
  icon: string;
}

export const TitleIcon = ({ title, icon }: Props): JSX.Element => {
  return (
    <div className="flex items-center gap-3">
      <ColoredIcon name={icon} size="big" />
      <Title>{title}</Title>
    </div>
  );
};
