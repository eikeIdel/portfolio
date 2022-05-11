//react
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
//modules
import { Turn as Hamburger } from "hamburger-react";
//hooks
import useClientWindow from "../../../hooks/useClientWindow";

function Header() {
  const [mobileScreen, setMobileScreen] = useState();
  const [isOpen, setOpen] = useState(false);
  //useRouter is needed to check what is the current page - for conditional styling on the nav links
  const router = useRouter();

  //get client window size: clientWindow = {window.innerWidth,window.innerHeight}
  const clientWindow = useClientWindow();

  //update state mobileScreen when window changes (usually initial load only)
  useEffect(() => {
    setMobileScreen(clientWindow.width < 640 ? true : false);
  }, [clientWindow]);

  const burgerAnimation = mobileScreen && !isOpen ? "-mt-6" : "-mb-16 p-2";

  return (
    <div className={`header `}>
      <div className={`header-subcontainer `}>
        <div
          className={`h-full flex items-center divide-x-2 bg-[#9ec1a3] divide-[#303030] ${burgerAnimation} sm:bg-transparent sm:text-xl text-[#303030] `}
        >
          <Link href={"/"}>
            <a
              className={`px-5 sm:px-4 hover:text-[#005500] ${
                router.asPath === "/" && "underline text-[#005500]"
              }`}
            >
              Home
            </a>
          </Link>
          <Link href={"/projects"}>
            <a
              className={`px-5 sm:px-4 hover:text-[#005500] ${
                router.asPath === "/projects" && "underline text-[#005500]"
              }`}
            >
              Projects
            </a>
          </Link>
          <Link href={"/contact"}>
            <a
              className={`px-5 sm:px-4 hover:text-[#005500] ${
                router.asPath === "/contact" && "underline text-[#005500]"
              }`}
            >
              Contact
            </a>
          </Link>
        </div>
        <div className=" absolute -top-1 right-2 sm:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={20}
            direction="left"
            color="#303030"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
