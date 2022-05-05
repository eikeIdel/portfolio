//react
import { useState } from 'react';
//components
import Header from './components/Header';
import HomeContent from './components/Home/HomeContent';
import HomeSidepanel from './components/Home/HomeSidepanel';



export default function Main() {
  const [headerSelection, setHeaderSelection] = useState({
    home: true,
    projects: false,
    contacts: false
  });
  return (
    <div className="font-mono flex justify-center items-center h-screen">
      <div className="main-layout-grid-container h-[90%] w-[90%]">
        <div className='header'>
          <div className="header-subcontainer">
            <Header setHeaderSelection={setHeaderSelection} headerSelection={headerSelection} />
          </div>
        </div>

        <div className="content  ">
          <div className="content-subcontainer h-full m-8 flex flex-col items-center">
            {headerSelection.home && <HomeContent />}
          </div>
        </div>
        <div className="sidepanel ">
          <div className="sidepanel-subcontainer h-full m-8  flex flex-col items-center">
            {headerSelection.home && <HomeSidepanel />}
            {console.log(headerSelection)}
          </div>
        </div>

      </div>
    </div>
  );
}