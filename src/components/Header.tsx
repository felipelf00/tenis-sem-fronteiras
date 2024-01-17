import logoSmall from "../assets/logo-h-small2.png";
import Navigation from "./Navigation";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-slate-700">
      <div className="flex items-center justify-between gap-12 w-full max-w-7xl px-4 py-2 mx-auto">
        <div>
          <img src={logoSmall} alt="logo" className="h-16" />
        </div>

        <div>
          <Navigation />
        </div>
      </div>
    </header>
  );
};

// function Header(): React.FC {
// }

export default Header;
