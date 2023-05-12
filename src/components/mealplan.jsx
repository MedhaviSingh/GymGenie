import React from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'
import ReactDOM from 'react-dom';
import Signin from './signin';
function Mealplan() {
  return (
    <div className="flex justify-center items-center h-screen">
  <div className="text-center">
    <p className="text-2xl font-bold mb-4">You're not subscribed to GymGenie Premium</p>
    <span>Click </span><a onClick={() => ReactDOM.render(<Signin/>,document.getElementById('root'))} className="text-black-500 hover:underline">here</a><span> to subscribe</span>
    
  </div>
</div>
  );
}

export default Mealplan;
