import { useContext } from "react";
import { LanguageContext } from "../App";
import { EMAIL, EMAIL_TO } from "../app/consts";
import { Link } from "./Link";

export const Footer = (): JSX.Element => {
  const language = useContext(LanguageContext);
  const { footer } = language?.texts;

  return (
    <footer className="flex flex-col items-center gap-4 py-4 text-white sm:flex-row-reverse">
      <Link to={EMAIL_TO}>{EMAIL}</Link>
      <span className="h-6 border-light-48/160 text-sm sm:border-r sm:pr-4 sm:text-base">{footer}</span>
    </footer>
  );
};
