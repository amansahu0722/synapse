import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Create Account</h2>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1">Full Name</label>
            <input type="text" className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-zinc-600 outline-none" placeholder="Name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1">Mobile Number</label>
            <input type="tel" className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-zinc-600 outline-none" placeholder="Mobile No." />
          </div>
          <button className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-zinc-200 transition-colors">Sign Up</button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-zinc-800"></span></div>
          <div className="relative flex justify-center text-xs uppercase"><span className="bg-zinc-900 px-2 text-zinc-500">Or</span></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 bg-zinc-800 border border-zinc-700 text-white py-2.5 rounded-lg hover:bg-zinc-700">
            <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="Google" />
            <span className="text-sm">Google</span>
          </button>
          <button className="flex items-center justify-center gap-2 bg-zinc-800 border border-zinc-700 text-white py-2.5 rounded-lg hover:bg-zinc-700">
            <img src="https://www.svgrepo.com/show/512317/github-142.svg" className="w-5 h-5 invert" alt="Github" />
            <span className="text-sm">GitHub</span>
          </button>
        </div>

        <p className="text-center text-zinc-500 text-sm mt-8">
          Already have an account? <Link to="/login" className="text-white hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;