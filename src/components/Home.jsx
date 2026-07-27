import Particles from "./Particles";
import "../assets/styles/Hero.css"
import heroImage from "../assets/images/heroImage.jpg";

function Home() {
    return (
        <section id="home" className=" position-relative">
            <Particles
                particleColors={["#013da9"]}
                particleCount={1000}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover
                alphaParticles={false}
                disableRotation
                pixelRatio={1}
            />

            <div className="container-fluid mt-5 px-5">
                <div className="row align-items-center min-vh-100">
                    {/* Columna izquierda */}
                    <div className="col-lg-6 mt-3">
                        <h4 className="text-primary">Hola, soy</h4>

                        <h1 className="display-3 fw-bold">Steven León</h1>

                        <h2 className="Texto3">Desarrollador FullStack</h2>


                        <p className="lead">
                            Desarrollo aplicaciones web modernas utilizando React, JavaScript
                            y Bootstrap.
                        </p>

                        <a href="#projects" className="btn btn-primary me-5">
                            Ver proyectos
                        </a>

                        <a
                            href="/cv/CurriculumStevenLeon.pdf"
                            className="btn btn-outline-dark"
                            download
                        >
                            Descargar CV
                        </a>
                    </div>

                    {/* Columna derecha */}
                    <div className="col-lg-6 text-center mt-3">
                        <img src={heroImage} 
                        className="profile-pic" 
                        alt="Foto de perfil" 
                        
                        />

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
