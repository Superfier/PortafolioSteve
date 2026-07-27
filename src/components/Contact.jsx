import {
  Mail,
  Phone,
  MapPin,
  Send
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa6";

import "../assets/styles/Contact.css";

function Contact() {
    return (
        <section id="contact" className="py-5 bg-light">
            <div className="container">

                <div className="text-center mb-5">
                    <h5 className="text-primary">Contacto</h5>
                    <h2 className="fw-bold">Hablemos</h2>
                    <p className="text-muted">
                        ¿Tienes un proyecto o una oportunidad laboral?
                        Me encantará conocerla.
                    </p>
                </div>

                <div className="row g-5">

                    {/* Información */}

                    <div className="col-lg-5">

                        <div className="card shadow-sm border-0 p-4 h-100">

                            <h4 className="py-5">
                                Información
                            </h4>

                            <div className="d-flex mb-2">

                                <Mail className="text-primary me-3 " />

                                <div>
                                    <strong>Email</strong>
                                    <p className="mb-5">
                                        stevenmj23@live.com.mx
                                    </p>
                                </div>

                            </div>

                            
                            <div className="d-flex mb-4">

                                <MapPin className="text-primary me-3" />

                                <div>
                                    <strong>Ubicación</strong>
                                    <p className="mb-0">
                                        Estado de México
                                    </p>
                                </div>

                            </div>

                            <div className="d-flex gap-5 mt-5">

                                <a href="https://github.com/Superfier">
                                    <FaGithub size={50} />
                                </a>

                                <a href="https://www.linkedin.com/in/steven-leon-rodriguez/">
                                    <FaLinkedin size={50} />
                                </a>

                            </div>

                        </div>

                    </div>

                    {/* Formulario */}

                    <div className="col-lg-7">

                        <div className="card shadow-sm border-0 p-4">

                            <form>

                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nombre"
                                    />
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Correo electrónico"
                                    />
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Asunto"
                                    />
                                </div>

                                <div className="mb-3">
                                    <textarea
                                        rows="6"
                                        className="form-control"
                                        placeholder="Escribe tu mensaje..."
                                    ></textarea>
                                </div>

                                <button
                                    className="btn btn-primary"
                                    type="submit"
                                >
                                    Enviar mensaje
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Contact;