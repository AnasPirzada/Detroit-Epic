import apiClient from '../utils/apiClient.js';

const LoginApi = async data => {
  try {
    const response = await apiClient.post(`/auth/login`, data); // Pass data in post request
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

const Signup = async data => {
  try {
    const response = await apiClient.post('/auth/signup', data);
    return response.data;
  } catch (error) {
    console.error('Error saving result:', error);
    throw error;
  }
};

const GetProfile = async () => {
  try {
    const response = await apiClient.get(`/profiles/get`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};
const UpdateProfile = async data => {
  try {
    const response = await apiClient.post('/profiles/update', data);
    return response.data;
  } catch (error) {
    console.error('Error saving result:', error);
    throw error;
  }
};
export default {
  LoginApi,
  Signup,
  GetProfile,
  UpdateProfile,
};
