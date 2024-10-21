import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function login() {
  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
        <div className="flex items-center space-x-6">
          <Link to={'/'}>
            <h1 className="text-xl font-bold">Epic Weekend</h1>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Explore
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Your Trips
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  For Hosts
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </header>
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
