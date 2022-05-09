//react
import { useState, useEffect } from 'react';
//components
import MobileHeader from '../components/Header/MobileHeader';
import DesktopHeader from '../components/Header/DesktopHeader';
import HomeContent from '../components/Home/HomeContent';
import HomeSidepanel from '../components/Home/HomeSidepanel';
//hooks
import useClientWindow from '../hooks/useClientWindow.js';



export default function Main() {

  const [mobileScreen, setMobileScreen] = useState();
  const [headerSelection, setHeaderSelection] = useState({
    home: true,
    projects: false,
    contacts: false
  });
  //get client window size: clientWindow = {window.innerWidth,window.innerHeight}
  const clientWindow = useClientWindow();
  //update state when window changes (usually initial load only)
  useEffect(() => {
    setMobileScreen(clientWindow.width < 640 ? true : false);
    console.log({ mobileScreen });
  }, [clientWindow]);

  return (
    <div className="font-mono flex justify-center sm:items-center sm:h-screen">
      <div className="main-layout-container sm:h-[90%] sm:w-[90%]">

        {!mobileScreen && <DesktopHeader headerSelection={headerSelection} setHeaderSelection={setHeaderSelection} />}

        <div className="content">
          {/* extra subcontainer is necessary to center content inside the overlapping parents */}
          <div className="content-subcontainer sm:m-8 flex flex-col items-center">
            {headerSelection.home && <HomeContent />}
          </div>
        </div>
        <div className="sidepanel m-1">
          <div className="sidepanel-subcontainer h-full sm:m-8 flex flex-col justify-center">
            {mobileScreen && <MobileHeader headerSelection={headerSelection} setHeaderSelection={setHeaderSelection} />}
            {headerSelection.home && <HomeSidepanel />}

          </div>
        </div>

      </div>
    </div>
  );
}