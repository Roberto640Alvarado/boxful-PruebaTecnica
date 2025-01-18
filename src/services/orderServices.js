import axios from 'axios';

const API_URL = 'http://localhost:3000';

//Crear una orden
const createOrder = async (orderData,token) => {
    try {
      const response = await axios.post(
        `${API_URL}/orders`,
        orderData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data; 
    } catch (error) {
      console.error('Error al crear la orden:', error.response?.data || error.message);
      throw error; 
    }
  };
  
  export default {
    createOrder,
  };