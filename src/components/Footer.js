import Contact from '../assets/footer/contact.png';
import Instagram from '../assets/footer/instagram.png';
import House from '../assets/footer/house.png';
import SmartPhone from '../assets/footer/smartphone.png';
// import Contact from '../assets/footer/contact.png';
import './styles/Footer.css';
import './styles/FooterDesktop.css';

const Footer = () => (
    <footer>

    <div className="container-footer-all">

         <div className="container-body">

             <div className="colum1">
                 <h1>Más información de la compañía</h1>

                 <p>Conscientes de la necesidad de poseer y manejar una cuenta en dolares, ofrecemos la forma más rápida y segura de obtener una a distancia. Somos una empresa creada en el año 2018 y tenemos experiencia en realizar trámites financieros de forma transparente y fiable.

                    A través de nosotros podrás tramitar la apertura de una cuenta bancaria en dólares. 
                 </p>

             </div>

             <div className="colum2">

                 <h1>Redes Sociales</h1>

                 <div className="row">
                     <img src={Contact} alt="facebook-logo" className="logo"></img>
                     <label><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">Síguenos en Facebook</a></label>
                     
                 </div>
                 <div className="row">
                     <img src={Instagram} alt="instagram-logo"></img>
                     <label><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/servicios.bancarios/">Síguenos en Instagram</a></label>
                 </div>

             </div>

             <div className="colum3">

                 <h1>Informacion Contactos</h1>

                 <div className="row2">
                     <img src={House} alt="house-logo"></img>
                     <label>
                       Oficinas en el Centro Multiempresarial del Este, Caracas</label>
                 </div>

                 <div className="row2">
                     <img src={SmartPhone} alt="smartphone-logo"></img>
                     <label>+58 212 325 2727</label>
                 </div>

                 <div className="row2">
                     <img src={Contact} alt="contact-logo"></img>
                      <label>infoserviciosbancarios@gmail.com</label>
                 </div>

             </div>

         </div>

        </div>

        <div className="container-footer">
            <div className="footer">
                 <div className="copyright">
                     © 2018 Todos los Derechos Reservados | <a href="/">Servicios Bancarios</a>
                 </div>

                 <div className="information">
                     <a href="/preguntas">Informacion Compañia</a> | <a href="/">Privacion y Politica</a> | <a href="/">Terminos y Condiciones</a>
                 </div>
            </div>

        </div>

  

 </footer>
);

export default Footer;