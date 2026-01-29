import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white tracking-tight">Welcome Back</h2>
          <p className="text-zinc-400 mt-2">Enter your details to sign in</p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1">Mobile Number or Email</label>
            <input 
              type="text" 
              placeholder="Enter your details"
              className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-600 transition-all"
            />
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm font-medium text-zinc-400">Password</label>
              <a href="#" className="text-xs text-zinc-500 hover:text-white">Forgot?</a>
            </div>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-600 transition-all"
            />
          </div>

          <button className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-zinc-200 transition-colors mt-2">
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-zinc-800"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-zinc-900 px-2 text-zinc-500">Or login with</span>
          </div>
        </div>

        {/* Social Logins */}
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 bg-zinc-800 border border-zinc-700 text-white py-2.5 rounded-lg hover:bg-zinc-700 transition-all">
            <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="Google" />
            <span className="text-sm font-medium">Google</span>
          </button>
          
          <button className="flex items-center justify-center gap-2 bg-zinc-800 border border-zinc-700 text-white py-2.5 rounded-lg hover:bg-zinc-700 transition-all">
            <img src="https://www.svgrepo.com/show/512317/github-142.svg" className="w-5 h-5 invert" alt="Github" />
            <span className="text-sm font-medium">GitHub</span>
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-zinc-500 text-sm mt-8">
          Don't have an account?{' '}
          <Link to="/signup" className="text-white hover:underline font-medium">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;