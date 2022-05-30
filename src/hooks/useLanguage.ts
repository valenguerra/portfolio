import { recursiveFilterObjectByKey } from "../app/util";
import { useState } from "react";
import { Language, LangCode } from "../types";
import texts from "../app/texts.json";

export const useLanguage = (): Language => {
  const [selected, setSelected] = useState<LangCode>("es");

  const toggle = () => setSelected(selected === "es" ? "en" : "es");

  const selectedTexts = recursiveFilterObjectByKey(texts, selected);

  return { texts: selectedTexts, toggle };
};
