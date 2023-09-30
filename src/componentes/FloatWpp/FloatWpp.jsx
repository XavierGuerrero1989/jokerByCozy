import React from 'react';
import Logo from '../../imgs/wpplogo.png';

function FloatWpp() {
  const phoneNumber = '1160505375'; // Reemplaza con tu número de teléfono

  const openWhatsApp = () => {
    // Genera la URL de WhatsApp con tu número de teléfono
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

    // Abre una nueva ventana o pestaña con la URL de WhatsApp
    window.open(whatsappURL, '_blank');
  };

  return (
    <div
      className="whatsapp-button"
      onClick={openWhatsApp}
    >
      <img
        src={Logo}
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </div>
  );
}

export default FloatWpp;
