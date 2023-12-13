import axios from 'axios'

const url = "http://localhost:8080/api/"



export default class API {

    //LLAMADAS USUARIO
    static async addUsuario(data) {
        try {
            const res = await axios.post(url + "addUsuario", data)
            return res.data
        } catch (error) {
            return error.response.data
        }
    }

    static async getNumeroUsuarios() {
        try {
            const res = await axios.get(url + "getNumeroUsuarios")
            return res.data
        } catch (error) {
            return error.response.data
        }
    }
    
    static async logusuario(data) {
        try {

            const res = await axios.post(url + "logusuario", data)
            return res.data

        } catch (error) {

            return error.response.data

        }
    }


    static async verificarUsuarioPorSucursal(sucursal, rut) {
        try {
            const res = await axios.get(`${url}verificarUsuarioPorSucursal/${sucursal}/${rut}`);
            return res.data;
        } catch (error) {
            return error.response.data;
        }
    }

    static async confirmarUsuarioByRut(rut) {
        try {
            const res = await axios.get(`${url}confirmarUsuarioByRut/${rut}`);
            return res.data;
        } catch (error) {
            return error.response.data;
        }
    }

    static async getNumeroCuentaVista() {
        try {
            const res = await axios.get(url + "getNumeroCuentaVista")
            return res.data
        } catch (error) {
            return error.response.data
        }
    }
    static async addCuentaVista(data) {
        try {
            const res = await axios.post(url + "addCuentaVista", data)
            return res.data
        } catch (error) {
            return error.response.data
        }
    }
}