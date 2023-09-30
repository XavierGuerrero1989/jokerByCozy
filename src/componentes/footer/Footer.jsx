import React from 'react';
import { Link } from 'react-router-dom';


// Importa tus imágenes de iconos
import scrollToTopIcon from '../../imgs/flecha-arriba.png';
import instagramIcon from '../../imgs/instagram.png';
import linkedinIcon from '../../imgs/linked.png';
import locationIcon from '../../imgs/localizacion.png';
import phoneIcon from '../../imgs/telefono.png';
import whatsappIcon from '../../imgs/whatsapp.png';
import mailIcon from '../../imgs/mail.png';

function Footer() {
  

  return (
    <footer>
      <div className="container-fluid footerCtn">
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            {/* Icono para volver al principio de la página */}
              <a href="#top">
                <img src={scrollToTopIcon} alt="logo" className="img-fluid footer-icon" />
              </a>
              <p className='flechaTexto'>Volver al Inicio</p>
          </div>
          <div className="col-md-4 text-center">
            {/* Iconos para Instagram y LinkedIn */}
            <a href="https://www.instagram.com/jokerbycozy/" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" className="footer-icon" />
            </a>
            <a href="https://www.linkedin.com/company/jokerindumentaria/mycompany/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="footer-icon" />
            </a>
          </div>
          <div className="col-md-4 text-center">
            {/* Iconos para ubicación, teléfono y WhatsApp */}
            <div>
              <img src={locationIcon} alt="Ubicación" className="footer-icon2" />
            </div>
            <div>
            <a href="https://www.google.es/maps/place/Uruguay+3442,+B%C3%A9ccar,+Provincia+de+Buenos+Aires/@-34.4673925,-58.5577978,17z/data=!3m1!4b1!4m6!3m5!1s0x95bca554dc933c0f:0x364c0e02b6580a21!8m2!3d-34.4673925!4d-58.5577978!16s%2Fg%2F11c2bsktgy?entry=ttu" target='_blank' className='footerLink'>Uruguay 3442, Beccar, Buenos Aires</a>
            </div>
            <div>
              <img src={phoneIcon} alt="Teléfono" className="footer-icon2" />
            </div>
            <div>
            <a href="tel:+54 47233355" target='_blank' className='footerLink'>tel:+54 47233355</a>
            </div>
            <div>
              <img src={whatsappIcon} alt="WhatsApp" className="footer-icon2" />
            </div>
            <div>
                <a href="https://wa.me/+541160505375 " target='_blank' className='footerLink'>Whatsapp</a>
            </div>
            <div>
              <img src={mailIcon} alt="mail" className="footer-icon2" />
            </div>
            <div>
                <a href="mailto:macarena@joker.com " target='_blank' className='footerLink'>macarena@jokerarg.com.ar</a>
            </div>
          </div>
        </div>
        <div className="row text-center">
            <p>Joker by Cozy®</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
