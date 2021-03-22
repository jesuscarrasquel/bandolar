import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import Navbar from '../components/Navbar';


import './styles/preguntas.css';
import './styles/preguntasDesktop.css';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen_a, setIsOpen_a] = useState(false);
  const [isOpen_b, setIsOpen_b] = useState(false);
  const [isOpen_c, setIsOpen_c] = useState(false);
  const [isOpen_d, setIsOpen_d] = useState(false);
  const [isOpen_e, setIsOpen_e] = useState(false);
  const [isOpen_f, setIsOpen_f] = useState(false);
  const [isOpen_g, setIsOpen_g] = useState(false);
  const [isOpen_h, setIsOpen_h] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggle_a = () => setIsOpen_a(!isOpen_a);
  const toggle_b = () => setIsOpen_b(!isOpen_b);
  const toggle_c = () => setIsOpen_c(!isOpen_c);
  const toggle_d = () => setIsOpen_d(!isOpen_d);
  const toggle_e = () => setIsOpen_e(!isOpen_e);
  const toggle_f = () => setIsOpen_f(!isOpen_f);
  const toggle_g = () => setIsOpen_g(!isOpen_g);
  const toggle_h = () => setIsOpen_h(!isOpen_h);

  return (
    <>
     <Navbar/>
    <div className="container-fluid quest-container">
      <Card>
          <div className="title-quest">
            <h1>Preguntas frecuentes</h1>
          </div>
      
      <div className="preguntas-container row">

        <div className="col-12 col-lg-6">

        <Button onClick={toggle} style={{ marginBottom: '1rem' }}>¿Podré realizar compras mientras espero mi tarjeta?</Button>
          <Collapse isOpen={isOpen}>
            

            <Card>
              <CardBody>
              Sí. Recibirás una imagen con la tarjeta temporal que podrás usar para realizar compras electrónicas.
              </CardBody>
            </Card>
        

        
          </Collapse>

  
          <Button onClick={toggle_a} style={{ marginBottom: '1rem' }}>¿Qué tipo de cuenta?</Button>
          <Collapse isOpen={isOpen_a}>
            <Card>
              <CardBody>
              La cuenta es tipo checking o corriente.
              </CardBody>
            </Card>
          </Collapse>


          <Button onClick={toggle_b} style={{ marginBottom: '1rem' }}>¿Cuando podré recibir pagos vía Zelle?</Button>
          <Collapse isOpen={isOpen_b}>
            <Card>
              <CardBody>
              Una vez activada la cuenta podrás recibir pagos vía Zelle.
              </CardBody>
            </Card>
          </Collapse>

      
          <Button onClick={toggle_c} style={{ marginBottom: '1rem' }}>¿Si el pasaporte está vencido puedo abrir una cuenta?</Button>
          <Collapse isOpen={isOpen_c}>
            <Card>
              <CardBody>
              Sí puedes. Sólo necesitamos verificar tu identidad.
              </CardBody>
            </Card>
          </Collapse>  

       
          <Button onClick={toggle_d} style={{ marginBottom: '1rem' }}>¿Es legal este servicio?</Button>
          <Collapse isOpen={isOpen_d}>
            <Card>
              <CardBody>
              Completamente legal y transparente. La gestión es realizada por un promotor bancario.
              </CardBody>
            </Card>
          </Collapse>    



        </div>
      

        <div className="col-12 col-lg-6">

        <Button onClick={toggle_e} style={{ marginBottom: '1rem' }}>¿Cómo recibiré los códigos para realizar pagos por Zelle o Wire Transfer?</Button>
          <Collapse isOpen={isOpen_e}>
            <Card>
              <CardBody>
              Recibirás un código por parte del Banco a tu correo electrónico.
              </CardBody>
            </Card>
          </Collapse>

   
          <Button onClick={toggle_f} style={{ marginBottom: '1rem' }}>¿El pago del fee (cuota) puede hacerse personalmente?</Button>
          <Collapse isOpen={isOpen_f}>
            <Card>
              <CardBody>
              Sí. Únicamente en la ciudad de Caracas (Venezuela).
              </CardBody>
            </Card>
          </Collapse>  

   
          <Button onClick={toggle_g} style={{ marginBottom: '1rem' }}>¿En cuánto tiempo recibiré la tarjeta de débito?</Button>
          <Collapse isOpen={isOpen_g}>
            <Card>
              <CardBody>
              Aproximadamente, de cinco a siete días.
              </CardBody>
            </Card>
          </Collapse>   

      
          <Button onClick={toggle_h} style={{ marginBottom: '1rem' }}>No poseo dirección ni número telefónico americano, ¿qué hago?</Button>
          <Collapse isOpen={isOpen_h}>
            <Card>
              <CardBody>
              Se coloca la dirección de un casillero, puerta a puerta o Courier (NO P.O.BOX), y este se encarga de reenviar la Tarjeta de Débito a su país de residencia. Y en el caso del número telefónico, existe una aplicación que se descarga y genera un número americano que se puede utilizar con el banco.
              </CardBody>
            </Card>
          </Collapse>      



        </div>
 


   
          
        </div>
    
      </Card>
    </div>

   </> 
 
 );
}

export default Example;
