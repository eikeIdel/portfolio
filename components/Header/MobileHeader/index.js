//react
import { useState, useEffect } from 'react';
//components
import Header from '../index';
//modules
import { Turn as Hamburger } from 'hamburger-react';


function MobileHeader({ setHeaderSelection, headerSelection }) {
    const [isOpen, setOpen] = useState(false);
    useEffect(() => {
        setOpen(false);


    }, [headerSelection]);

    return (
        <>
            <div className={`header transistion duration-200 ease-in-out  absolute w-full flex justify-start p-2  ${isOpen ? 'bg-[#9EC1A3] top-0' : '-top-2'}`} >
                {isOpen && <Header setHeaderSelection={setHeaderSelection} headerSelection={headerSelection} className="p-2" />}


            </div>
            <div className=" absolute top-1 right-2">
                <Hamburger toggled={isOpen} toggle={setOpen} size={20} direction="right" />

            </div>
        </>
    );
}

export default MobileHeader;