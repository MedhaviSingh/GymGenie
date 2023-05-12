import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Trusted by developers across the world</h2>
                <p className='text-3xl py-6 text-gray-500'>GymGenie has helped people in USA, India, Canada, UAE, and 80 more countries</p>
            </div>

            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'style={{backgroundImage: 'linear-gradient(to right,#42A5F5, #7e22ce)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>100%</p>
                    <p className='text-gray-400 mt-2'>Completion</p>
                </div>
                <div  className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'style={{backgroundImage: 'linear-gradient(to right,#42A5F5, #7e22ce)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>24/7</p>
                    <p className='text-gray-400 mt-2'>Delivery</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600' style={{backgroundImage: 'linear-gradient(to right,#42A5F5, #7e22ce)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>100K</p>
                    <p className='text-gray-400 mt-2'>Workout routines generated</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About