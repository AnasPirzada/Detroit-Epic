import apiClient from '../utils/apiClient.js';

const LoginApi = async data => {
  try {
    const response = await apiClient.post(`/auth/login`, data); // Pass data in post request
    console.log(response);

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
    const response = await apiClient.put('/profiles/update', data);
    return response.data;
  } catch (error) {
    console.error('Error saving result:', error);
    throw error;
  }
};

const GetBlogs = async () => {
  try {
    const response = await apiClient.get(`/blogs`);
    return response.data;
  } catch (error) {
    console.error('Error getting Blog:', error);
    throw error;
  }
};
const CreateBlog = async data => {
  try {
    const response = await apiClient.post('/blogs/add', data);
    return response.data;
  } catch (error) {
    console.error('Error Adding Blog:', error);
    throw error;
  }
};
const Getexperiences = async () => {
  try {
    const response = await apiClient.get(`/experiences`);
    return response.data;
  } catch (error) {
    console.error('Error getting Experiences:', error);
    throw error;
  }
};
const CreateExperiences = async data => {
  try {
    const response = await apiClient.post('/experiences/add', data);
    return response.data;
  } catch (error) {
    console.error('Error Adding Experiences:', error);
    throw error;
  }
};
const Getreviews = async () => {
  try {
    const response = await apiClient.get(`/reviews`);
    return response.data;
  } catch (error) {
    console.error('Error getting Reviews:', error);
    throw error;
  }
};
const CreateReviews = async data => {
  try {
    const response = await apiClient.post('/reviews/add', data);
    return response.data;
  } catch (error) {
    console.error('Error Adding Reviews:', error);
    throw error;
  }
};
export default {
  LoginApi,
  Signup,
  GetProfile,
  UpdateProfile,
  GetBlogs,
  CreateBlog,
  Getexperiences,
  CreateExperiences,
  CreateReviews,
  Getreviews,
};
