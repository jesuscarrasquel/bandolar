import axios from 'axios';
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { login, check } from '../api/peticiones';
import * as cons from '../api/constant';
import './styles/Login.css';
import './styles/LoginDesktop.css';

import MyAccount from './MyAccount';
import Verify from './Verify';

class Login extends Component {


    state = {
        form: {
            email: '',
            password: ''
        },
        status: '',
    }

    loguearse = async () => {
        const { email, password } = this.state.form;
        let type = "login";
        const confirm_password = "";

        const f = new FormData();
        f.append("email", email);
        f.append("password", password);
        f.append("confirm_password", confirm_password);
        f.append("type", type);

        const res_login = await login(f);

        if(res_login == "Error en la combinación entre usuario y contraseña") {
            this.setState({
                status: `${res_login}`
            })               
        }else {

        window.localStorage.setItem("email", email);
        
        type = "check";
        f.append("type", type);
        console.log(f);

        const res_ckeck = await check(f);

            console.log(res_ckeck);
            if(res_ckeck == "C") {
              
                // PAGINA DE MI CUENTA

                // <MyAccount email = {email}/>

                window.location.href = `${cons.url_client}/my-account/${email}`

            }else {
                // PAGINA DE VERIFICACION

                // <Verify email = {email}/>
                window.location.href = `${cons.url_client}/verify/${email}`

            }

            }

    }
 
    handlechange = e => {
        this.setState({
            form: {...this.state.form,
            [e.target.name]: e.target.value
        },
        })

    }

    render() {
        return (
            <>
            {/* <Navbar/> */}
            <div className="container-fluid container-login">
                <div className="row">
                    {/* <div className="col-12 col-lg-6"> */}

                        <div className="card-login">
                            
                                    <h1>Iniciar sesión</h1>
                                
                                <div className="container1">


                                    <form className="form-group" method="POST">
                                        
                            
                                            <div id="div-form">
                                            {/* <br/> */}

                                            <div className="form-login">
                                            
                                                <input type="email" className="input form-control" id="email-login" name="email"  required onChange={this.handlechange}></input>
                                                <label htmlFor="">Correo electrónico</label>
                                            </div>
                                            <br/>
                                            <div className="form-login">
                                                <input type="password" className="input form-control" id="password-login" name="password"  required onChange={this.handlechange}></input>
                                                <label htmlFor="">Contraseña</label>
                                            </div>
                                            <br/>

                                            <div className="boton-container text-center">

                                                <button type="button" name="login_b" id="login_b" className=" boton-login" onClick={this.loguearse}>
                                                    Iniciar sesión
                                                </button>

                                                <div><h1>{this.state.status}</h1></div>

                                            </div>
                                </div>
                                   
                                    </form>
                                
                                
                                </div>



                            
                        </div>


                        
                    {/* </div> */}
                </div>
                
            </div>
        </>
        );
    }
}

export default Login;