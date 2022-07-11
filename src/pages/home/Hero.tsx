import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Icon } from "../../components/Icon";
import { Link } from "../../components/Link";
import { Bold, Paragraph } from "../../components/Text";
import { SuperTitle } from "./SuperTitle";
import { TitleIcon } from "../../components/TitleIcon";

import hand from "../../assets/images/hand.png";
import { Ref, useContext } from "react";
import { LanguageContext } from "../../App";
import { GITHUB, GOOGLE_MAPS, INSTAGRAM, LINKEDIN } from "../../app/consts";
import { RefObject } from "react";

interface Props {
  aboutMeRef: RefObject<HTMLElement>;
  skillsRef: RefObject<HTMLElement>;
  projectsRef: RefObject<HTMLElement>;
  contactMeRef: RefObject<HTMLElement>;
}

export const Hero = ({ aboutMeRef, contactMeRef, projectsRef, skillsRef }: Props): JSX.Element => {
  const language = useContext(LanguageContext);
  const { section1 } = language?.texts;

  const goToSection = (ref: RefObject<HTMLElement>) => {
    const top = ref.current?.offsetTop ?? 0;
    window.scrollTo({ top: top - 50, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-16 md:gap-32">
      <SuperTitle />
      <Card>
        <div className="flex items-center justify-between">
          <TitleIcon iconSrc={hand} title={section1.cardTitle} />
          <div className="alignItems flex gap-3">
            <a href={GITHUB} target="_blank">
              <Icon name="github" />
            </a>
            <a href={LINKEDIN} target="_blank">
              <Icon name="linkedIn" />
            </a>
            <a href={INSTAGRAM} target="_blank">
              <Icon name="instagram" />
            </a>
          </div>
        </div>
        <Paragraph>
          {section1.ph1[0]} <Link to={GOOGLE_MAPS}>{section1.ph1[1]}</Link>
          {section1.ph1[2]} <Bold>{section1.ph1[3]}</Bold> {section1.ph1[4]} <Bold>{section1.ph1[5]}</Bold> {section1.ph1[6]}
        </Paragraph>
        <Paragraph>
          <Bold>{section1.ph2}</Bold>
        </Paragraph>
        <nav className="alignItems flex flex-wrap justify-between gap-8">
          <Button expand onClick={() => goToSection(aboutMeRef)}>
            {section1.btn1}
          </Button>
          <Button expand onClick={() => goToSection(skillsRef)}>
            {section1.btn2}
          </Button>
          <Button expand onClick={() => goToSection(projectsRef)}>
            {section1.btn3}
          </Button>
          <Button expand primary onClick={() => goToSection(contactMeRef)}>
            {section1.btn4}
          </Button>
        </nav>
      </Card>
    </div>
  );
};
