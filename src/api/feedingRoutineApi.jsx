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

export const getResources = async () => {
  const id = "a3213123"
  try {
    const response = await api.get(`/resource/${id}`);
    return response.data;
  } catch(error) {
    console.error('Error fetching resources:', error);
    throw error;
  }
}

export const createFeedingRoutine = async (feedingRoutine) => {
  try {
    const response = await api.post('/feeding-routines', feedingRoutine);
    return response.data;
  } catch (error) {
    console.error('Error creating feeding routine:', error);
    throw error;
  }
};

export const editFeedingRoutine = async (feedingRoutineId,feedingRoutine) => {
  try {
    const response = await api.put(`/feeding-routines/${feedingRoutineId}`, feedingRoutine);
    return response.data;
  } catch (error) {
    console.error('Error editing feeding routine:', error);
    throw error;
  }
};

export const getLiveStocks = async () => {
  try {
    const response = await api.get('/livestock');
    return response.data;
  } catch (error) {
    console.error('Error fetching livestocks:', error);
    throw error;
  }
};

export const getFeedingRoutineAgainstId = async (id) => {
  try {
    const response = await api.get(`/feeding-routines/livestock/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching feeding routines:', error);
    throw error;
  }
};

export const getFeedingRoutineById = async (id) => {
  try {
    const response = await api.get(`/feeding-routines/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching feeding routines:', error);
    throw error;
  }
};

export const getShelters = async () => {
  try {
    const response = await api.get('/shelters');
    console.log(response, "resp")
    return response.data;
  }  catch(error) {
    console.log("Error fetching shelters");
    throw error;
  }
}
