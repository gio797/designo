import { ProjectType } from "../../types";
import DesignProject from "./DesignProject";

const DesignProjects: React.FC<{ projects: ProjectType[] }> = ({
  projects,
}) => {
  console.log(projects);
  return (
    <ul>
      {projects.map((item) => (
        <DesignProject project={item} key={item.title} />
      ))}
    </ul>
  );
};

export default DesignProjects;
