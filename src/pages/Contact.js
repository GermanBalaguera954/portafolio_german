import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  // Estado para gestionar los datos del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Estado para gestionar el mensaje de éxito o error
  const [formStatus, setFormStatus] = useState(null);

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Valida el formulario antes de enviarlo
  const validateForm = () => {
    const { name, email, message } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !message) {
      return "Todos los campos son obligatorios.";
    }
    if (!emailRegex.test(email)) {
      return "Por favor, introduce un correo electrónico válido.";
    }
    return null;
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación
    const errorMessage = validateForm();
    if (errorMessage) {
      setFormStatus({ type: "error", message: errorMessage });
      return;
    }

    // Simulación del envío de datos
    console.log("Formulario enviado:", formData);

    // Mensaje de éxito
    setFormStatus({
      type: "success",
      message: "Gracias por contactarte conmigo. ¡Responderé lo antes posible!",
    });

    // Configurar un temporizador para borrar el mensaje después
    setTimeout(() => {
      setFormStatus(null);
    }, 2000); 


    // Limpia el formulario
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h2>Contáctame</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        {/* Campo para el nombre */}
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Escribe tu nombre"
            required
          />
        </div>

        {/* Campo para el correo electrónico */}
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ejemplo@correo.com"
            required
          />
        </div>

        {/* Campo para el mensaje */}
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Escribe tu mensaje aquí"
            required
          ></textarea>
        </div>

        {/* Botón de envío */}
        <button type="submit" className="submit-button">
          Enviar
        </button>
      </form>

      {/* Mensaje de estado del formulario */}
      {formStatus && (
        <div
          className={`form-status ${formStatus.type === "success" ? "success" : "error"
            }`}
        >
          {formStatus.message}
        </div>
      )}
    </div>
  );
};

export default Contact;
