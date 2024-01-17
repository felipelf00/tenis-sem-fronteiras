import React from "react";
import { Link } from "react-router-dom";

interface NavLinksProps {
  // ref?: React.Ref<HTMLUListElement>;
}

const NavLinks: React.FC<NavLinksProps> = React.forwardRef<HTMLUListElement>(
  (_, ref) => {
    {
      return (
        <ul
          ref={ref}
          className="fixed left-0 top-20 md:relative md:top-0 flex flex-col md:flex-row gap-5 pb-3 md:pb-0 w-full text-center text-white font-bold bg-slate-700"
        >
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/quem"}>Quem somos</Link>
          </li>
          <li>
            <Link to={"/institucional"}>Institucional</Link>
          </li>
          <li>
            <Link to={"/ajudar"}>Como ajudar</Link>
          </li>
          <li>
            <Link to={"/patrocinadores"}>Patrocinadores</Link>
          </li>
          <li>
            <Link to={"/contato"}>Contato</Link>
          </li>
        </ul>
      );
    }
  }
);

export default NavLinks;
