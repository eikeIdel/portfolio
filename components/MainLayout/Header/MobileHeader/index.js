//react
import { useState, useEffect } from "react";
//components
import Header from "../index";
//modules
import { Turn as Hamburger } from "hamburger-react";

function MobileHeader({ setHeaderSelection, headerSelection }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div
        className={`header transistion duration-300 ease-in-out w-full absolute flex justify-start  ${
          isOpen ? "bg-[#9EC1A3] top-0" : "-top-2"
        }`}
      >
        {isOpen && (
          <Header
            setHeaderSelection={setHeaderSelection}
            headerSelection={headerSelection}
          />
        )}
      </div>
      <div className=" absolute -top-1 right-2">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={20}
          direction="right"
        />
      </div>
    </>
  );
}

export default MobileHeader;
