import '../assets/styles/About.css';
import fotoPerfil from "../assets/images/FotoPerfil.png"

function About() {
    return (
        <section id="about" className="py-5">
            <div className="container">

                <div className="text-center mb-5">
                    <h5 className="text-primary">Conóceme</h5>
                    <h1 className="fw-bold">Sobre mí</h1>
                </div>

                <div className="row align-items-center g-5">

                    {/* Foto */}
                    <div className="col-lg-5 text-center">
                        <img
                            src={fotoPerfil}
                            alt="Steven León"
                            className="fotoPerfil"

                        />
                    </div>

                    {/* Información */}
                    <div className="col-lg-7">

                        <h3 className="fw-bold mb-3">
                            Desarrollador Full Stack
                        </h3>

                        <p className="text-white mb-4">
                            Soy un desarrollador Java Full Stack Jr. apasionado por el desarrollo 
                            de software y el aprendizaje continuo. Me especializo en la creación de 
                            aplicaciones web utilizando Java, React y bases de datos SQL.
                            Me gusta enfrentar nuevos retos, trabajar en equipo y desarrollar 
                            soluciones que sean útiles, eficientes y fáciles de mantener.
                        </p>

                        <a
                            href="/cv/CurriculumStevenLeon.pdf"
                            className="btn btn-primary"
                            download
                        >
                            Descargar CV
                        </a>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default About;