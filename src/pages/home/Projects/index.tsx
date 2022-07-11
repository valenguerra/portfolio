import { Card } from "../../../components/Card";
import { TitleIcon } from "../../../components/TitleIcon";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
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
  const positionRef = useRef<HTMLDivElement>(null);

  const { section4 } = language?.texts;

  const closeProject = () => setSelected(null);

  useEffect(() => {
    positionRef.current?.scrollIntoView();
  }, [selected]);

  return (
    <Card ref={ref} className="relative">
      <div ref={positionRef} className="absolute" style={{ top: -100 }} />
      <div className="flex items-center justify-between">
        <TitleIcon title={section4.title} iconSrc={briefcase} />
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
