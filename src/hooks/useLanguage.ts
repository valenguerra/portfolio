import { recursiveFilterObjectByKey } from "../app/util";
import { useState } from "react";
import { Language, LangCode } from "../types";
import texts2 from "../app/texts.json";

export const useLanguage = (): Language => {
  const [selected, setSelected] = useState<LangCode>("en");

  const toggle = () => {
    setSelected(selected === "es" ? "en" : "es");
    //console.log(selected);
  };

  console.log(texts2);

  const selectedTexts = recursiveFilterObjectByKey(texts2, selected);

  return { texts: selectedTexts, toggle };
};
