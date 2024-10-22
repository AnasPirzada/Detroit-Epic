import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

export default function Register() {
  const [agreed, setAgreed] = useState(false);
  return (
    <>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold mb-6">Create your account</h1>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email address
            </label>
            <Input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full bg-gray-50"
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full name
            </label>
            <Input
              type="text"
              id="name"
              placeholder="Jane Doe"
              className="w-full bg-gray-50"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <Input
              type="password"
              id="password"
              placeholder="At least 8 characters"
              className="w-full bg-gray-50"
            />
            <p className="text-xs text-gray-500 mt-1">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </p>
          </div>
          <div>
            <label
              htmlFor="dob"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Date of birth
            </label>
            <Input
              type="text"
              id="dob"
              placeholder="MM/DD/YYYY"
              className="w-full bg-gray-50"
            />
            <p className="text-xs text-gray-500 mt-1">
              You must be at least 18 years old to use Detroit Epic Weekend
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
            />
            <label
              htmlFor="terms"
              className="text-sm text-gray-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to Detroit Epic Weekends Terms of Service and Privacy
              Policy
            </label>
          </div>
          <Button className="w-full bg-[#2C99E2] hover:bg-blue-600 text-white">
            Continue
          </Button>
        </form>
      </div>
    </>
  );
}
