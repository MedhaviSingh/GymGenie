import React, {useState} from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'
import ReactDOM from 'react-dom';
import Signup from './signup';
import Signin from './signin';
import Mealplan from './mealplan';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
// import Signin from './signin';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
        <h1 className='text-3xl font-bold mr-4 sm:text-4xl' style={{backgroundImage: 'linear-gradient(to right, #66BB6A, #42A5F5, #7e22ce)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
  GymGenie
</h1>

          <ul className='hidden md:flex'>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li><Link to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
          <li  onClick={() => ReactDOM.render(<Mealplan/>,document.getElementById('root'))} ><a href='/meal-plan'>
    GymGenie MealPlan<span style={{color: '#10b981'}}>NEW!</span> 
  </a></li>
          <li onClick={() => ReactDOM.render(<Mealplan/>,document.getElementById('root'))} ><a href='/meal-plan'>
          MacroTracker<span style={{color: '#10b981'}}>NEW!</span> 
  </a></li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
        <button className='border-none bg-transparent text-black mr-4' onClick={() => ReactDOM.render(<Signin/>,document.getElementById('root'))}>
  Sign In
</button>

          <button className='px-8 py-3' style={{ backgroundColor: '#3b82f6', color: '#fff', borderRadius: '4px', fontSize: '16px' }}onClick={() => ReactDOM.render(<Signup />, document.getElementById('root'))}
>
  Sign Up
</button>

        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          
        </div>
      </div>
      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
          <li className='border-b-2 border-zinc-300 w-full' onClick={() => ReactDOM.render(<Mealplan/>,document.getElementById('root'))} >GymGenie MealPlan<span style={{color: '#10b981'}}>NEW!</span> </li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} smooth={true} offset={-50} duration={500}></Link>
          MacroTracker<span style={{color: '#10b981'}}>NEW!</span> </li>
        <div className='flex flex-col my-4'>
            <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
            <button className='px-8 py-3'>Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
