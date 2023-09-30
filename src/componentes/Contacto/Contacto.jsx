import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'; // Importa SweetAlert

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    acceptPrivacyPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.acceptPrivacyPolicy) {
      Swal.fire('¡Error!', 'Debes aceptar la política de privacidad para enviar el formulario.', 'error');
      return;
    }

    emailjs
      .sendForm(
        'service_sxuq0mn',
        'template_b1dqcva',
        e.target,
        'S913sfMesonb3KaKr'
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire('¡Éxito!', 'El formulario se ha enviado con éxito.', 'success');

          // Restablece los campos del formulario
          setFormData({
            name: '',
            email: '',
            message: '',
            acceptPrivacyPolicy: false,
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire('¡Error!', 'Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.', 'error');
        }
      );
  };

  return (
    <div className='row contactRow align-items-center'>
        <div className="col-md-6">
            <h2 className='contactTitle'>Contacto</h2>
            <p>Dejanos tus datos y nosotros nos pondremos en contacto a la brevedad.</p>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="name"></label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder='Nombre'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='contactField'
                />
                </div>
                <div>
                <label htmlFor="email"></label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='contactField'
                />
                </div>
                <div>
                <label htmlFor="message"></label>
                <textarea
                    id="message"
                    name="message"
                    placeholder='Mensaje'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className='contactField'
                ></textarea>
                </div>
                <div>
                <label>
                    <input
                    type="checkbox"
                    name="acceptPrivacyPolicy"
                    checked={formData.acceptPrivacyPolicy}
                    onChange={handleChange}
                    required
                    />
                    <p>Acepto que mis datos serán utilizados con el objetivo de brindarme servicios, productos y asistencia, conformes a la política de privacidad.</p>
                </label>
                </div>
                <div>
                <Button variant="dark" type="submit">Enviar</Button>
                </div>
            </form>
        </div>
        <div className="col-md-6">
        <iframe
        title="Mapa de Google"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.399512233035!2d-58.56037272349535!3d-34.46738805031247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca554dc933c0f%3A0x364c0e02b6580a21!2sUruguay%203442%2C%20B%C3%A9ccar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1695988991297!5m2!1ses!2sar"
        width="100%" // Ancho completo del contenedor padre
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className='iframeMaps'
      ></iframe>
        </div>
    </div>
  );
};

export default ContactForm;
