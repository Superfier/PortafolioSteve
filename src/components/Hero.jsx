import Particles from "./Particles";

function Hero() {
    return (
        <section id="hero" className="py-5 position-relative" >
            <Particles
            particleColors={["#013da9"]}
            particleCount={2000}
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

                            <h5 className="text-primary">Hola, soy</h5>

                            <h1 className="display-3 fw-bold">Steven León</h1>

                            <h2 className="text-secondary">Desarrollador FullStack</h2>

                            <p className="lead">
                                Desarrollo aplicaciones web modernas utilizando React, JavaScript
                                y Bootstrap.
                            </p>

                            <a href="#projects" className="btn btn-primary me-3">
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
                            <img
                                src="https://placehold.co/400x400"
                                className="img-fluid rounded-circle"
                                alt="Foto de perfil"
                            />
                        </div>
                    </div>
                </div>

        </section>
    );
}

export default Hero;
