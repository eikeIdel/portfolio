//react
import { useState, useEffect } from 'react';
//components
import DesktopHeader from '../components/Header/DesktopHeader';
import HomeContent from '../components/Home/HomeContent';
import HomeSidepanel from '../components/Home/HomeSidepanel';
//hooks
import useClientWindow from '../hooks/useClientWindow.js';
//modules
import { Turn as Hamburger } from 'hamburger-react';


export default function Main() {

  const [mobileScreen, setMobileScreen] = useState();
  const [headerSelection, setHeaderSelection] = useState({
    home: true,
    projects: false,
    contacts: false
  });
  //get client window size: clientWindow = {window.innerWidth,window.innerHeight}
  const clientWindow = useClientWindow();

  useEffect(() => {
    setMobileScreen(clientWindow.width < 640 ? true : false);
    console.log(mobileScreen);
  }, [clientWindow]);

  return (
    <div className="font-mono flex justify-center sm:items-center sm:h-screen">
      <div className="main-layout-container sm:h-[90%] sm:w-[90%]">

        {!mobileScreen && <DesktopHeader headerSelection={headerSelection} setHeaderSelection={setHeaderSelection} />}

        <div className="content">
          {/* extra subcontainer is necessary to center content inside the overlapping main divs */}
          <div className="content-subcontainer sm:h-full sm:m-8 flex flex-col items-center">
            {headerSelection.home && <HomeContent />}
          </div>
        </div>
        <div className="sidepanel m-1">
          <div className="sidepanel-subcontainer sm:h-full sm:m-8 flex flex-col items-center">
            {headerSelection.home && <HomeSidepanel />}

          </div>
        </div>

      </div>
    </div>
  );
}