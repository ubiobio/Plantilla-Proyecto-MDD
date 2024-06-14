import axios from './root.service.js';

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

export async function updateUser(data, rut) {
    try {
        const response = await axios.put(`/user/?rut=${rut}`, data);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function deleteUser(rut) {
    try {
        const response = await axios.delete(`/user/?rut=${rut}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}