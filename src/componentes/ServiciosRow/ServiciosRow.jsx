import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';


function ServiciosRow() {

  return (
    <div className="row justify-content-center text-center mainRowServ">
        
            <h1>Nuestros Servicios</h1>
            <Card style={{ width: '20rem', height: '23rem'}} className="col-md-4 mainRowServ__card">
              <Card.Body>
                <Card.Title>Diseño de Uniformes Personalizados</Card.Title>
                <Card.Text>
                En JOKER, creamos uniformes de alta calidad que reflejan la identidad y el estilo de tu empresa. Nuestro equipo de diseñadores trabaja contigo para desarrollar uniformes únicos que se adapten a tus necesidades y resalten la imagen de tu negocio.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '20rem', height: '23rem' }} className="col-md-4 mainRowServ__card">
              <Card.Body>
                <Card.Title>Ropa Promocional</Card.Title>                
                <Card.Text>
                Impulsa tu marca con nuestra ropa promocional personalizada. Ya sea para eventos, regalos corporativos o campañas de marketing, en JOKER te ofrecemos una amplia gama de opciones para personalizar prendas con tu logotipo o mensaje promocional.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '20rem', height: '23rem' }} className="col-md-4 mainRowServ__card">
              <Card.Body>
                <Card.Title>Merchandising Corporativo Personalizado</Card.Title>
                <Card.Text>
                En JOKER, te ofrecemos una amplia variedad de productos de merchandising corporativo personalizados. Desde artículos promocionales hasta regalos para empleados y clientes, fortalecemos la presencia de tu marca. Nuestros productos son ideales para eventos, ferias comerciales y regalos exclusivos. Impulsa tu imagen corporativa con productos de calidad que llevan tu identidad.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '20rem', height: '23rem' }} className="col-md-4 mainRowServ__card"> 
              <Card.Body>
                <Card.Title> Ropa para Eventos Especiales</Card.Title>
                <Card.Text>
                Si tienes un evento especial en mente, nosotros tenemos la ropa perfecta para ello. Desde camisetas temáticas hasta atuendos elegantes, en JOKER nos aseguramos de que luzcas bien en cualquier ocasión.
                </Card.Text>
              </Card.Body>
            </Card>

        
    </div>
  );
}

export default ServiciosRow;