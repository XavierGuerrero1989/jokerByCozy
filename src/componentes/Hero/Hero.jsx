import React from 'react';
import plotter from '../../imgs/plotter.jpg'

function Hero() {
  return (
    <div className='container-fluid align-items-center  ctnHero' style={{ 
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${plotter})`,
        backgroundSize: 'cover',
        display: 'flex', // Hacer que los elementos se alineen en el centro verticalmente
        alignItems: 'center', // Centrar verticalmente
        height: '70vh', // Establecer la altura del contenedor al 100% de la ventana
      }}>
        <div className='row row1'>
                <h1 className='row1__title'>INDUMENTARIA PROFESIONAL PARA EMPRESAS</h1>
                <p className='row1__subtitle'>PERSONALIZAMOS TUS IDEAS</p>
        </div>
    </div>
  );
}

export default Hero;
