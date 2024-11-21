import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>
        
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
           
           <img className='md:w-[400px] w-full h-full' src={assets.contact_image} alt='' />

         <div className='flex flex-col px-10 justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-blue-950'>OFFICE</p>
          <p className='text-gray-500'>Bashundhara R/A, Block-B, North South University</p>
          <li className='text-gray-500'>Mobile: +8801521700961 </li>
          <li className='text-gray-500'>+8801601-021199</li>
          <p className='text-gray-600 font-semibold text-lg'>Careers at HEALTHCARE</p>
          <p className='text-gray-500'>Learn more about our teams and job requirements</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explors Jobs</button>
         </div>
      </div>

    </div>

    
  )
}

export default Contact