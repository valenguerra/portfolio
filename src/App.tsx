import { createContext } from "react";
import { useLanguage } from "./hooks/useLanguage";
import { Home } from "./pages/home";
import { Language } from "./types";
import ReactGA from "react-ga";
import { GA_TRACK_ID } from "./app/consts";

// Initialize Google Analytics
ReactGA.initialize(GA_TRACK_ID);

export const LanguageContext = createContext<Language | null>(null);

export const App = (): JSX.Element => {
  const language = useLanguage();

  return (
    <LanguageContext.Provider value={language}>
      <Home />
    </LanguageContext.Provider>
  );
};
