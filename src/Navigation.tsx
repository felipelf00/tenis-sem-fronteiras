import { useState, useEffect, useRef } from "react";
import NavLinks from "./NavLinks";
// import { Twirl as Hamburger } from "hamburger-react";
import Burger from "./Burger";
import { useClickAway } from "react-use";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const navRef = useRef<HTMLUListElement | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // useClickAway(navRef, (e) => {
  //   if (
  //     !navRef.current?.contains(e.target as Node) &&
  //     !hamburgerRef.current?.contains(e.target as Node)
  //   ) {
  //     setIsOpen(false);
  //   }
  // });
  useClickAway(navRef, (e): void => {
    const clickedOutsideNav = !navRef.current?.contains(e.target as Node);

    console.log(hamburgerRef);

    const clickedOnHamburger = hamburgerRef.current?.contains(e.target as Node);
    if (clickedOutsideNav && !clickedOnHamburger) {
      setIsOpen(false);
    }
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //prettier-ignore
  return (
    <div>
      {isMobile && <Burger ref={hamburgerRef} toggleMenu={toggleMenu}/>}

      {isMobile ? (isOpen && <NavLinks ref={navRef} />) : <NavLinks />}
    </div>
  );
};

export default Navigation;
