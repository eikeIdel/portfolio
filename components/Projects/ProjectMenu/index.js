import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalProvider";

function ProjectMenu() {
  const { setProject } = useContext(GlobalContext);

  function handleClick(projectName) {
    setProject(projectName);
  }
  return (
    <div className="m-auto grid grid-cols-2 grid-rows-4 gap-1 text-[#005500]">
      <div className="px-4 row-start-1 ">
        <p onClick={() => handleClick("Portfolio")}>Porfolio</p>
      </div>
      <div className="px-4 row-start-2 col-start-2">
        <p onClick={() => handleClick("MyChart")}>MyChart</p>
      </div>
      <div className="px-4 row-start-3">
        <p onClick={() => handleClick("EatAnApple")}>EatAnApple</p>
      </div>
      <div className="px-4 row-start-4 col-start-2">
        <p onClick={() => handleClick("Formly.ai")}>formly.ai</p>
      </div>
    </div>
  );
}

export default ProjectMenu;
