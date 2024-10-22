import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { Link } from 'react-router-dom';
export default function login() {
  return (
    <div className="min-h-screen bg-white">
      <main className="flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-8">Welcome back</h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Username or email address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Username or email address"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <Link to={'/'}>
              <Button className=" mt-2 w-full bg-[#2c99e2] hover:bg-blue-600 text-white">
                Log in
              </Button>
            </Link>
          </form>
          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot your username or password?
            </a>
          </div>
          <div className="mt-2 text-center">
            <Button href="#" className="text-sm bg-[#a2b4c0] hover:bg-blue-600">
              Log in with phone or email
            </Button>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              New to Epic Weekend?
              <Link to={'/register'}>
                <Button className="ml-2" variant="outline">
                  Register
                </Button>
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
