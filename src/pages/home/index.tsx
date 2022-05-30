import { useContext } from "react";
import { LanguageContext } from "../../App";
import { Footer } from "../../components/Footer";
import { Link } from "../../components/Link";
import { useLanguage } from "../../hooks/useLanguage";
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
      <Background />
      <main className="jusitfy-center mx-auto flex h-screen w-full max-w-screen-md flex-col items-center gap-24 px-4 py-6 md:gap-40">
        <div className="jusitfy-center flex flex-col items-center gap-12 md:gap-24">
          <Link>{section1.btn}</Link>
          <MainSection />
        </div>
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
        <Footer />
      </main>
    </>
  );
};
