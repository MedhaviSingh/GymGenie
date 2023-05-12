import React from 'react'
import { Link, animateScroll as scroll, } from 'react-scroll'
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div className='flex-1'>
                <h6 className='font-bold uppercase pt-2'>Support</h6>
                <p className='py-2'><Link to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></p>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Company</h6>
                <p className='py-2'><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></p>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Legal</h6>
                <p  className='py-1'>
                <p className='py-1'>
  <a href='https://www.privacyboard.co/company/gymgenie' rel='noopener noreferrer'>Privacy</a>
</p>
</p>
                    
                    <p className='py-1'><a href='https://gymgenie.vercel.app/terms' rel='noopener noreferrer'>Terms</a></p>
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter email..'/>
                    <button className='p-2 mb-4'>Subscribe</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2022 GymGenie. All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
        </div>
        </div>
    </div>
  )
}

export default Footer