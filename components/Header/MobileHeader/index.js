//react
import { useState } from 'react';
//components
import Header from '../index';
//modules
import { Turn as Hamburger } from 'hamburger-react';

function MobileHeader({ setHeaderSelection, headerSelection }) {
    const [isOpen, setOpen] = useState(false);
    console.log(isOpen);
    return (
        <div className='header absolute w-full flex justify-end'>
            <div className="header-subcontainer -mt-2 mr-2">
                <Hamburger toggled={isOpen} toggle={setOpen} size={20} direction="right" />
                {/* <Header setHeaderSelection={setHeaderSelection} headerSelection={headerSelection} /> */}
            </div>
        </div>
    );
}

export default MobileHeader;