import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Simulate login and redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-main-bg w-full p-4 font-sans">
      <div className="bg-card-bg border border-border-color rounded-[24px] w-full max-w-[500px] p-12 flex flex-col">
        <div className="text-center mb-10">
          <h1 className="text-white text-[42px] font-extrabold tracking-tight font-jakarta">
            Welcome <span className="font-serif italic font-normal text-primary">back</span>
          </h1>
          <p className="text-gray-500 text-[14px] mt-2">
            Sign in to track your application
          </p>
        </div>

        <form onSubmit={handleSignIn} className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label className="text-white text-[13px] font-semibold mb-2.5 ml-1">
              Email
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Search Name, email ..."
              className="w-full bg-[#070211]/60 border border-white/5 text-white rounded-2xl px-5 py-4 text-[13px] outline-none focus:border-primary transition-colors placeholder-gray-600"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white text-[13px] font-semibold mb-2.5 ml-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="**********"
              className="w-full bg-[#070211]/60 border border-white/5 text-white rounded-2xl px-5 py-4 text-[13px] outline-none focus:border-primary transition-colors placeholder-gray-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-opacity-90 text-white rounded-full py-4 text-[13px] font-semibold transition-all mt-4 cursor-pointer"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
