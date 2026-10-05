import ProjectCard from "./ProjectCard";

import gmLegacy from "../assets/images/gmlegacy.png";
import kape from "../assets/images/kape.png";
import portfolio from "../assets/images/portfolio.png";
import "../assets/styles/Projects.css"

const projects = [
    {
        id: 1,
        title: "GM Legacy",
        description:
            "Sitio web responsive para la marca personal del futbolista Gilberto Mora.",
        image: gmLegacy,
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        github: "https://github.com/OscarAndres008/Hackaton_1",
        demo: "https://gmlegacy.netlify.app/",
        featured: true,
    },

    {
        id: 2,
        title: "Kápe",
        description:
            "E-commerce para una marca de café utilizando en el FRONTEND React y Bootstrap y en el BACKEND Java, Spring Boot y MySQL.",
        image: kape,
        technologies: ["JavaScript", "Bootstrap", "CSS", "Java", "Spring Boot", "MySQL"],
        github: "#",
        demo: "#",
        inProgress: true,
    },

    {
        id: 3,
        title: "Portafolio",
        description:
            "Portafolio profesional desarrollado en React.",
        image: portfolio,
        technologies: ["React", "CSS", "Bootstrap"],
        github: "https://github.com/Superfier/PortafolioSteve",
        demo: "https://superfier.github.io/PortafolioSteve/",
    },
];

function Projects() {
    return (
        <section id="projects" className="py-5">

            <div className="container">
                <div className="text-center mb-5">

                    <h5 className="text-info">
                        Portafolio
                    </h5>

                    <h2 className="text-white fw-bold">
                        Mis Proyectos
                    </h2>

                    <p className="text-light">
                        Algunos proyectos que representan mis conocimientos en
                        desarrollo Full Stack.
                    </p>

                </div>

                <div className="row g-4">

                    {projects.map((project) => (

                        <ProjectCard
                            key={project.id}
                            {...project}
                        />

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Projects;