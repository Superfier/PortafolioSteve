import LogoLoop from "./LogoLoop"; 
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [ 
    {node: <SiReact />, title: "React", href: "https://react.dev" }, 
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" }, 
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" }, 
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" }, 
];

function Skills() { 
    return ( 

<section id="skills" className="py-5">

    <div className="container">

        <div className="text-center mb-5">
            <h5 className="text-primary">Tecnologías</h5>
            <h2 className="fw-bold">Mis habilidades</h2>
        </div>
        
        <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
            
        </div>
        <LogoLoop 
        logos={techLogos}
        speed={100} 
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0} 
        scaleOnHover 
        fadeOut fadeOutColor="#ffffff" 
        ariaLabel="Technology partners" 
        /> 
    </div> 
</section>

    
    ); 
} 

export default Skills;
