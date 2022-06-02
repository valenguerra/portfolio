import { useContext } from "react";
import { LanguageContext } from "../../App";
import curve from "../../assets/images/curve.png";
import profile from "../../assets/images/profile.png";
import { ImageZoom } from "../../components/ImageZoom";

export const SuperTitle = (): JSX.Element => {
  const language = useContext(LanguageContext);
  const { section1 } = language?.texts;

  return (
    <div className="flex w-full flex-col-reverse items-center  gap-6 md:flex-row">
      <img src={curve} alt="curve" className="hidden h-20 md:inline-block md:h-28" />
      <div className="flex flex-col items-center gap-1 md:flex-1 md:items-start md:gap-4">
        <h1 className="flex text-3xl font-bold text-white md:text-5xl">{section1.superTitle}</h1>
        <h2 className="ml-1 flex text-xl font-light text-white md:ml-2 md:text-3xl">{section1.superSubtitle}</h2>
      </div>
      <ImageZoom src={profile} alt="Valentino Guerra" className="h-24 w-24 rounded-full md:h-32 md:w-32" />
    </div>
  );
};
