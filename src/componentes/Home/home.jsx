import React from 'react';
import Hero from '../Hero/Hero';
import NosotrosRow from '../NosotrosHomeRow/NosotrosRow';
import ServiciosRow from '../ServiciosRow/ServiciosRow';
import CarouselRow from '../Carousel/Carousel';
import ContactForm from '../Contacto/Contacto';
import Footer from '../footer/Footer';
import FloatWpp from '../FloatWpp/FloatWpp';


function Home() {
  return (
    <div className='homeCtn'>
        <Hero />
        <div id='Nosotros'>
          <NosotrosRow />
        </div>
        <div id='Servicios'>
          <ServiciosRow />
        </div>
        <div id='Imagenes'>
          <CarouselRow />
        </div>
        <div id='Contacto'>
          <ContactForm />
        </div>
        <Footer />
        <FloatWpp />
    </div>
  );
}

export default Home;