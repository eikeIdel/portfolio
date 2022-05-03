import React from 'react';


function Test() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className='main-layout-grid-container w-[90%] h-[90%]  bg-slate-500'>
                <div className="header z-10  bg-red-500">Navbar</div>
                <div className="content z-30  bg-green-500 opacity-50">Content</div>
                <div className="sidepanel z-20   bg-blue-500 opacity-50">Sidepanel</div>
            </div>
        </div>
    );
}

export default Test;