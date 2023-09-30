import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import laser from "../../imgs/laser.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';

function NosotrosRow() {

    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <div className="row align-items-center mainRow">
        <div className="col-md-6 text-center">
            <img src={laser} alt="Foto" className="foto" data-aos="flip-up" data-aos-duration="2000" data-aos-delay="500"/>
        </div>
        <div className="col-md-6 text-center">
            <h1 className="mainRow__title">Quiénes Somos</h1>
            <p className="mainRow__text">En JOKER, hemos perfeccionado el arte de la fabricación y personalización de ropa durante más de dos décadas. Nuestra experiencia y pasión por la moda se combinan con la tecnología más avanzada para crear prendas de alta calidad. Ofrecemos soluciones de indumentaria personalizada para empresas, eventos, deportes y promociones. <br />
            En cada proyecto que emprendemos, nos esforzamos por superar las expectativas de nuestros clientes. Ya sea que necesites uniformes profesionales para tu equipo o camisetas personalizadas para un evento especial, en JOKER, estamos comprometidos a transformar tus ideas en realidad. Confía en nosotros para proporcionarte prendas únicas y de calidad que reflejen tu identidad y estilo.</p>
        </div>
    </div>
  );
}

export default NosotrosRow;
