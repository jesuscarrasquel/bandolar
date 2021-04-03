import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

import './styles/Home.css';
import './styles/HomeDesktop.css';

import Casa from '../assets/stuff/casa.png'
import Dinero from '../assets/stuff/dinero.png'
import Rebaja from '../assets/stuff/rebaja.png'
import Reloj from '../assets/stuff/reloj.png'

import BTC from '../assets/pagos/BTC.png';
import cash from '../assets/pagos/cash.png';
import paypal from '../assets/pagos/paypal.png';
import wiretransfer from '../assets/pagos/wiretransfer.png';
import zelle from '../assets/pagos/zelle.png';

import HomeList from '../components/HomeList';


class Home extends Component {

    state = {
        data: []
    }

    mostrarScroll = () => {
        let animado = document.querySelectorAll(".animado");
        let scrollTop = document.documentElement.scrollTop;

        for (let index = 0; index < animado.length; index++) {
            const alturaAnimado = animado[index].offsetTop;
            
            if(alturaAnimado - 500 < scrollTop) {
                animado[index].style.opacity = 1;
                animado[index].classList.add("mostrarArriba");
            }

        }
    }

    componentDidMount() {

        window.addEventListener("scroll", this.mostrarScroll); 

        this.setState({
            data: [
                {
                    id: 1,
                    image: Casa,
                    info: "Necesidad de cuenta en Dólares",
                    description: "Conscientes de la necesidad de poseer y manejar una cuenta en dólares, ofrecemos la forma más rápida y segura de obtener una a distancia."
                },{
                    id: 2,
                    image: Dinero,
                    info: "Entrega Rápida",
                    description: "Ofrecemos una entrega rápida. Nuestros plazos de entrega son de aproximadamente de cinco a siete dias."   
                },{
                    id: 3,
                    image: Rebaja,
                    info: "¡Precios accesibles!",
                    description: "Conscientes de la necesidad de poseer y manejar una cuenta en dólares, ofrecemos la forma más rápida y segura de obtener una a distancia."
                },{
                    id: 4,
                    image: Reloj,
                    info: "Domicilio en Estados Unidos",
                    description: "También te asesoramos para que obtengas una dirección o casillero en Estados Unidos en caso de no poseer alguna al momento de la apertura de la cuenta."
                }
            ]
        })
    }


    render() {

        return (
            <>
            <Navbar/>
    
            <div className="container-fluid container-home">
                
                <main className="encabezado">

                    <div className="row row-portada">

                        <div className="col-12">

                            <a href="https://wa.link/gsxn1r" className="whatsapp" target="_blank"> <i className="fa fa-whatsapp whatsapp-icon"></i></a>

                            <span className="text1  animate__animated animate__fadeInUp">Bandolar</span>
                            <span className="text2 animate__animated animate__zoomIn">Tu acceso a la economía mundial</span>
                            <div className="boton-container-home">
                            <Link className="btn btn-success boton-home" to="/signup">Empieza ahora</Link>
                            </div>

                        </div>

                    </div>

                    <div className="row row-info">

                        <div className="title-quieresmas">
                            <h1>¿Quieres saber más?</h1>
                        </div>

                        <HomeList badge={this.state.data}/>
                        
                    </div>



                    <div className="row row-info">

                        <div className="title-quieresmas">
                            <h1 id="formas-pago-title">Formas de pago</h1>
                        </div>
       

            <div class="col-12 col-md-5 box-home animado" id="bitcoin">
                
                    <img class="img" src={BTC} width="300px" alt="btc-coin"></img>
                    <h2 class="stuff">Bitcoin</h2>
                    <p class="box-info">Adquiere tu cuenta de banco en Estados Unidos pagando con Bitcoins por nuestro servicio de apertura.</p>
                
            </div>
            <div class="col-12 col-md-5 box-home animado" id="cash">
                
                    <img class="img" src={cash} width="300px" height="200px" alt="cash-icon"></img>
                    <h2 class="stuff">Dinero en Efectivo</h2>
                    <p class="box-info">Puedes realizar el pago en efectivo en nuestras oficinas en la ciudad de Caracas.</p>
                
            </div>
            <div class="col-12 col-md-5 box-home animado">
                
                    <img class="img" src={paypal} width="300px" height="200px" alt="paypal-icon"></img>
                    <h2 class="stuff">Paypal</h2>
                    <p class="box-info">Puedes pagar por nuestros servicios via PayPal.</p>
                
            </div>
            <div class="col-12 col-md-5 box-home animado">
                
                    <img class="img" src={wiretransfer} width="300px" height="200px" alt="transfer"></img>
                    <h2 class="stuff">Transferencia Bancaria</h2>
                    <p class="box-info">Mediante una tranferencia bancaria podrás tramitar el pago de la apertura de tu nueva cuenta bancaria estadounidense.</p>
                
            </div>
            <div class="col-12 col-md-5 box-home animado">
                
                    <img class="img" src={zelle} width="300px" alt=""></img>
                    <h2 class="stuff">Zelle</h2>
                    <p class="box-info">También aceptamos pago vía Zelle.</p>
                
            </div>
    


                    </div>


                </main>


            </div>
            </>
        );
    }
}

export default Home;