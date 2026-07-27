import { useState } from 'react';
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
      <a href="#skills" onClick={()=> setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><BriefcaseBusiness /></a>
      <a href="#projects" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><FolderOpen /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><Mail /></a>
    </nav>
  )
}

export default Navbar;