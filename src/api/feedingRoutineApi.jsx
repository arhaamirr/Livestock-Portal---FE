import axios from 'axios';

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

const token = localStorage.getItem('token');
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': ` ${token}`, 
  },
});

export const getFeedingRoutines = async () => {
  try {
    const response = await api.get('/feeding-routines');
    return response.data;
  } catch (error) {
    console.error('Error fetching feeding routines:', error);
    throw error;
  }
};

export const createFeedingRoutine = async (feedingRoutine) => {
  try {
    const response = await api.post('/feeding-routines', feedingRoutine);
    return response.data;
  } catch (error) {
    console.error('Error creating feeding routine:', error);
    throw error;
  }
};

