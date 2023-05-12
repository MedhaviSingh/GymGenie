import React from 'react'
import Mealplan from './mealplan';
import ReactDOM from 'react-dom';

import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'
import Counter from "./random";
import bgImg from '../assets/cyber-bg.png'

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-white-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
            <div style={{marginBottom: '10px'}}></div>
            <h1 className='py-3 text-5xl md:text-6xl font-bold'>Get <span style={{backgroundImage: 'linear-gradient(to right, #66BB6A, #42A5F5, #7e22ce)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>fit</span> with <span style={{backgroundImage: 'linear-gradient(to right, #66BB6A, #42A5F5, #7e22ce)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>AI</span></h1>
            <div style={{marginBottom: '10px'}}></div>
                <p className='text-2xl font-bold'>Introducing GymGenie: tailored workout routines for <span style={{backgroundImage: 'linear-gradient(to right, #66BB6A, #42A5F5, #7e22ce)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>you</span></p><div style={{marginBottom: '10px'}}></div>
                <p className='text-2xl font-bold'>✨ Just Released ✨</p><div style={{marginBottom: '10px'}}></div>
                <p className='text-2xl sm:text-3xl md:text-2xl font-bold' onClick={() => ReactDOM.render(<Mealplan/>,document.getElementById('root'))} >
  <a href='/meal-plan' style={{color: '#0369A1'}}>
    GymGenie MealPlan 🥗
  </a>
</p><div style={{marginBottom: '5px'}}></div>
                <p className='text-2xl font-bold'>Supercharge your personalized workout with AI-powered meal plans tailored to your fitness goals </p><div style={{marginBottom: '10px'}}></div>
                <p className='text-2xl sm:text-3xl md:text-2xl font-bold' onClick={() => ReactDOM.render(<Mealplan/>,document.getElementById('root'))} >
  <a href='/meal-plan' style={{color: '#10b981'}}>MacroTracker ✏️ 
  </a>
</p>
                <p className='text-2xl font-bold'>Effortlessly enter your food and snacks and get an instant analysis of calories, protein, carbohydrates, and fats </p><div style={{marginBottom: '10px'}}></div>
                <Counter/><div style={{marginBottom: '10px'}}></div>
                <p className='text-1xl'>No credit card required</p>
                <button className='py-3 px-6 sm:w-[30%] my-4' style={{ background: 'linear-gradient(45deg, #8B5CF6, #A78BFA, #3B82F6)',
  color: '#fff'
}}>
  Get Started
</button>




            </div>
            <div>
                <img className='w-full' src={bgImg} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default Hero