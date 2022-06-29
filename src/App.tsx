import { createContext } from "react";
import { useLanguage } from "./hooks/useLanguage";
import { Home } from "./pages/home";
import { Language } from "./types";

export const LanguageContext = createContext<Language | null>(null);

export const App = (): JSX.Element => {
  const language = useLanguage();

  return (
    <LanguageContext.Provider value={language}>
      <Home />
    </LanguageContext.Provider>
  );
};
