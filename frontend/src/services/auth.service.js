import axios from './root.service.js';
import cookies from 'js-cookie';

export async function login(data) {
    try {
        const response = await axios.post('/auth/login', data);
        const {status} = response;
        if(status === 200) {
            sessionStorage.setItem('usuario', JSON.stringify(response.data));
        }
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function register(data) {
    try {
        const response = await axios.post('/auth/register', data);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function profile() {
    try {
        const config = {
            headers: {
                'Cache-Control': 'no-cache'
            }
        }
        const data = await axios.get('/auth/profile', config)
        return data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function logout() {
    try {
        await axios.post('/auth/logout');
        sessionStorage.removeItem('usuario');
        cookies.remove('miCookie');
    } catch (error) {
        console.error('Error al cerrar sesión:', error);
    }
}
