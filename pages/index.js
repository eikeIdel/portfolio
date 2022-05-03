import Header from './components/Header';
import HomeContent from './components/Home/HomeContent';
import HomeSidepanel from './components/Home/HomeSidepanel';
import second from './components/Home/HomeSidepanel';

export default function Main() {
  return (
    <div className="font-mono flex justify-center items-center h-screen">
      <div className="main-layout-grid-container h-[90%] w-[90%]">
        <div className='header rounded-lg shadow-inner   bg-[#9EC1A3]'>
          <div className="header-subcontainer">
            <Header />
          </div>
        </div>

        <div className="content rounded-lg shadow-inner  bg-[#B7D1B3]">
          <div className="content-subcontainer">
            <HomeContent />
          </div>
        </div>
        <div className="sidepanel rounded-lg shadow-inner  bg-[#b7cba8] ">
          <div className="sidepanel-subcontainer">
            <HomeSidepanel />
          </div>
        </div>

      </div>
    </div>
  );
}