import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import React from "react";
// import handleSignInClick from './signup';
import Signin from "./signin";
import { useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../context/AuthContext"

function SignupPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {dispatch} = useContext(AuthContext)
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        dispatch({type:"LOGIN", payload:user})
      })
      .catch((error) => {
        'this is error';
      });
  };

  return (
    <div className='relative h-screen bg-gray-100'>
    <div className=" flex justify-center items-center h-screen w-full absolute inset-0 " >
      <div className="bg-white rounded-md p-8 w-[25%]">
      <h1 className='text-3xl font-bold mr-4 sm:text-4xl text-center ' style={{backgroundImage: 'linear-gradient(to right, #66BB6A, #42A5F5, #7e22ce)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
  GymGenie
</h1>
        <h2 className="text-3xl font-bold mb-8 text-center my-3">Sign up for an account</h2>
        <form onSubmit={handleSubmit}>
        <p className='text-center'>Have an account already? <a href="#" style={{ color: 'blue' }} onClick={() => ReactDOM.render(<Signin/>,document.getElementById('root'))}>Sign in</a></p>
        <div className="mb-4">
            <div>
              <label htmlFor="firstName" className="block font-medium text-gray-700 mb-2">First Name</label>
              <input type="text" id="firstName" className="border border-black rounded-md px-4 py-2 w-full" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
              <label htmlFor="lastName" className="block font-medium text-gray-700 mb-2">Last Name</label>
              <input type="text" id="lastName" className="border border-black rounded-md px-4 py-2 w-full" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium text-gray-700 mb-2">Email</label>
            <input type="email" id="email" className="border border-black rounded-md px-4 py-2 w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium text-gray-700 mb-2">Password</label>
            <input type="password" id="password" className="border border-black rounded-md px-4 py-2 w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block font-medium text-gray-700 mb-2">Confirm Password</label>
            <input type="password" id="confirmPassword" className="border  border-black rounded-md px-4 py-2 w-full" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Sign Up</button>
          <p>By signing up you agree to our <a href="https://www.privacyboard.co/company/gymgenie" style={{ textDecoration: 'underline' }}>privacy policy</a></p>
        </form>
      </div>
    </div>
    </div>
  );
}

export default SignupPage;
