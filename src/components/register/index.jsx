import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userApi } from '../../Apis/index.jsx';

export default function Register() {
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    password: '',
    ReferalCode: '',
    dob: '',
  });
  const navigate = useNavigate();
  const handleInputChange = e => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!agreed) {
      toast.error('Please agree to the Terms of Service and Privacy Policy.');
      return;
    }
    try {
      const response = await userApi.Signup(formData);
      console.log('Signup successful:', response);
      toast.success('Signup successful!');
      navigate('/Payment');
    } catch (error) {
      console.error('Signup error:', error);
      toast.error('Signup failed. Please try again.');
    }
  };

  return (
    <div className='max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm'>
      <ToastContainer />
      <h1 className='text-2xl font-bold mb-6'>Create your account</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            Email address
          </label>
          <Input
            type='email'
            id='email'
            placeholder='you@example.com'
            value={formData.email}
            onChange={handleInputChange}
            className='w-full bg-gray-50'
          />
        </div>
        <div>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            Full name
          </label>
          <Input
            type='text'
            id='fullName'
            placeholder='Jane Doe'
            value={formData.fullName}
            onChange={handleInputChange}
            className='w-full bg-gray-50'
          />
        </div>

        <div>
          <label
            htmlFor='password'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            Password
          </label>
          <Input
            type='password'
            id='password'
            placeholder='At least 8 characters'
            value={formData.password}
            onChange={handleInputChange}
            className='w-full bg-gray-50'
          />
          <p className='text-xs text-gray-500 mt-1'>
            Use 8 or more characters with a mix of letters, numbers & symbols
          </p>
        </div>
        <div>
          <label
            htmlFor='dob'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            Date of birth
          </label>
          <Input
            type='text'
            id='dob'
            placeholder='MM/DD/YYYY'
            value={formData.dob}
            onChange={handleInputChange}
            className='w-full bg-gray-50'
          />
          <p className='text-xs text-gray-500 mt-1'>
            You must be at least 18 years old to use Detroit Epic Weekend
          </p>
        </div>

        <div>
          <label
            htmlFor='code'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            Add Referal Code{' '}
          </label>
          <Input
            type='text'
            id='ReferalCode'
            placeholder='23857303'
            value={formData.ReferalCode}
            onChange={handleInputChange}
            className='w-full bg-gray-50'
          />
        </div>

        <div className='flex items-center space-x-2'>
          <input
            type='checkbox'
            id='terms'
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            className='h-4 w-4 text-blue-600'
          />
          <label
            htmlFor='terms'
            className='text-sm text-gray-700 leading-none cursor-pointer'
          >
            I agree to Detroit Epic Weekends Terms of Service and Privacy Policy
          </label>
        </div>

        {/* Social Sign-In Section inside the form */}
        <div className='mt-4 text-center'>
          <p className='text-sm text-gray-600'>or sign in with</p>
          <div className='mt-2 flex justify-center space-x-4'>
            <Button className='flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-gray-600 border px-4 py-2 rounded'>
              <FaFacebookF className='h-5 w-5 mr-2' />
              Facebook
            </Button>
            <Button className='flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded'>
              <FaGoogle className='h-5 w-5 mr-2' />
              Google
            </Button>
          </div>
        </div>

        <Button
          type='submit'
          className='w-full bg-[#2C99E2] hover:bg-blue-600 text-white'
        >
          Continue
        </Button>
      </form>
    </div>
  );
}
