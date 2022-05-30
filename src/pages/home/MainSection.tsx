import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Icon } from "../../components/Icon";
import { Link } from "../../components/Link";
import { Bold, Paragraph } from "../../components/Text";
import { SuperTitle } from "./SuperTitle";
import { TitleIcon } from "../../components/TitleIcon";

import hand from "../../assets/images/hand.png";
import { useContext } from "react";
import { LanguageContext } from "../../App";
import { GOOGLE_MAPS } from "../../app/consts";

export const MainSection = (): JSX.Element => {
  const language = useContext(LanguageContext);
  const { section1 } = language?.texts;

  return (
    <div className="flex flex-col gap-16 md:gap-32">
      <SuperTitle />
      <Card>
        <div className="flex items-center justify-between">
          <TitleIcon iconSrc={hand} title={section1.cardTitle} />
          <div className="alignItems flex gap-3">
            <Icon name="github" onClick={() => {}} />
            <Icon name="linkedIn" onClick={() => {}} />
            <Icon name="instagram" onClick={() => {}} />
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
          <Button expand>{section1.btn1}</Button>
          <Button expand>{section1.btn2}</Button>
          <Button expand>{section1.btn3}</Button>
          <Button expand primary>
            {section1.btn4}
          </Button>
        </nav>
      </Card>
    </div>
  );
};
