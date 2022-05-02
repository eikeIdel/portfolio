export default function Home() {
  return (
    <div className="wrapper h-screen w-screen flex justify-center items-center">
      <div className="main-container w-full m-5">
        <div className='header rounded-lg shadow-inner w-[50%] h-[20vh] mt-[3vh] ml-[2vw]  bg-[#9EC1A3]'>
        </div>

        <div className="sidebar rounded-lg shadow-inner w-[90vw] h-[70vh] mt-[-4vh] z-10 bg-[#b7cba8] ">

        </div>
        <div className="content rounded-lg shadow-inner w-[62.5] h-[92vh]  mt-[-89vh] ml-[36vw] z-20 bg-[#B7D1B3]"></div>
      </div>
    </div>
  );
}
