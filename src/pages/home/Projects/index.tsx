import { Card } from "../../../components/Card";
import { TitleIcon } from "../../../components/TitleIcon";
import { useContext, useState } from "react";
import { PageNav } from "../../../components/PageNav";
import { Divider } from "../../../components/Divider";
import { projects } from "./projects";

import briefcase from "../../../assets/images/briefcase.png";
import { LanguageContext } from "../../../App";

export const Projects = (): JSX.Element => {
  const language = useContext(LanguageContext);
  const { section4} = language?.texts;
  const [currentProject, setCurrentProject] = useState<number>(0);

  const goToNextProject = () => {
    if (currentProject >= projects.length - 1) return;
    setCurrentProject(currentProject + 1);
  };

  const goToPreviousProject = () => {
    if (currentProject === 0) return;
    setCurrentProject(currentProject - 1);
  };

  return (
    <Card>
      <div className="flex items-center justify-between">
        <TitleIcon title={section4.title} iconSrc={briefcase} />
        <PageNav
          className="hidden sm:flex"
          currentPage={currentProject + 1}
          total={projects.length}
          goToNext={goToNextProject}
          goToPrevious={goToPreviousProject}
        />
      </div>
      <Divider />
      {projects[currentProject]}
      <div className="flex justify-center sm:hidden">
        <PageNav
          currentPage={currentProject + 1}
          total={projects.length}
          goToNext={goToNextProject}
          goToPrevious={goToPreviousProject}
        />
      </div>
    </Card>
  );
};
