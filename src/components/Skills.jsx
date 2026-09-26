import LogoLoop from "./LogoLoop"; 
import { SiReact, 
        SiJavascript,
        SiHtml5,
        SiBootstrap,
        SiCss,
        SiGithub,
        SiGit,
        SiSpringboot,
        } from 'react-icons/si';
import { FaJava, FaLeaf, FaDatabase, FaCode, FaLaptopCode } from "react-icons/fa";

const techLogos = [ 
    { node: <SiHtml5 color="#E34F26" />, title: "HTML5" },
    { node: <SiCss color="#1572B6" />, title: "CSS3" },
    { node: <SiJavascript color="#F7DF1E" />, title: "JavaScript" },
    { node: <SiReact color="#61DAFB" />, title: "React" },
    { node: <FaJava color="#ca0303" />, title: "Java" },
    { node: <SiBootstrap color="#7952B3" />, title: "Bootstrap" },
    { node: <FaLeaf color="#6DB33F" />, title: "Spring Boot" },
    { node: <FaDatabase color="#4479A1" />, title: "MySQL" },
    { node: <FaLaptopCode color="#007ACC" />, title: "VS Code" },
    { node: <SiGit color="#F05032" />, title: "Git" },
    { node: <SiGithub color="#181717" />, title: "GitHub" }
];

function Skills() { 
    return ( 

<section id="skills" className="py-5">
    <div className="container">
        <div className="text-center mb-5">
            <h5 className="text-primary py-4">Tecnologías</h5>
            <h2 className="fw-bold ">Mis habilidades</h2>

            <p className="text-muted " >
            A lo largo de mi formación y proyectos he trabajado con frameworks y lenguajes que me permiten 
            construir soluciones completas: desde el frontend con React y CSS, hasta el backend con 
            Java y Spring Boot y bases de datos como MySQL. También domino herramientas de control de versiones como Git y GitHub.
            </p>
        </div>
        
        <div style={{ height: '50px', position: 'relative', overflow: 'hidden' }}>

        </div>
        <LogoLoop 
        logos={techLogos}
        speed={100} 
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0} 
        scaleOnHover 
        fadeOut 
        fadeOutColor="#ffffff" 
        ariaLabel="Technology partners" 
        /> 
    </div> 
</section>

    
    ); 
} 

export default Skills;
