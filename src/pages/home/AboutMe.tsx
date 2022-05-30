import { Card } from "../../components/Card";
import { Divider } from "../../components/Divider";
import { Expandable } from "../../components/Expandable";
import { Link } from "../../components/Link";
import { SubititleIcon } from "../../components/SubtitleIcon";
import { Paragraph } from "../../components/Text";
import { TitleIcon } from "../../components/TitleIcon";

import about01 from "../../assets/images/about01.png";
import about02 from "../../assets/images/about02.png";
import about03 from "../../assets/images/about03.png";
import dinosaur from "../../assets/images/dinosaur.png";
import reading from "../../assets/images/reading.png";
import checkCalendar from "../../assets/images/check_calendar.png";
import notebook from "../../assets/images/notebook.png";
import { useLanguage } from "../../hooks/useLanguage";
import { useContext } from "react";
import { LanguageContext } from "../../App";

export const AboutMe = (): JSX.Element => {
  const language = useContext(LanguageContext);
  const { section2 } = language?.texts;
  const { expandable1, expandable2, expandable3 } = section2;

  return (
    <Card>
      <TitleIcon iconSrc={dinosaur} title={section2.title} />
      <div className="flex w-full flex-wrap justify-between gap-8">
        <img
          src={about01}
          alt="Valentino Guerra on a chair"
          className="h-24 flex-1 rounded object-cover md:h-32"
        />
        <img
          src={about02}
          alt="Valentino Guerra with a friend"
          className="h-24 flex-1 rounded object-cover md:h-32"
        />
        <img
          src={about03}
          alt="Valentino Guerra with friends"
          className="h-24 flex-1 rounded object-cover md:h-32"
        />
      </div>
      <div className="flex flex-col gap-4">
        <Paragraph>{section2.ph1}</Paragraph>
        <Paragraph>{section2.ph2}</Paragraph>
        <Paragraph>{section2.ph3}</Paragraph>
        <Paragraph>{section2.ph4}</Paragraph>
        <Divider />
        <Expandable
          title={<SubititleIcon iconSrc={reading} title={expandable1.title} />}
        >
          <Paragraph>{expandable1.ph1}</Paragraph>
          <Paragraph>
            {expandable1.ph2[0]} <Link>{expandable1.ph2[1]}</Link>
          </Paragraph>
          <Paragraph>{expandable1.ph3}</Paragraph>
        </Expandable>
        <Divider />
        <Expandable
          title={
            <SubititleIcon iconSrc={checkCalendar} title={expandable2.title} />
          }
        >
          <Paragraph>{expandable2.ph1} </Paragraph>
          <ul className="mt-2 flex list-disc flex-col gap-2 pl-6">
            <li>{expandable2.list[0]}</li>
            <li>{expandable2.list[1]}</li>
            <li>{expandable2.list[2]}</li>
            <li>{expandable2.list[3]}</li>
            <li>{expandable2.list[4]}</li>
          </ul>
        </Expandable>
        <Divider />
        <Expandable
          title={<SubititleIcon iconSrc={notebook} title={expandable3.title} />}
        >
          <Paragraph>{expandable3.ph1}</Paragraph>
          <Paragraph>
            {expandable3.ph2[0]} <Link>{expandable3.ph2[1]}</Link>
          </Paragraph>
        </Expandable>
      </div>
    </Card>
  );
};
