import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { userApi } from '../../Apis/index.jsx';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const response = await userApi.LoginApi({ email, password });
      console.log('Login response:', response);
      console.log('token', response.token);
      const Token = response.token;
      localStorage.setItem('Token', Token);
      toast.success('login Successfully');
    } catch (error) {
      console.error('Login failed:', error);
      toast.error('Please check Your Credentials ');
      setError(
        'Failed to log in. Please check your credentials and try again.'
      );
    }
  };

  return (
    <>
      <ToastContainer />
      <div className='min-h-screen bg-white'>
        <main className='flex flex-col items-center justify-center px-4 py-12'>
          <div className='w-full max-w-md'>
            <h2 className='text-3xl font-bold text-center mb-8'>
              Welcome back
            </h2>
            <form className='space-y-6' onSubmit={handleLogin}>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700'
                >
                  Username or email address
                </label>
                <Input
                  id='email'
                  type='email'
                  placeholder='Username or email address'
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-700'
                >
                  Password
                </label>
                <Input
                  id='password'
                  type='password'
                  placeholder='Password'
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              {error && <p className='text-red-500 hidden text-sm'>{error}</p>}
              <Button
                type='submit'
                className='mt-2 w-full bg-[#2c99e2] hover:bg-blue-600 text-white'
              >
                Log in
              </Button>
            </form>
            <div className='mt-6 text-center'>
              <a href='#' className='text-sm text-blue-500 hover:underline'>
                Forgot your username or password?
              </a>
            </div>
            <div className='mt-2 text-center'>
              <Button
                href='#'
                className='text-sm bg-[#a2b4c0] hover:bg-blue-600'
              >
                Log in with phone or email
              </Button>
            </div>
            <div className='mt-6 text-center'>
              <p className='text-sm text-gray-600'>
                New to Epic Weekend?
                <Link to={'/register'}>
                  <Button className='ml-2' variant='outline'>
                    Register
                  </Button>
                </Link>
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
