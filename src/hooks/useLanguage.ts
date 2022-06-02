import { recursiveFilterObjectByKey } from "../app/util";
import { useEffect, useState } from "react";
import { Language, LangCode } from "../types";
import texts2 from "../app/texts.json";

export const useLanguage = (): Language => {
  const [selected, setSelected] = useState<LangCode>("en");

  const toggle = () => {
    setSelected(selected === "es" ? "en" : "es");
  };

  const selectedTexts = recursiveFilterObjectByKey(texts2, selected);

  useEffect(() => {
    const systemLanguage = navigator.languages[0].slice(0, 2);
    if (systemLanguage === "es") setSelected("es");
  }, []);

  return { texts: selectedTexts, toggle };
};
