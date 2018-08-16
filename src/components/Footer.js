import React from 'react';

import logo from '../assets/img/linea-logo-mini.png';

const Footer = () => {
    const openLineaWebSite = () => {
        window.open('http://www.linea.gov.br', 'linea');
    }
    
    return(
        <footer className="footer bg-inverse">
            <span className="text-white float-left">Developer Portal Instance</span>
            <span className="text-white float-right">Powered by <a onClick={openLineaWebSite} title="LIneA"><img src={logo} alt="LineA" /></a></span>
        </footer>
    );
};

export default Footer;