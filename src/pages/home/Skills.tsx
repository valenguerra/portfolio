import { Card } from "../../components/Card";
import { Divider } from "../../components/Divider";
import { Subtitle } from "../../components/Text";
import { TitleIcon } from "../../components/TitleIcon";

import chessHorse from "../../assets/images/chess_horse.png";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import javascript from "../../assets/images/javascript.png";
import jQuery from "../../assets/images/jQuery.png";
import nodejs from "../../assets/images/nodejs.png";
import react from "../../assets/images/react.png";
import styledComponents from "../../assets/images/styled_components.png";
import webpack from "../../assets/images/webpack.png";
import nextjs from "../../assets/images/nextjs.png";
import tailwind from "../../assets/images/tailwind.png";
import figma from "../../assets/images/figma.png";
import typescript from "../../assets/images/typescript.png";
import sass from "../../assets/images/sass.png";
import flutter from "../../assets/images/flutter.png";
import mongodb from "../../assets/images/mongodb.png";
import graphql from "../../assets/images/graphql.png";
import { Frame } from "../../components/Frame";
import { ColoredIcon } from "../../components/Icon";
import { useContext } from "react";
import { LanguageContext } from "../../App";

export const Skills = (): JSX.Element => {
  const language = useContext(LanguageContext);
  const { section3 } = language?.texts;

  const Item = ({ name, src }: { name: string; src: string }) => (
    <Frame>
      <ColoredIcon src={src} />
      {name}
    </Frame>
  );

  const SubtitleLight = ({ children }: { children: string }) => (
    <span className="text-lg font-light text-white">{children}</span>
  );

  return (
    <Card>
      <TitleIcon iconSrc={chessHorse} title={section3.title} />
      <SubtitleLight>{section3.subtitle1}</SubtitleLight>
      <div className="flex flex-wrap gap-4">
        <Item name="HTML" src={html} />
        <Item name="CSS" src={css} />
        <Item name="Javascript" src={javascript} />
        <Item name="jQuery" src={jQuery} />
        <Item name="Node.js" src={nodejs} />
        <Item name="React" src={react} />
        <Item name="StyledComponents" src={styledComponents} />
        <Item name="Webpack" src={webpack} />
        <Item name="Next.js" src={nextjs} />
        <Item name="TailwindCSS" src={tailwind} />
        <Item name="Figma" src={figma} />
        <Item name="Typescript" src={typescript} />
      </div>
      <Divider />
      <SubtitleLight>{section3.subtitle2}</SubtitleLight>
      <div className="flex flex-wrap gap-4">
        <Item name="Sass" src={sass} />
        <Item name="MongoDB" src={mongodb} />
        <Item name="Flutter" src={flutter} />
      </div>
      <Divider />
      <SubtitleLight>{section3.subtitle3}</SubtitleLight>
      <div className="flex flex-wrap gap-4 pb-4">
        <Item name="GraphQL" src={graphql} />
        <Item name="MongoDB" src={mongodb} />
        <Item name="React Native" src={react} />
      </div>
    </Card>
  );
};
