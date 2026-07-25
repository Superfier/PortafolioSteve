
// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
//       <div className="container">
//         <a className="navbar-brand fw-bold" href="#">
//           Steven León
//         </a>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbar"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbar">
//           <ul className="navbar-nav ms-auto align-items-lg-center">
//             <li className="nav-item">
//               <a className="nav-link" href="#hero">
//                 Inicio
//               </a>
//             </li>

//             <li className="nav-item">
//               <a className="nav-link" href="#about">
//                 Sobre mí
//               </a>
//             </li>

//             <li className="nav-item">
//               <a className="nav-link" href="#skills">
//                 Habilidades
//               </a>
//             </li>

//             <li className="nav-item">
//               <a className="nav-link" href="#projects">
//                 Proyectos
//               </a>
//             </li>

//             <li className="nav-item">
//               <a className="nav-link" href="#contact">
//                 Contacto
//               </a>
//             </li>

//             <li className="nav-item ms-lg-3">
//               <a className="btn btn-primary" href="/cv/CurriculumStevenLeon.pdf" download>
//                 Descargar CV
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from 'react';
import { House } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { BriefcaseBusiness } from 'lucide-react';
import { FolderOpen } from 'lucide-react';
import { Mail } from 'lucide-react';

import '../assets/styles/navbar.css';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav>
      <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><House /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><UserRound  strokeWidth={2.2}/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BriefcaseBusiness /></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><FolderOpen /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><Mail /></a>
    </nav>
  )
}

export default Navbar;