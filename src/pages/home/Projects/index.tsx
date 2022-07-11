import { Card } from "../../../components/Card";
import { TitleIcon } from "../../../components/TitleIcon";
import React, { useContext, useState } from "react";
import { Divider } from "../../../components/Divider";

import briefcase from "../../../assets/images/briefcase.png";
import { LanguageContext } from "../../../App";
import { ProjectSummary } from "./ProjectSummary";
import { useProjects } from "../../../hooks/useProjects";
import { ProjectDetails } from "./ProjectDetails";

export const Projects = React.forwardRef<HTMLElement, {}>(({}, ref): JSX.Element => {
  const [selected, setSelected] = useState<number | null>(null);
  const projects = useProjects();
  const language = useContext(LanguageContext);
  const { section4 } = language?.texts;

  const closeProject = () => setSelected(null);

  return (
    <Card ref={ref}>
      <div className="flex items-center justify-between">
        <TitleIcon title={section4.title} iconSrc={briefcase} />
      </div>
      <Divider />
      {selected ? (
        <ProjectDetails project={projects[selected]} onClose={closeProject} />
      ) : (
        projects.map((project) => {
          const onClick = () => setSelected(project.id);
          return <ProjectSummary project={project} key={project.id} onClick={onClick} />;
        })
      )}
    </Card>
  );
});
