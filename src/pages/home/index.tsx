import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Icon } from "../../components/Icon";
import { Link } from "../../components/Link";
import { Bold, Paragraph } from "../../components/Text";
import { Background } from "./Background";
import { SuperTitle } from "./SuperTitle";
import { TitleIcon } from "./TitleIcon";

export const Home = (): JSX.Element => {
  return (
    <>
      <Background />
      <main className="jusitfy-center mx-auto flex h-screen w-full max-w-screen-md flex-col items-center gap-12 md:gap-24 px-4 py-6">
        <Link>Cambiar a español</Link>
        <div className="flex flex-col gap-32">
          <SuperTitle />
          <Card>
            <div className="flex items-center justify-between">
              <TitleIcon icon="hand" title="Hello!" />
              <div className="alignItems flex gap-3">
                <Icon name="github" clickable />
                <Icon name="linkedIn" clickable />
                <Icon name="instagram" clickable />
              </div>
            </div>
            <Paragraph>
              I am a software developer from{" "}
              <Link>Mar del Plata, Argentina</Link>, who loves to{" "}
              <Bold>explore</Bold> and <Bold>create</Bold> new things.
            </Paragraph>
            <Paragraph>
              <Bold>To make something awesome, make it simple.</Bold>
            </Paragraph>
            <div className="alignItems flex justify-between gap-8 flex-wrap">
              <Button expand>About&nbsp;me</Button>
              <Button expand>My&nbsp;work</Button>
              <Button expand>My&nbsp;skills</Button>
              <Button expand primary>
                Contact&nbsp;me!
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </>
  );
};
