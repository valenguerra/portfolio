import { FiChevronRight, FiChevronLeft, FiChevronDown, FiArrowLeft } from "react-icons/fi";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { ImFileEmpty } from "react-icons/im";
import { IoLogoLinkedin } from "react-icons/io";
import { ImageProps } from "../types";

interface ColoredIconProps extends ImageProps {
  size?: "small" | "big";
}

interface IconProps {
  name: string;
  color?: "white" | "black";
  className?: string;
  onClick?: () => any;
}

export const ColoredIcon = ({ src, alt, size = "small" }: ColoredIconProps): JSX.Element => {
  const isSmall = size === "small";
  return <img src={src} alt={alt} className={`inline-flex ${isSmall ? "h-6" : "h-8"}`} />;
};

export const Icon = ({ name, color = "white", className, onClick }: IconProps) => {
  const props = {
    onClick,
    color,
    size: 24,
    className: `inline-flex ${onClick ? "cursor-pointer" : ""} ${className}`,
  };

  if (name === "arrowRight") return <FiChevronRight {...props} />;
  if (name === "arrowLeft") return <FiChevronLeft {...props} />;
  if (name === "longArrowLeft") return <FiArrowLeft {...props} />;
  if (name === "arrowDown") return <FiChevronDown {...props} />;
  if (name === "github") return <AiOutlineGithub {...props} />;
  if (name === "linkedIn") return <IoLogoLinkedin {...props} />;
  if (name === "instagram") return <AiOutlineInstagram {...props} />;

  return <ImFileEmpty {...props} />;
};
