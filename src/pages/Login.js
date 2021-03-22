import axios from 'axios';
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { login, check } from '../api/peticiones';
import * as cons from '../api/constant';
import './styles/Login.css';
import './styles/LoginDesktop.css';

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

        type = "check";
        f.append("type", type);
        console.log(f);

        const res_ckeck = await check(f);

            console.log(res_ckeck);
            if(res_ckeck == "C") {
                // window.location.href = `https://www.bandolar.com/my-account/${email}`
                window.location.href = `${cons.url_client}/my-account/${email}`

            }else {
                window.location.href = `${cons.url_client}/verify/${email}`

                // window.location.href = `https://www.bandolar.com/verify/${email}`
            }

            }

        // await axios.post('https://www.bandolar.com/bandolarback/', f)
        // .then(async (response) => {
        //     console.log(response.data)

        //     if(response.data == "Error en la combinación entre usuario y contraseña") {
        //         this.setState({
        //             status: response.data
        //         })               
        //     }else {

        //         type = "check";
        //         f.append("type", type);
        //         console.log(f);
        //         await axios.post('https://www.bandolar.com/bandolarback/', f).then((res) => {
        //             console.log(res.data);
        //             if(res.data == "C") {
        //                 window.location.href = `https://www.bandolar.com/my-account/${email}`
        //             }else {
        //                 window.location.href = `https://www.bandolar.com/verify/${email}`
        //             }

        //         })

        //     }
        // })


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
            <div class="container-fluid container-login">
                <div class="row">
                    {/* <div class="col-12 col-lg-6"> */}

                        <div class="card-login">
                            
                                    <h1>Iniciar sesión</h1>
                                
                                <div class="container1">


                                    <form class="form-group" method="POST">
                                        
                            
                                            <div id="div-form">
                                            {/* <br/> */}

                                            <div class="form-login">
                                            
                                                <input type="email" class="input form-control" id="email-login" name="email"  required onChange={this.handlechange}></input>
                                                <label htmlFor="">Correo electrónico</label>
                                            </div>
                                            <br/>
                                            <div class="form-login">
                                                <input type="password" class="input form-control" id="password-login" name="password"  required onChange={this.handlechange}></input>
                                                <label htmlFor="">Contraseña</label>
                                            </div>
                                            <br/>

                                            <div class="boton-container text-center">

                                                <button type="button" name="login_b" id="login_b" class=" boton-login" onClick={this.loguearse}>
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