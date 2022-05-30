import { useContext } from "react";
import { LanguageContext } from "../App";
import { EMAIL, EMAIL_TO } from "../app/consts";
import { Link } from "./Link";

export const Footer = (): JSX.Element => {
  const language = useContext(LanguageContext);
  const { footer } = language?.texts;

  return (
    <footer className="flex items-center gap-4 py-4 text-white">
      <span className="h-6 border-r border-light-48/160 pr-4">{footer}</span>
      <Link to={EMAIL_TO}>{EMAIL}</Link>
    </footer>
  );
};
