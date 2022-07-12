import bg01 from "../../assets/images/bg01.png";
import bg02 from "../../assets/images/bg02.png";
import bg03 from "../../assets/images/bg03.png";
import bg04 from "../../assets/images/bg04.png";
import { ImageProps } from "../../types";

export const Background = (): JSX.Element => {
  return (
    <div className="absolute top-0 bottom-0 -z-10 flex flex-col justify-between xl:bottom-auto xl:justify-start">
      <Image src={bg01} alt="Mountains" />
      <Image src={bg02} alt="Cave" />
      <Image src={bg03} alt="Submarine cave" />
      <Image src={bg04} alt="Deep ocean" />
    </div>
  );
};

const Image = ({ src, alt }: ImageProps) => {
  return <img src={src} alt={alt} className="min-h-screen object-cover" />;
};
