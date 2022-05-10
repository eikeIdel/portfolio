//react
import { useState, useEffect } from "react";
//components
import MobileHeader from "../components/Header/MobileHeader";
import DesktopHeader from "../components/Header/DesktopHeader";
import HomeContent from "../components/Home/HomeContent";
import HomeSidepanel from "../components/Home/HomeSidepanel";
//hooks
import useClientWindow from "../hooks/useClientWindow.js";

export default function Home() {
  const [mobileScreen, setMobileScreen] = useState();

  //get client window size: clientWindow = {window.innerWidth,window.innerHeight}
  const clientWindow = useClientWindow();
  //update state when window changes (usually initial load only)
  useEffect(() => {
    setMobileScreen(clientWindow.width < 640 ? true : false);
    console.log({ mobileScreen });
  }, [clientWindow]);

  return (
    <>
      <HomeContent />




      <HomeSidepanel />
    </>
  );
}
