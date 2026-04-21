import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppWidget.css';

const WhatsAppWidget = () => {
  return (
    <a 
      href="https://wa.me/212616150329?text=Hello!%20I%20came%20from%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch." 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-widget"
      aria-label="Chat with me on WhatsApp"
    >
      <div className="whatsapp-icon-bg">
        <FaWhatsapp className="whatsapp-icon" />
      </div>
      <span className="whatsapp-tooltip">Chat with me</span>
    </a>
  );
};

export default WhatsAppWidget;
