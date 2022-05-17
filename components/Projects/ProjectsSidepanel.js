//react
import { useContext } from "react";
//components
import ProjectMenu from "./ProjectMenu";
import { GlobalContext } from "../../context/GlobalProvider";
import ProjectHead from "./ProjectHead";

function ProjectsSidepanel() {
  const { project } = useContext(GlobalContext);
  return <>{project === "start" ? <ProjectMenu /> : <ProjectHead />}</>;
}

export default ProjectsSidepanel;
