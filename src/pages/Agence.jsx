import React, { useRef, useState } from 'react'
import CircularGallery from '../components/home/CircularGallery'

const Agence = () => {
  // Sample timeline data - replace with your actual data
  const [timelineItems, setTimelineItems] = useState([
    {
      id: 1,
      taskName: 'Project Initialization',
      status: 'completed',
      date: 'Jan 15, 2026'
    },
    {
      id: 2,
      taskName: 'Design Phase',
      status: 'completed',
      date: 'Jan 20, 2026'
    },
    {
      id: 3,
      taskName: 'Development Started',
      status: 'in-progress',
      date: 'Jan 25, 2026'
    },
    {
      id: 4,
      taskName: 'Testing & QA',
      status: 'pending',
      date: 'Feb 5, 2026'
    },
    {
      id: 5,
      taskName: 'Deployment',
      status: 'pending',
      date: 'Feb 15, 2026'
    }
  ]);

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-amber-500';
      case 'pending':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'pending':
        return 'Pending';
      default:
        return 'Unknown';
    }
  };

  return (
    <div>
      <div>
        <div>
          <div>
            <h1 className='border-2 border-amber-100 rounded-4xl px-5 py-20 text-[8vw] leading-[8vw] hover:text-[#916a4e] absolute top-[40%]'>
              PROJECT <br /> NAME
            </h1>
          </div>

          <div className='pl-[40%] mt-[17%]'>
            <p className='border-4 rounded-3xl px-10 py-20 border-amber-100 text-4xl hover:text-[#a69b7f]'>
              Details - <br />&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus reprehenderit excepturi hic, quibusdam dicta id ipsa aspernatur molestiae. 
              Est earum a corrupti reprehenderit totam delectus cupiditate architecto perferendis aliquid inventore quis laborum debitis atque, vel animi 
              provident non odit voluptas dolore molestiae unde sit, cumque laboriosam minus! Hic, quisquam exercitationem?
            </p>
          </div>

          <div style={{ height: '600px', position: 'relative', width: '100%', overflow: 'hidden' }}>
            <CircularGallery 
              bend={3} 
              textColor="#ffffff" 
              borderRadius={0.05} 
              scrollSpeed={2} 
              scrollEase={0.05} 
            />
          </div>
        </div>

        {/* Timeline Section */}
        <div className='w-full px-10 py-20 bg-gradient-to-b from-transparent to-amber-200'>
          <h2 className='text-5xl font-bold text-center mb-16 text-amber-900 hover:text-[#916a4e] transition-colors duration-300'>
            Project Timeline
          </h2>

          <div className='max-w-4xl mx-auto'>
            {timelineItems.map((item, index) => (
              <div key={item.id} className='relative pb-12 last:pb-0 group'>
                {/* Vertical Line */}
                {index !== timelineItems.length - 1 && (
                  <div className='absolute left-8 top-8 w-0.5 h-full bg-amber-200 group-hover:bg-amber-400 transition-colors duration-300'></div>
                )}

                {/* Timeline Item */}
                <div className='flex items-start gap-6'>
                  {/* Status Dot */}
                  <div className='relative z-10 flex-shrink-0'>
                    <div className={`w-16 h-16 rounded-full ${getStatusColor(item.status)} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      {item.status === 'completed' && (
                        <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7'></path>
                        </svg>
                      )}
                      {item.status === 'in-progress' && (
                        <div className='w-4 h-4 bg-white rounded-full animate-pulse'></div>
                      )}
                      {item.status === 'pending' && (
                        <div className='w-4 h-4 border-2 border-white rounded-full'></div>
                      )}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className='flex-1 bg-white border-2 border-amber-100 rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-amber-300 transition-all duration-300 transform hover:-translate-y-1'>
                    <div className='flex justify-between items-start mb-2'>
                      <h3 className='text-2xl font-semibold text-gray-800 group-hover:text-[#916a4e] transition-colors duration-300'>
                        {item.taskName}
                      </h3>
                      <span className={`px-4 py-1 rounded-full text-sm font-medium text-white ${getStatusColor(item.status)}`}>
                        {getStatusText(item.status)}
                      </span>
                    </div>
                    <p className='text-gray-600 text-lg'>{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agence