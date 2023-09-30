import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import Foto1 from '../../imgs/carousel/1.png';
import Foto2 from '../../imgs/carousel/2.png';
import Foto3 from '../../imgs/carousel/3.png';
import Foto4 from '../../imgs/carousel/4.png';
import Foto5 from '../../imgs/carousel/5.png';
import Foto6 from '../../imgs/carousel/6.png';

function CarouselRow() {
  const imgStyle = {
    maxWidth: '80%',
    maxHeight: '600px',
    borderRadius: '20px',
    border: '3px solid black', // Agregamos un border-radius de 20px
  };

  return (
    <div>

        <h2 className="text-center">Nuestros Productos</h2>

        <Carousel className="carouselCtn" controls="true" prevIcon={<span className="carousel-control-prev-icon" aria-hidden="true" style={{backgroundColor: 'black'}}></span>} nextIcon={<span className="carousel-control-next-icon" aria-hidden="true" style={{backgroundColor: 'black'}}></span>}>
          <Carousel.Item>
            <img
              className="d-block mx-auto"
              src={Foto1}
              alt="First slide"
              style={{ ...imgStyle }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block mx-auto"
              src={Foto2}
              alt="Second slide"
              style={{ ...imgStyle }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block mx-auto"
              src={Foto3}
              alt="Third slide"
              style={{ ...imgStyle }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block mx-auto"
              src={Foto4}
              alt="Fourth slide"
              style={{ ...imgStyle }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block mx-auto"
              src={Foto5}
              alt="Fifth slide"
              style={{ ...imgStyle }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block mx-auto"
              src={Foto6}
              alt="Sixth slide"
              style={{ ...imgStyle }}
            />
          </Carousel.Item>
        </Carousel> 
    </div>
    
  );
}

export default CarouselRow;
