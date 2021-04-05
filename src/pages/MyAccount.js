import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import './styles/MyAccount.css';
import './styles/MyAccountDesktop.css';

import { pagoComprobante } from '../api/peticiones';
import { pedirNombre } from '../api/peticiones';
import * as cons from '../api/constant';

class MyAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pago: '',
            message: '',
            nombre: ''
        }

        const sesion = window.localStorage.getItem('email')

        if(sesion == "" || sesion == null) {
            window.location.href = `${cons.url_client}`;
        }
    }

    // state = {

    // }

    async componentDidMount() {

        const sesion = window.localStorage.getItem('email')

        if(sesion == "" || sesion == null) {
            window.location.href = `${cons.url_client}`;
        }

        const email = this.props.match.params.key;
        // const email = this.props.email;
        const type = "nombre";

        const password = '';
        const confirm_password = ''

        const send_email = new FormData();
        send_email.append("email", email)
        send_email.append("type", type);
        send_email.append('password', password);
        send_email.append('confirm_password', confirm_password);

        const nombre = await pedirNombre(send_email);

        this.setState({
            nombre: nombre[0].username
        })

    }

    sendImage2 = async (event) => {

        const email = this.props.match.params.key;
        const password = '';
        const confirm_password = ''

        const data = new FormData();
        const type = "payment"
        data.append("type", type);
        data.append("pago", this.state.pago);
        data.append("email", email);
        data.append('password', password);
        data.append('confirm_password', confirm_password);

        const pago = await pagoComprobante(data);

        this.setState({
            message: `${pago}`
        })

   
    }

    copiar = () => {
        var copyText = document.getElementById("bitcoin-cuenta");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        
    }

    copiar2 = () => {
        var copyText = document.getElementById("zelle-cuenta");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        
    }

    procesando = () => {
        if(this.state.message != '') {

            return(
                <div className="alert alert-warning" role="alert">
                <h2>{this.state.message}</h2>
                </div>
            );
        }
    }

    
    render() {
        return (
            <>
             <Navbar/>
            <div className="container container-pago">

                <div className="row row-account">
                    <div className="col-11">
                        <h1>Bienvenido a tu cuenta <span className="text-capitalize">{this.state.nombre}</span></h1>

                        <br/>

                            {this.procesando()}
                        
                    </div>
                </div>
            <br/>

            {/* <p>¡Has iniciado sesíón</p> */}

            <br/>
            <div className="iniciar-compra">
                <h2>¿Quieres iniciar una compra?</h2>
                <br/>
                <h2>Bitcoin adress</h2>
                <br/>

                <input type="text" value="bc1qc7xqlre8k6yn2nrz6scysrm0aj6tdwjqjs98xv" readOnly className="input-cuenta" id="bitcoin-cuenta"/>
                <button className="copy-button" onClick={() => {this.copiar()}}>Copiar</button>
              

                <br/><br/>
            <h2>Zelle adress</h2>
            <input type="text" value="Jose Barradas barradasjose2020@gmail.com" readOnly className="input-cuenta" id="zelle-cuenta"/>
            <button className="copy-button" onClick={() => {this.copiar2()}}>Copiar</button>

            <br/><br/><br/>
            <h2>Debes abonar el costo del servicio, $1800.
            Y una vez enviado introduce el comprobante de la transacción.</h2>

            <br/><br/>

            <h2>Imagen del comprobante de la transacción</h2>

            <br/>

            <form method="post">

                <input type="file" name="pago" id="pago" className="input-file-pago" accept=".jpg" onChange={ e => {
                        const file = e.target.files[0];
                        this.setState({pago: file});
                    }}/>

                <br/><br/>
                
                <button className="btn btn-success btn-pago" type="button" onClick={this.sendImage2}>CONFIRMAR PAGO</button>

            </form>

            </div>
        
            </div>
            </>
        );
    }
}

export default MyAccount;