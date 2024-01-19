// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// interface NavLinksProps {
//   ref?: React.Ref<HTMLUListElement>;
//   isOpen?: boolean;
// }

// const variants = {
//   open: { opacity: 1, x: 0 },
//   closed: { opacity: 0, x: "-100%" },
// };

// const NavLinks: React.FC<NavLinksProps> = React.forwardRef<HTMLUListElement>(
//   ({ isOpen }, ref) => {
//     {
//       return (
//         <motion.div animate={isOpen ? "open" : "closed"} variants={variants}>
//           {/* <AnimatePresence> */}
//           <ul
//             ref={ref}
//             className="fixed left-0 top-20 md:relative md:top-0 flex flex-col md:flex-row gap-5 pb-3 md:pb-0 w-full text-center text-white font-bold bg-slate-700 z-20"
//             // initial={{ opacity: 0, y: "-100%" }}
//             // animate={{ opacity: 1, y: 0 }}
//             // exit={{ opacity: 0, y: "-100%" }}
//             // transition={{ duration: 0.2 }}
//           >
//             <li>
//               <Link to={"/"}>Home</Link>
//             </li>
//             <li>
//               <Link to={"/quem"}>Quem somos</Link>
//             </li>
//             <li>
//               <Link to={"/institucional"}>Institucional</Link>
//             </li>
//             <li>
//               <Link to={"/ajudar"}>Como ajudar</Link>
//             </li>
//             <li>
//               <Link to={"/patrocinadores"}>Patrocinadores</Link>
//             </li>
//             <li>
//               <Link to={"/contato"}>Contato</Link>
//             </li>
//           </ul>
//         </motion.div>
//       );
//     }
//   }
// );

// export default NavLinks;

import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface NavLinksProps {
  isOpen?: boolean;
}

const NavLinks: React.ForwardRefRenderFunction<
  HTMLUListElement,
  NavLinksProps
> = (_, ref) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <ul
        ref={ref as React.RefObject<HTMLUListElement>}
        className="fixed left-0 top-20 md:relative md:top-0 flex flex-col md:flex-row gap-5 pb-3 md:pb-0 w-full text-center text-white font-bold bg-slate-700 z-20"
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
    </motion.div>
  );
};

const ForwardedNavLinks = forwardRef(NavLinks);
ForwardedNavLinks.displayName = "NavLinks";

export default ForwardedNavLinks;
