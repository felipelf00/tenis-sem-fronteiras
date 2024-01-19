import { useState, useEffect, useRef } from "react";
import NavLinks from "./NavLinks";
import Burger from "./Burger";
import { useClickAway } from "react-use";
import { AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const navRef = useRef<HTMLUListElement | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useClickAway(navRef, (e): void => {
    const clickedOutsideNav = !navRef.current?.contains(e.target as Node);
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
      {isMobile && <Burger ref={hamburgerRef} toggleMenu={toggleMenu} isOpen={isOpen}/>}

      {/* {isMobile ? (isOpen && <NavLinks ref={navRef} isOpen={isOpen} />) : <NavLinks isOpen={true} />} */}
      {isMobile && (isOpen && 
      
      <AnimatePresence>
        <NavLinks ref={navRef} isOpen={isOpen} />
      </AnimatePresence>
      )}

      {!isMobile && <NavLinks isOpen={true} /> }
    </div>
  );
};

export default Navigation;
