import React, { Component } from 'react';
import NavbarIn from '../components/NavbarIn';
import './styles/MyAccount.css';
import './styles/MyAccountDesktop.css';

import axios from 'axios';
import { pagoComprobante } from '../api/peticiones';

class MyAccount extends Component {

    state = {
        pago: '',
        message: ''
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

        console.log(pago)

        this.setState({
            message: `${pago}`
        })

        // http://localhost:3001/pagocuenta



        // axios.post('https://www.bandolar.com/bandolarback/', data)
        //     .then(res => {  
        //         console.log(res.data)
        //         this.setState({
        //             message: res.data
        //         })

        //     })
        //     .catch(err => console.log(err));
   
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
                <div class="alert alert-warning" role="alert">
                <h2>{this.state.message}</h2>
                </div>
            );
        }
    }

    
    render() {
        return (
            <>
             <NavbarIn/>
            <div className="container container-pago">

                <div className="row row-account">
                    <div className="col-11">
                        <h1>Bienvenido a tu cuenta</h1>

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
                <h3>Bitcoin adress</h3>
                <br/>

                <input type="text" value="bc1qc7xqlre8k6yn2nrz6scysrm0aj6tdwjqjs98xv" readOnly className="input-cuenta" id="bitcoin-cuenta"/>
                <button className="copy-button" onClick={() => {this.copiar()}}>Copiar</button>
              

                <br/><br/>
            <h3>Zelle adress</h3>
            <input type="text" value="Jose Barradas barradasjose2020@gmail.com" readOnly className="input-cuenta" id="zelle-cuenta"/>
            <button className="copy-button" onClick={() => {this.copiar2()}}>Copiar</button>

            <br/><br/><br/>
            <h2>Debes abonar el costo del servicio, $1800.
            Y una vez enviado introduce el comprobante de la transacción.</h2>

            <br/><br/>

            <h3>Imagen del comprobante de la transacción</h3>

            <br/>

            <form method="post">

                <input type="file" name="pago" id="pago" className="input-file-pago" onChange={ e => {
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