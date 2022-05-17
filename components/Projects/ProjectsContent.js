import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalProvider";

function ProjectsContent() {
  const { project } = useContext(GlobalContext);

  return <div>current project is: {project}</div>;
}

export default ProjectsContent;
