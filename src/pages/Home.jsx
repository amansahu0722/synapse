import React, { useState } from 'react'
import { User, ChevronDown } from 'lucide-react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/Home/HomeHeroText'
import HomeBottomText from '../components/Home/HomeBottomText'
import FloatingChatbot from '../components/home/FloatingChatbot'
import { Link } from 'react-router-dom';

const Home = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div>
     <div className='h-screen w-screen fixed'>
     <Video/>
     </div>
     <div className='h-screen w-screen relative flex flex-col justify-between'>
      
      {/* SynapseX Logo - Top Left */}
      <div className='absolute top-8 left-8 z-50'>
        <a href='/' className='group relative inline-block'>
          <div className='relative'>
            {/* Glow effect on hover */}
            <div className='absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500'></div>
            
            {/* Logo container */}
            <div className='relative px-6 py-3 bg-black/40 backdrop-blur-sm rounded-xl border border-gray-700/30 group-hover:border-gray-500/50 transition-all duration-500 overflow-hidden'>
              {/* Animated background shimmer */}
              <span className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000'></span>
              
              {/* Text */}
              <div className='relative'>
                <h1 className='text-3xl font-bold tracking-wide text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-500 group-hover:tracking-wider'>
                  Synapse<span className='text-blue-400'>X</span>
                </h1>
                {/* Underline animation */}
                <div className='h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mt-1'></div>
              </div>
            </div>
          </div>
        </a>
      </div>

      {/* Developers Feed - Top Center */}
      <div className='absolute top-8 left-1/2 transform -translate-x-1/2 z-50'>
        <Link 
          to="/community"
          className="group relative px-8 py-3 bg-black/60 backdrop-blur-md text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-700/50 hover:border-gray-500 overflow-hidden inline-flex items-center gap-2"
        >
          {/* Animated background */}
          <span className='absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></span>
          
          {/* Icon */}
          <svg className="relative w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          
          {/* Text */}
          <span className='relative font-semibold text-lg group-hover:tracking-wider transition-all duration-300'>
            Developers Feed
          </span>
          
          {/* Shine effect */}
          <span className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12'></span>
        </Link>
      </div>

      {/* Profile Button - Top Right */}
      <div className='absolute top-8 right-8 z-50'>
        <div className='relative'>
          <button
            onClick={toggleProfile}
            className='group relative bg-black/60 backdrop-blur-md text-white px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 flex items-center gap-3 border border-gray-700/50 hover:border-gray-500 overflow-hidden'
          >
            {/* Animated background pulse */}
            <span className='absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></span>
            
            {/* Rotating ring effect */}
            <span className='absolute inset-0 rounded-full border-2 border-gray-500/0 group-hover:border-gray-400/50 animate-spin-slow'></span>
            
            {/* User icon with animation */}
            <div className='relative w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
              <User className='w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300' />
            </div>
            
            {/* Text */}
            <span className='relative font-semibold text-lg group-hover:tracking-wider transition-all duration-300'>
              Profile
            </span>
            
            {/* Chevron icon */}
            <ChevronDown className={`relative w-5 h-5 transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : ''}`} />
            
            {/* Shine effect */}
            <span className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12'></span>
          </button>

          {/* Dropdown Menu */}
          {isProfileOpen && (
            <div className='absolute top-full right-0 mt-4 w-64 bg-black/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden animate-in slide-in-from-top-5 fade-in duration-300'>
              <div className='p-2'>
                <a
                  href='/profile'
                  className='block px-4 py-3 text-white hover:bg-gray-800/70 rounded-xl transition-all duration-300 hover:translate-x-2'
                >
                  <div className='flex items-center gap-3'>
                    <User className='w-5 h-5 text-gray-300' />
                    <span>View Profile</span>
                  </div>
                </a>
                <div className='h-px bg-gray-700/50 my-2'></div>
                <button
                  className='w-full text-left px-4 py-3 text-red-400 hover:bg-red-900/30 rounded-xl transition-all duration-300 hover:translate-x-2'
                >
                  <div className='flex items-center gap-3'>
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'></path>
                    </svg>
                    <span>Logout</span>
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <HomeHeroText/>
      <HomeBottomText/>
      <FloatingChatbot/>
     </div>

     {/* Custom animation for slow spin */}
     <style jsx>{`
       @keyframes spin-slow {
         from {
           transform: rotate(0deg);
         }
         to {
           transform: rotate(360deg);
         }
       }
       .animate-spin-slow {
         animation: spin-slow 3s linear infinite;
       }
     `}</style>
    </div>
  )
}

export default Home