import { Button } from "../../Button";
import { Card } from "../../Card";
import { Icon } from "../../Icon";
import { Link } from "../../Link";
import { Bold, Paragraph } from "../../Text";
import { SuperTitle } from "./SuperTitle";
import { TitleIcon } from "../../TitleIcon";

import hand from "../../../assets/images/hand.png";
import { useContext } from "react";
import { LanguageContext } from "../../../App";
import { GITHUB, GOOGLE_MAPS, INSTAGRAM, LINKEDIN } from "../../../app/consts";
import { RefObject } from "react";

interface Props {
  aboutMeRef: RefObject<HTMLElement>;
  skillsRef: RefObject<HTMLElement>;
  projectsRef: RefObject<HTMLElement>;
  contactMeRef: RefObject<HTMLElement>;
}

export const Hero = ({ aboutMeRef, contactMeRef, projectsRef, skillsRef }: Props): JSX.Element => {
  const language = useContext(LanguageContext);
  const { hero: texts } = language?.texts;

  const goToSection = (ref: RefObject<HTMLElement>) => {
    const top = ref.current?.offsetTop ?? 0;
    window.scrollTo({ top: top - 50, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-16 md:gap-32">
      <SuperTitle />
      <Card>
        <div className="flex items-center justify-between">
          <TitleIcon iconSrc={hand} title={texts.cardTitle} />
          <div className="alignItems flex gap-3">
            <a href={GITHUB} target="_blank">
              <Icon name="github" />
            </a>
            <a href={LINKEDIN} target="_blank">
              <Icon name="linkedIn" />
            </a>
            {/* <a href={INSTAGRAM} target="_blank">
              <Icon name="instagram" />
            </a> */}
          </div>
        </div>
        <Paragraph>
          {texts.ph1[0]} <Link to={GOOGLE_MAPS}>{texts.ph1[1]}</Link>
          {texts.ph1[2]} <Bold>{texts.ph1[3]}</Bold> {texts.ph1[4]} <Bold>{texts.ph1[5]}</Bold> {texts.ph1[6]}
        </Paragraph>
        <Paragraph>
          <Bold>{texts.ph2}</Bold>
        </Paragraph>
        <nav className="alignItems flex flex-wrap justify-between gap-8">
          <Button expand onClick={() => goToSection(aboutMeRef)}>
            {texts.btn1}
          </Button>
          <Button expand onClick={() => goToSection(skillsRef)}>
            {texts.btn2}
          </Button>
          <Button expand onClick={() => goToSection(projectsRef)}>
            {texts.btn3}
          </Button>
          <Button expand primary onClick={() => goToSection(contactMeRef)}>
            {texts.btn4}
          </Button>
        </nav>
      </Card>
    </div>
  );
};
