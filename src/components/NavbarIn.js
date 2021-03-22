import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo/logopng.png';
import './styles/Navbar.css';
import './styles/NavbarLaptop.css';
import './styles/NavbarDesktop.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id="menu" className="container-fluid container-navbar">

      <div className="row">
    
        <Navbar color="light" light expand="md">
          <div className="container-logo col-1">

            <NavbarBrand href="/">
                    <img src={Logo} alt="Bandolar" className="Navbar__brand-logo"></img>
                    <span className="font-weight-bold">Bandolar</span>
            </NavbarBrand>

          </div>

        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>

        <div className="nav-container">

          <Nav className="mr-auto" navbar>

            <div className="container-options">
              <NavItem>
                <NavLink href="#formas-pago-title">FORMAS DE PAGO</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/preguntas/">PREGUNTAS FRECUENTES</NavLink>
              </NavItem>
            </div>
            
            <div className="container-sesions">
            
              <NavItem>
                <NavLink href="/">Salir</NavLink>
              </NavItem>
            </div>
           
          </Nav>
          
        </div>

        </Collapse>
      </Navbar>
    
      </div>

  
    </div>
  );
}

export default Example;

