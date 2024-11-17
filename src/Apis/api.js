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
const Createitineraries = async data => {
  try {
    const response = await apiClient.post('/itineraries/create', data);
    return response.data;
  } catch (error) {
    console.error('Error Adding itineraries:', error);
    throw error;
  }
};

const Getitineraries = async () => {
  try {
    const response = await apiClient.get(`/itineraries/all`);
    return response.data;
  } catch (error) {
    console.error('Error Get itineraries:', error);
    throw error;
  }
};
const Createreferrals = async () => {
  try {
    const response = await apiClient.get('/referrals/generate');
    return response.data;
  } catch (error) {
    console.error('Error Adding referrals:', error);
    throw error;
  }
};

const Createreferralsstatus = async data => {
  try {
    const response = await apiClient.get('/referrals/status', data);
    return response.data;
  } catch (error) {
    console.error('Error Adding referrals status:', error);
    throw error;
  }
};
const Getreferralscredits = async () => {
  try {
    const response = await apiClient.get('/referrals/credits');
    return response.data;
  } catch (error) {
    console.error('Error Getting user referrals:', error);
    throw error;
  }
};
const FetchItinerarySuggestions = async id => {
  try {
    const response = await apiClient.get(`/itineraries/suggestions/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error Createing user suggestions:', error);
    throw error;
  }
};
const getSuggestions = async id => {
  try {
    const response = await apiClient.get(`/itineraries/getSuggestions/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error Getting user suggestions:', error);
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
  Createitineraries,
  Getitineraries,
  Createreferrals,
  Createreferralsstatus,
  Getreferralscredits,
  FetchItinerarySuggestions,
  getSuggestions,
};
