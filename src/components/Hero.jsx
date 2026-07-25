function Hero() {
  return (
    <section id="hero" className="py-5">
      <div className="container">

        <div className="row align-items-center">

          {/* Columna izquierda */}
          <div className="col-lg-6">

            <h5 className="text-primary">
              Hola, soy
            </h5>

            <h1 className="display-3 fw-bold">
              Steven León
            </h1>

            <h2 className="text-secondary">
              Desarrollador Frontend
            </h2>

            <p className="lead">
              Desarrollo aplicaciones web modernas utilizando
              React, JavaScript y Bootstrap.
            </p>

            <a href="#projects" className="btn btn-primary me-3">
              Ver proyectos
            </a>

            <a
              href="/cv/Curriculum.pdf"
              className="btn btn-outline-dark"
              download
            >
              Descargar CV
            </a>

          </div>

          {/* Columna derecha */}
          <div className="col-lg-6 text-center">

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