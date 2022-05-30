import { useContext } from "react";
import { LanguageContext } from "../../App";
import { Footer } from "../../components/Footer";
import { AboutMe } from "./AboutMe";
import { Background } from "./Background";
import { ContactMe } from "./ContactMe";
import { MainSection } from "./MainSection";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

export const Home = (): JSX.Element => {
  const language = useContext(LanguageContext);
  const { section1 } = language?.texts;

  return (
    <>
      <div className="flex w-full flex-col items-center gap-24 relative overflow-hidden">
        <Background />
        <main className="flex w-full max-w-screen-md flex-col items-center justify-center gap-24 px-4 py-6 md:gap-40">
          <div className="flex flex-col items-center justify-center gap-12 md:gap-24">
            <span
              className="py-1/2 inline-flex cursor-pointer select-none rounded border border-light-48/160 bg-white bg-opacity-0 px-2 text-sm font-light text-white transition hover:bg-opacity-10"
              onClick={language?.toggle}
            >
              {section1.btn}
            </span>
            <MainSection />
          </div>
          <AboutMe />
          <Skills />
          <Projects />
          <ContactMe />
        </main>
        <Footer />
      </div>
    </>
  );
};
