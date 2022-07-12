import { Card } from "../../Card";
import { TitleIcon } from "../../TitleIcon";
import React, { useContext, useState } from "react";
import { Divider } from "../../Divider";

import briefcase from "../../../assets/images/briefcase.png";
import { LanguageContext } from "../../../App";
import { ProjectSummary } from "./ProjectSummary";
import { useProjects } from "../../../hooks/useProjects";
import { ProjectDetails } from "./ProjectDetails";

export const Projects = React.forwardRef<HTMLElement, {}>(({}, ref): JSX.Element => {
  const [selected, setSelected] = useState<number | null>(null);
  const projects = useProjects();
  const language = useContext(LanguageContext);

  const { projects: texts } = language?.texts;

  const closeProject = () => setSelected(null);

  return (
    <Card ref={ref} className="relative">
      <div className="flex items-center justify-between">
        <TitleIcon title={texts.title} iconSrc={briefcase} />
      </div>
      <Divider />
      {selected === null ? (
        projects.map((project) => {
          const onClick = () => setSelected(project.id);
          return <ProjectSummary project={project} key={project.id} onClick={onClick} />;
        })
      ) : (
        <ProjectDetails project={projects[selected]} onClose={closeProject} />
      )}
    </Card>
  );
});
