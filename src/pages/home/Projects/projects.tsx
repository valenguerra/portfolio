import { Paragraph, Title } from "../../../components/Text";
import { Link } from "../../../components/Link";
import { ImageRow } from "./ImageRow";
import { useContext } from "react";
import { LanguageContext } from "../../../App";

import ball from "../../../assets/images/screenshots/ball.jpg";
import blackBullets from "../../../assets/images/screenshots/black_bullets.jpg";
import blockRain from "../../../assets/images/screenshots/block_rain.jpg";
import newtonsApple from "../../../assets/images/screenshots/newtons_apple.jpg";
import enigmath1 from "../../../assets/images/screenshots/enigmath_1.jpg";
import enigmath2 from "../../../assets/images/screenshots/enigmath_2.jpg";
import enigmath3 from "../../../assets/images/screenshots/enigmath_3.jpg";
import sociosAom1 from "../../../assets/images/screenshots/socios_aom_1.jpg";
import sociosAom2 from "../../../assets/images/screenshots/socios_aom_2.jpg";
import sociosAom3 from "../../../assets/images/screenshots/socios_aom_3.jpg";
import webAom from "../../../assets/images/screenshots/web_aom_1.jpeg";
import students1 from "../../../assets/images/screenshots/students_1.png";
import students2 from "../../../assets/images/screenshots/students_2.png";
import phSeller1 from "../../../assets/images/screenshots/ph_seller_1.png";
import phSeller2 from "../../../assets/images/screenshots/ph_seller_2.png";
import splitnow from "../../../assets/images/screenshots/splitnow.jpeg";

import {
  ENIGMATH,
  GITHUB_PARTNER,
  PHOTOGRAPHY_SELLER,
  SOCIOS_AOM,
  SPLITNOW,
  SPLITNOW_GITHUB,
  VALENTINO_GUERRA,
  WEB_AOM,
} from "../../../app/consts";

const MobileGames = (): JSX.Element => {
  const language = useContext(LanguageContext);
  const { section4 } = language?.texts;
  const { title, ph1, ph2 } = section4.list[0];

  return (
    <>
      <Title>{title}</Title>
      <ImageRow
        images={[
          { src: ball, alt: "ball game" },
          { src: blackBullets, alt: "black bullets game" },
          { src: blockRain, alt: "block rain game" },
          { src: newtonsApple, alt: "newtons apple game" },
        ]}
      />
      <Paragraph>{ph1}</Paragraph>
      <Paragraph>{ph2}</Paragraph>
    </>
  );
};

const Enigmath = (): JSX.Element => {
  const language = useContext(LanguageContext);
  const { section4 } = language?.texts;
  const { title, ph1, ph2, ph3 } = section4.list[1];

  return (
    <>
      <Title>{title}</Title>
      <ImageRow
        images={[
          { src: enigmath1, alt: "enigmath math puzzle game" },
          { src: enigmath2, alt: "enigmath math puzzle game" },
          { src: enigmath3, alt: "enigmath math puzzle game" },
        ]}
      />
      <Paragraph>
        {ph1[0]} <Link to={GITHUB_PARTNER}>{ph1[1]}</Link> {ph1[2]}
      </Paragraph>
      <Paragraph>{ph2}</Paragraph>
      <Paragraph>
        {ph3[0]} <Link to={ENIGMATH}>{ph3[1]}</Link>
      </Paragraph>
    </>
  );
};

const SociosAOM = (): JSX.Element => {
  const language = useContext(LanguageContext);
  const { section4 } = language?.texts;
  const { title, ph1, ph2 } = section4.list[2];

  return (
    <>
      <Title>{title}</Title>
      <ImageRow
        images={[
          { src: sociosAom1, alt: "Socios AOM App" },
          { src: sociosAom2, alt: "Socios AOM App" },
          { src: sociosAom3, alt: "Socios AOM App" },
        ]}
      />
      <Paragraph>{ph1}</Paragraph>
      <Paragraph>
        {ph2[0]} <Link to={SOCIOS_AOM}>{ph2[1]}</Link> {ph2[2]}
      </Paragraph>
    </>
  );
};

const WebAOM = (): JSX.Element => {
  const language = useContext(LanguageContext);
  const { section4 } = language?.texts;
  const { title, ph1, ph2 } = section4.list[3];

  return (
    <>
      <Title>{title}</Title>
      <img src={webAom} alt="Web AOM" className="w-full rounded" />
      <Paragraph>
        {ph1[0]} <Link to={WEB_AOM}>{ph1[1]}</Link>
      </Paragraph>
      <Paragraph>{ph2}</Paragraph>
    </>
  );
};

const StudentsAssociation = (): JSX.Element => {
  const language = useContext(LanguageContext);
  const { section4 } = language?.texts;
  const { title, ph1, ph2 } = section4.list[4];

  return (
    <>
      <Title>{title}</Title>
      <ImageRow
        images={[
          { src: students1, alt: "StudentsAssociation Website" },
          { src: students2, alt: "StudentsAssociation Website" },
        ]}
      />
      <Paragraph>{ph1}</Paragraph>
      <Paragraph>{ph2}</Paragraph>
    </>
  );
};

const PhotographySeller = (): JSX.Element => {
  const language = useContext(LanguageContext);
  const { section4 } = language?.texts;
  const { title, ph1, ph2 } = section4.list[5];

  return (
    <>
      <Title>{title}</Title>
      <ImageRow
        images={[
          { src: phSeller1, alt: "PhotographySeller Website" },
          { src: phSeller2, alt: "PhotographySeller Website" },
        ]}
      />
      <Paragraph>{ph1}</Paragraph>
      <Paragraph>
        {ph2[0]} <Link to={PHOTOGRAPHY_SELLER}>{ph2[1]}</Link> {ph2[2]}
      </Paragraph>
    </>
  );
};

const ValentinoGuerra = (): JSX.Element => {
  const language = useContext(LanguageContext);
  const { section4 } = language?.texts;
  const { title, ph1, ph2, ph3, btn } = section4.list[6];

  return (
    <>
      <Title>{title}</Title>
      <div>
        <Link to={VALENTINO_GUERRA}>{btn}</Link>
      </div>
      <Paragraph>{ph1}</Paragraph>
      <Paragraph>{ph2}</Paragraph>
      <Paragraph>{ph3}</Paragraph>
    </>
  );
};

const Splitnow = (): JSX.Element => {
  const language = useContext(LanguageContext);
  const { section4 } = language?.texts;
  const { title, ph1, ph2, btn } = section4.list[7];

  return (
    <>
      <Title>{title}</Title>
      <img src={splitnow} alt="splitnow" className="w-full rounded" />
      <div>
        <Link to={SPLITNOW_GITHUB}>{btn}</Link>
      </div>
      <Paragraph>{ph1}</Paragraph>
      <Paragraph>
        {ph2} <Link to={SPLITNOW}>splitnow.app</Link>
      </Paragraph>
    </>
  );
};

export const projects = [
  <MobileGames />,
  <Enigmath />,
  <SociosAOM />,
  <WebAOM />,
  <StudentsAssociation />,
  <PhotographySeller />,
  <ValentinoGuerra />,
  <Splitnow />,
];
