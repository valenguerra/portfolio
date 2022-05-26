import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Icon } from "../../components/Icon";
import { Link } from "../../components/Link";
import { Bold, Paragraph } from "../../components/Text";
import { SuperTitle } from "./SuperTitle";
import { TitleIcon } from "../../components/TitleIcon";

import hand from "../../assets/images/hand.png";

export const MainSection = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-16 md:gap-32">
      <SuperTitle />
      <Card>
        <div className="flex items-center justify-between">
          <TitleIcon iconSrc={hand} title="Hello!" />
          <div className="alignItems flex gap-3">
            <Icon name="github" clickable />
            <Icon name="linkedIn" clickable />
            <Icon name="instagram" clickable />
          </div>
        </div>
        <Paragraph>
          I am a software developer from <Link>Mar del Plata, Argentina</Link>,
          who loves to <Bold>explore</Bold> and <Bold>create</Bold> new things.
        </Paragraph>
        <Paragraph>
          <Bold>To make something awesome, make it simple.</Bold>
        </Paragraph>
        <nav className="alignItems flex flex-wrap justify-between gap-8">
          <Button expand>About&nbsp;me</Button>
          <Button expand>My&nbsp;work</Button>
          <Button expand>My&nbsp;skills</Button>
          <Button expand primary>
            Contact&nbsp;me!
          </Button>
        </nav>
      </Card>
    </div>
  );
};
