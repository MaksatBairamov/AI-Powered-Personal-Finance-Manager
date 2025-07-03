import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getTransactions = async () => {
    try {
        const response = await axios.get(`${API_URL}transactions/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching transactions:', error);
    }
};
