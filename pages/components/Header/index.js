import React from 'react';

function Header() {
    return (
        <div className='h-full flex items-center divide-x-2 divide-black text-xl text-[#303030] '>
            <button className='px-4 hover:text-[#005500] focus:underline focus:text-[#005500]'
                onClick={() => { console.log(''); }}>Home</button>
            <button className='px-4 hover:text-[#005500] focus:underline focus:text-[#005500]'>Projects</button>
            <button className='px-4 hover:text-[#005500] focus:underline focus:text-[#005500]'>Contacts</button>
        </div>
    );
}

export default Header; 