import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { ImFileEmpty } from "react-icons/im";
import { IoLogoLinkedin } from "react-icons/io";

interface ColoredIconProps {
  name: string;
  size?: "small" | "big";
}

interface IconProps {
  name: string;
  color?: "white" | "black";
  clickable?: boolean;
}

export const ColoredIcon = ({
  name,
  size = "small",
}: ColoredIconProps): JSX.Element => {
  const isSmall = size === "small";

  return (
    <img
      src={`../assets/images/${name}.png`}
      className={isSmall ? "h-4" : "h-8"}
    />
  );
};

export const Icon = ({
  name,
  color = "white",
  clickable = false,
}: IconProps) => {
  const props = {
    color,
    size: 24,
    className: `inline-flex ${clickable ? "cursor-pointer" : ""}`,
  };

  if (name === "arrowRight") return <FiChevronRight {...props} />;
  if (name === "arrowLeft") return <FiChevronLeft {...props} />;
  if (name === "github") return <AiOutlineGithub {...props} />;
  if (name === "linkedIn") return <IoLogoLinkedin {...props} />;
  if (name === "instagram") return <AiOutlineInstagram {...props} />;

  return <ImFileEmpty {...props} />;
};
