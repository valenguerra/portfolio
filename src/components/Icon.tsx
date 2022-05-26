import { FiChevronRight, FiChevronLeft, FiChevronDown } from "react-icons/fi";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { ImFileEmpty } from "react-icons/im";
import { IoLogoLinkedin } from "react-icons/io";

interface ColoredIconProps {
  src: string;
  size?: "small" | "big";
}

interface IconProps {
  name: string;
  color?: "white" | "black";
  clickable?: boolean;
}

export const ColoredIcon = ({
  src,
  size = "small",
}: ColoredIconProps): JSX.Element => {
  const isSmall = size === "small";
  return <img src={src} className={isSmall ? "h-6" : "h-8"} />;
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
  if (name === "arrowDown") return <FiChevronDown {...props} />;
  if (name === "github") return <AiOutlineGithub {...props} />;
  if (name === "linkedIn") return <IoLogoLinkedin {...props} />;
  if (name === "instagram") return <AiOutlineInstagram {...props} />;

  return <ImFileEmpty {...props} />;
};
