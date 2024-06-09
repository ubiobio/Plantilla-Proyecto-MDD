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
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

export async function deleteUser(data) {
    try {
        const response = await axios.put('/user/', data);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}