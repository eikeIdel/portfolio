import React from 'react';

function Header({ setHeaderSelection, headerSelection, className }) {
    function handleClick(clickedBtn) {
        let newSelection = { home: false, projects: false, contacts: false };
        newSelection[clickedBtn] = true;
        setHeaderSelection(newSelection);
    }

    return (
        <div className={`h-full flex items-center divide-x-2 divide-black  sm:bg-transparent sm:text-xl text-[#303030] ${className}`}>
            <button className={`px-5 sm:px-4 hover:text-[#005500] ${headerSelection.home && 'underline text-[#005500]'}`} onClick={() => { handleClick('home'); }}>Home</button>
            <button className={`px-5 sm:px-4 hover:text-[#005500] ${headerSelection.projects && 'underline text-[#005500]'}`} onClick={() => { handleClick('projects'); }}>Projects</button>
            <button className={`px-5 sm:px-4 hover:text-[#005500] ${headerSelection.contacts && 'underline text-[#005500]'}`} onClick={() => { handleClick('contacts'); }}>Contacts</button>
        </div>
    );
}

export default Header; 