import { Link } from "../../components/Link";
import { AboutMe } from "./AboutMe";
import { Background } from "./Background";
import { MainSection } from "./MainSection";

export const Home = (): JSX.Element => {
  return (
    <>
      <Background />
      <main className="jusitfy-center mx-auto flex h-screen w-full max-w-screen-md flex-col items-center gap-32 px-4 py-6 md:gap-48">
        <div className="jusitfy-center flex flex-col items-center gap-12 md:gap-24">
          <Link>Cambiar a español</Link>
          <MainSection />
        </div>
        <AboutMe />
      </main>
    </>
  );
};
