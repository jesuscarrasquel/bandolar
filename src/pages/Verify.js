import React, { Component } from 'react';
import NavbarIn from '../components/NavbarIn';
import dni from '../assets/veryfy/dni.png'
import pasaporte from '../assets/veryfy/pasaporte.png'
import ui from '../assets/veryfy/ui.png'
import foto from '../assets/veryfy/foto.png'

import './styles/Verify.css';
import './styles/VerifyDesktop.css';
import { uploadFiles } from '../api/peticiones';
import * as cons from '../api/constant';

class Verify extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            documento: '',
            foto: '' 
        };

        const email = this.props.match.params.key;
        console.log(email);
    }



    sendImage = async (event) => {

        const email = this.props.match.params.key;
        const type = 'upload';
        const password = '';
        const confirm_password = ''


        const data = new FormData();


        data.append('foto', this.state.foto);
        data.append('documento', this.state.documento);
        data.append('email', email);
        data.append('password', password);
        data.append('confirm_password', confirm_password);
        data.append('type', type);

        const sendfiles = await uploadFiles(data);

        window.location.href = `${cons.url_client}/my-account/${email}`;


        // await axios.post('https://www.bandolar.com/bandolarback/', data)
        //     .then((res) => {
        //         console.log(res.data);
             
        //     window.location.href = `https://www.bandolar.com/my-account/${email}`;
     
        //     })
        //     .catch(err => console.log(err));
 
    }


    render() {

        return (
            
            <>
            
            <NavbarIn/>
            <div className="container container-verify">

                <form method="POST" encType="multipart/form-data">
                    <div className="header-verify">
                        <h1>Verificación de identidad</h1>
                    </div>
                    <label id="label-photo" for="">Sube una foto de cualquier documento de estos tres.</label>
                        <div class="container2">  

                            <div className="box-verify">
                                
                                <label class="lab-cs" for="">Licencia de Conducir<br/> </label><br/>
                                <label for="input"><img class="img-box" src={dni} width="144px" alt=""></img></label>
                            </div>

                            <div className="box-verify">
                                <label class="lab-cs" for="">Pasaporte</label><br/><br/>
                                <label for="input"><img class="img-box" src={pasaporte} width="144px" alt=""></img></label>
                            </div>

                            <div className="box-verify">
                                <label class="lab-cs" for="">Cédula</label><br/>
                                <label for="input"><img class="img-box" src={ui} width="144px" alt=""></img></label>
                            </div>     

                        </div>

                        <div className="file-verify">

                            <input type="file" name="documento" id="documento" required accept=".jpg" onChange={ e => {
                                const file = e.target.files[0];
                                this.setState({documento: file});
                            }}></input>
                        </div>


                    <label id="label-photo" for="">Sube una foto de ti mismo mostrando el documento.</label>

                        <div class="container2">            
                            <label for="foto"><img src={foto} width="300px" alt=""></img></label>
                            
                        </div>

                        <div className="file-verify">

                        <input type="file" name="foto" id="foto" required accept=".jpg" onChange={ e => {
                
                                const file = e.target.files[0]; 
                                this.setState({foto: file});
                            }}></input>

                        </div>

                   

                    <div className="container-button-verify">

                        <button type="button" name="verify" class="btn btn-primary" onClick={this.sendImage}>
                            Verificar
                        </button>

                    </div>
                </form>                   

            </div>

            </>

        );
    }
}

export default Verify;