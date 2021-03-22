import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import Navbar from '../components/Navbar';
import { signup } from '../api/peticiones';
import * as cons from '../api/constant';

import './styles/Signup.css';


class Signup extends Component {

    state = {
        form: {
            username: '',
            lastname: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: ''
        },
        status: '',
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value, 
            },
        });
      
    };

    register = async (e) => {
        e.preventDefault()
        const { username, lastname, email, phone, password, confirmPassword } = this.state.form;
        const type = "register";
     

        const f = new FormData();
        f.append("username", username);
        f.append("lastname", lastname);
        f.append("email", email);
        f.append("phone", phone);
        f.append("password", password);
        f.append("confirm_password", confirmPassword);
        f.append("type", type);
        
        // await axios.post('https://www.bandolar.com/bandolarback/', f).then((response) => {

           
        //     console.log(response.data)
        //     console.log(response)
      
        //     if(response.data === "OK") {
        //         window.location.href = 'https://www.bandolar.com/login';
        //     } else {
        //         this.setState({
        //             status: response.data
        //         })
        //     }


        // });

        
        const res_signup = await signup(f);
        console.log(res_signup);

            if(res_signup === "OK") {
                window.location.href = `${cons.url_client}/login`;
            } else {
                this.setState({
                    status: `${res_signup}`
                })
            }




        };
    


    render() {
        return (
            <>
    

        <div className="container-fluid container-login">

    <div className="row">
      
            <div className="card-login">
                

                        <h1>Regístrate</h1>

                
                    <div className="container1">



                        <form className="form-group"  method="POST">
                            
                            
                                <div id="div-form">

                                <div className="form-login">
                                    <input type="text" className="input form-control" id="name-signup" name="username"  required onChange={this.handleChange} required></input>
                                    <label htmlFor="">Nombre</label>
                                </div>

                                <div className="form-login">
                                    <input type="text" className="input form-control" id="lastname-signup" name="lastname"  required onChange={this.handleChange} required></input>
                                    <label htmlFor="">Apellidos</label>
                                </div>

                                <div className="form-login">
                                    <input type="email" className="input form-control" id="email-login" name="email"  required onChange={this.handleChange} required></input>
                                    <label htmlFor="">Correo electrónico</label>
                                </div>

                                <div className="form-login">
                                    <input type="text" className="input form-control" id="phone" name="phone"  required onChange={this.handleChange} required></input>
                                    <label htmlFor="">Teléfono</label>
                                </div>
                                
                                <div className="form-login">
                                    <input type="password" className="input form-control" id="password-login" name="password"  required onChange={this.handleChange} required></input>
                                    <label htmlFor="">Contraseña</label>
                                </div>

                                <div><span className="minimo-caracteres">La contreseña debe de tener al menos 8 carácteres.</span></div>

                                <div className="form-login">
                                    <input type="password" className="input form-control" id="confirm-password-login" name="confirmPassword"  required onChange={this.handleChange} required></input>
                                    <label htmlFor="">Confirmar contraseña</label>
                                </div>

                                <br/>

                                <div className="boton-container text-center">

                                    <Button type="submit" name="login_b" id="login_b" className="boton-login" onClick={ this.register}>
                                        Registrar
                                    </Button>

                                </div>
                                <div><br/>
                                    <h3>{this.state.status}</h3>
                                </div>

                            </div>
                            
                        </form>
                    </div>



              
            </div>

    </div>
    
</div>
    </>
        );
    }
}

export default Signup;