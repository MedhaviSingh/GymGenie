import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import React from "react";
// import handleSignInClick from './signup';
import Signin from "./signin";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import InputControl from './InputControl/InputControl';
import { auth } from "../firebase";
import styles from "./Signup.module.css";

function SignupPage() {

  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
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

<p className='text-center'>Have an account already? <a href="#" style={{ color: 'blue' }} onClick={() => ReactDOM.render(<Signin/>,document.getElementById('root'))}>Sign in</a></p>
        <div className="mb-4">
            <div>
            <InputControl
          label="First Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
            </div>

          <div>
            <InputControl
          label="Last Name"
          placeholder="Enter your name"
        />
            </div>  
          
            <div>
            <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
            </div>
          </div>
          <div className="mb-0">
          <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
        <div>
            <InputControl
          label="Confirm Password"
          placeholder="Enter password"
        />
            </div>
        
          </div>
          
          <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <a href="#" style={{ color: 'blue' }} onClick={() => ReactDOM.render(<Signin/>,document.getElementById('root'))}>Sign In</a>
          </p>
        </div>
        
      </div>
    </div>
    </div>
    
  );
}

export default SignupPage;