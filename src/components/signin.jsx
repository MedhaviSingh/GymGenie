import React from 'react';
import ReactDOM from 'react-dom';
import Signup from './signup';


import { useState } from 'react';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (event) => {
    event.preventDefault();
    // Add your sign-in logic here
  };

  return (
    <div className='relative h-screen bg-gray-100'>
    <div className=" flex justify-center items-center h-screen w-full absolute inset-0">
    <div className="bg-white rounded-md p-8 w-[25%]">
    <h1 className='text-3xl font-bold mr-4 sm:text-4xl text-center' style={{backgroundImage: 'linear-gradient(to right, #66BB6A, #42A5F5, #7e22ce)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
  GymGenie
</h1>
      <h1 className='text-3xl font-bold mb-4 text-center my-3'>Sign In</h1>
      <p className='text-center my-5'>
        Don't have an account?{' '}
        <a href='/signup' className='text-blue-500 font-bold' onClick={() => ReactDOM.render(<Signup />, document.getElementById('root'))}>
          Sign Up
        </a>
      </p>
      
      <form className='flex flex-col' onSubmit={handleSignIn}>
      <p className='text-bold my-2'>Email</p>
        <label className='sr-only'>Email</label>
        <input
          className='border border-black p-2 rounded-lg mb-4 w-80'
          type='email'
          placeholder=''
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <p className='text-bold my-2'>Password</p>
        <label className='sr-only'>Password</label>
        <input
          className='border border-black p-2 rounded-lg mb-4'
          type='password'
          placeholder=''
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button className='bg-blue-500 text-white py-2 px-4 rounded-lg mb-4'>
          Sign In
        </button>
      </form>
      <p>
        <a href='/forgot-password' className='text-blue-500 font-bold'>
          Forgot password?
        </a>
      </p>
    </div>
    </div>
    </div>
  );
}

export default SignIn;
