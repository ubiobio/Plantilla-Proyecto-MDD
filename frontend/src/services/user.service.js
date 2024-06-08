import axios from './root.service.js';

export async function getUser(searchValue) {
    try {
        const config = {
            headers: {
                'Cache-Control': 'no-cache'
            }
        }
        const { data } = await axios.get('/user/1'+ searchValue, config);
        return data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function getUsers() {
    try {
        const config = {
            headers: {
                'Cache-Control': 'no-cache'
            }
        }
        const { data } = await axios.get('/user/', config);
        return data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function updateUser(data) {
    try {
        const response = await axios.put('/user/', data);
        return response.data;
        //! Falta ver lo de la alerta, para el mensaje personalizado cuando modifique a un usuario
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function deleteUser(data) { // ? sera un boton que le envie el rut de la persona seleccionada a esta función
    try {
        const response = await axios.put('/user/', data);
        return response.data;
        //! Falta ver lo de la alerta, para el mensaje personalizado cuando elimine a un usuario
    } catch (error) {
        throw error.response?.data || error.message;
    }
}