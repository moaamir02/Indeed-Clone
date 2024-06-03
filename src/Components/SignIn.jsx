import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

const SignIn = () => {
  const [isInputActive, setIsInputActive] = useState(false);

  const handleFocus = () => {
    setIsInputActive(true);
  };

  const handleBlur = () => {
    setIsInputActive(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Ready to take the next step?</h2>
        <p className="mb-6 text-center text-gray-700">Create an account or sign in.</p>
        <div className="mb-4">
          <button className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded flex items-center justify-center space-x-2">
            <FcGoogle className="w-6 h-6" />
            <span>Continue with Google</span>
          </button>
        </div>
        <div className="mb-4">
          <button className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded flex items-center justify-center space-x-2">
            <FaApple className="w-6 h-6" />
            <span>Continue with Apple</span>
          </button>
        </div>
        <div className="relative mb-4">
          <div className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 ${isInputActive ? 'text-xs -top-3 bg-white px-1' : ''}`}>
            Email Address
          </div>
          <input
            type="text"
            className="w-full border border-gray-300 py-2 px-4 rounded"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <div>
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded">Continue with Email</button>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            By continuing, you agree to our <a href="#" className="text-blue-500">Terms of Service</a> and <a href="#" className="text-blue-500">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;


