import { Card } from "../Card";
import { Divider } from "../Divider";
import { TitleIcon } from "../TitleIcon";
import { ColoredIcon } from "../Icon";
import React, { RefObject, useContext } from "react";
import { LanguageContext } from "../../App";
import { Frame } from "../Frame";

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
import vue from "../../assets/images/vue.png";
import mongodb from "../../assets/images/mongodb.png";
import graphql from "../../assets/images/graphql.png";

export const Skills = React.forwardRef<HTMLElement, {}>(({}, ref): JSX.Element => {
  const language = useContext(LanguageContext);
  const { skills: texts } = language?.texts;

  const Item = ({ name, src }: { name: string; src: string }) => (
    <div className="flex gap-2 text-white">
      <ColoredIcon src={src} alt={name} />
      {name}
    </div>
  );

  const SubtitleLight = ({ children }: { children: string }) => <span className="text-lg font-light text-white">{children}</span>;

  const ItemGroup = ({ children }: { children: React.ReactNode }) => <div className="flex flex-wrap gap-6">{children}</div>;

  return (
    <Card ref={ref}>
      <TitleIcon iconSrc={chessHorse} title={texts.title} />
      <SubtitleLight>{texts.subtitle1}</SubtitleLight>
      <ItemGroup>
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
      </ItemGroup>
      <Divider />
      <SubtitleLight>{texts.subtitle2}</SubtitleLight>
      <ItemGroup>
        <Item name="Sass" src={sass} />
        <Item name="MongoDB" src={mongodb} />
        <Item name="Flutter" src={flutter} />
      </ItemGroup>
      <Divider />
      <SubtitleLight>{texts.subtitle3}</SubtitleLight>
      <ItemGroup>
        <Item name="Vue" src={vue} />
        <Item name="GraphQL" src={graphql} />
        <Item name="MongoDB" src={mongodb} />
        <Item name="React Native" src={react} />
      </ItemGroup>
    </Card>
  );
});
