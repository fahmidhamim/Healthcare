import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/*--------Left Section------*/}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alts="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>We provide reliable medical information, expert advice, and access to resources that help you make informed decisions about your health and well-being. Explore our range of services, from symptom checkers and health guides to personalized care solutions, all designed to support you on your journey to a healthier life.</p>
            </div>

            {/*--------Center Section------*/}
            <div className=''>
                <p className='text-xl font-medium md-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            {/*--------Right Section------*/}
            <div>
                <p className='text-xl font-medium md-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+8801521-700961</li>
                    <li>+8801601-021199</li>
                    <li>healthcare.01@gmail.com</li>
                </ul>
            </div>
        </div>

        {/*------Copyright Text ------*/}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 18.11.2024 @ Greatstack.dev - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer