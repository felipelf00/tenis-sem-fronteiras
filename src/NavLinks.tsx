import React from "react";

interface NavLinksProps {
  ref?: React.Ref<HTMLUListElement>;
}

const NavLinks: React.FC<NavLinksProps> = React.forwardRef((props, ref) => {
  {
    return (
      <ul
        ref={ref}
        className="fixed left-0 top-20 md:relative md:top-0 flex flex-col md:flex-row gap-5 pb-3 md:pb-0 w-full text-center text-white font-bold bg-slate-700"
      >
        <li>Home</li>
        <li>Quem somos</li>
        <li>Institucional</li>
        <li>Como ajudar</li>
        <li>Patrocinadores</li>
        <li>Contato</li>
      </ul>
    );
  }
});

export default NavLinks;
