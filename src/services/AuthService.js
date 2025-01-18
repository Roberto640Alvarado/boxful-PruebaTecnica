import axios from 'axios';

const API_URL = 'http://localhost:3000/users';

const API = axios.create(
    {
        baseURL: API_URL,
        headers: {
            "Content-Type": "application/json",
        }
    }
);

const authService = {

    login: async (email, password) => {
        try {
            const response = await API.post('/login', { email, password });
            
            if(response.status === 200){
                return response;
            }else {
                throw new Error(response.status);
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error.response?.data || error.message);
            throw error;
        }

    },
    register: async (username, email, password) => {
        try {
            const response = await API.post('/register', { username, email, password });
            if(response.status === 201){
                return response;
            }else {
                throw new Error(response.status);
            }
        } catch (error) {
            console.error('Error al registrar usuario:', error.response?.data || error.message);
            throw error;
        }
    }

}
export default authService;