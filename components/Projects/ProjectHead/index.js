//react
import { useContext, useState, useEffect, useRef } from "react";
//context provider
import { GlobalContext } from "../../../context/GlobalProvider";
//modules
import { useSpring, animated } from "react-spring";

function ProjectHead() {
  //states
  const [toggle, setToggle] = useState(false);
  //contect
  const { project, setProject } = useContext(GlobalContext);
  //initial load
  useEffect(() => {
    setToggle((t) => !t);
    console.log(n);
  }, [n]);

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
        <animated.div style={styles} className="ml-2 text-xs text-gray-600">
          {"<--"} click here to change project
        </animated.div>
      </div>
      <div className="h-full"></div>
    </div>
  );
}

export default ProjectHead;
