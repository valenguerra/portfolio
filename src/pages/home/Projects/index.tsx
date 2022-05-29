import { Card } from "../../../components/Card";
import { TitleIcon } from "../../../components/TitleIcon";
import { useState } from "react";
import { PageNav } from "../../../components/PageNav";
import { Divider } from "../../../components/Divider";
import { projects } from "./list";

import briefcase from "../../../assets/images/briefcase.png";

export const Projects = (): JSX.Element => {
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
        <TitleIcon title="Projects" iconSrc={briefcase} />
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
