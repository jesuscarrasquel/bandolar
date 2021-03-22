import axios from 'axios';
import * as cons from './constant';

export async function signup(formulario) {
    
    try {
        
        const res = await axios.post(cons.url_server, formulario);
        return res.data;

    } catch (error) {
        return error
    }
}

export async function login(formulario) {

    try {
        
        const res = await axios.post(cons.url_server, formulario);

        return res.data;
    } catch (error) {
        return error
    }
}

export async function check(formulario) {
    try {
        
        const res = await axios.post(cons.url_server, formulario);
        
        return res.data;

    } catch (error) {
        return error
    }
}

export async function uploadFiles(archivos)  {
    try {
        const archivosPeticion = await axios.post(cons.url_server, archivos);

        return archivosPeticion.data;
        
    } catch (error) {
        return error
    }
}

export const pagoComprobante = async (comprobanteImagen) => {
    try {
        const res = await axios.post(cons.url_server, comprobanteImagen);

        return res.data;
    } catch (error) {
        return error
    }
}

