//react
import { useContext, useState, useEffect, useRef } from "react";
//context provider
import { GlobalContext } from "../../../context/GlobalProvider";
//modules
import { useSpring, animated } from "react-spring";

function ProjectHead() {
  //states
  const [initialVisit, setInitialVisit] = useState();
  //contect
  const { project, setProject } = useContext(GlobalContext);
  //initial load
  useEffect(() => {
    localStorage.getItem("initialVisit") !== "false" && setInitialVisit(true);
    localStorage.setItem("initialVisit", "false");
  }, []);

  function handleClick(projectName) {
    setProject(projectName);
  }
  const n = useRef(0);
  const styles = useSpring({
    loop: () => 1 > n.current++,
    config: { duration: 500 },
    from: { opacity: 0 },
    to: [{ opacity: 1 }, { opacity: 0 }],
  });

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center pl-2 pt-1 ">
        <p className="text-[#005500]" onClick={() => handleClick("start")}>
          {project}
        </p>
        {initialVisit && (
          <animated.div style={styles} className="ml-2 text-xs text-gray-600">
            {"<--"} click here to change project
          </animated.div>
        )}
      </div>
      <div className="h-full"></div>
    </div>
  );
}

export default ProjectHead;
