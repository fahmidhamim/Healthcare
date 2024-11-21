import React from 'react'
import { assets } from '../assets/assets'


const About = () => {
  return (

    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row items-start mt-5 gap-12 '>
        {/* ------ Left Side --------*/}
        
          <img className='w-auto h-auto' src={assets.about_image} alt="" />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-indigo-950'>

          {/* ------- Right Side ------ */}

          <p>Welcome to Healthcare, your trusted partner in medical care and wellness. At Healthcare, we believe that your health deserves the utmost attention and care, and we're here to simplify your journey toward better health.</p>
          <p>Our innovative platform is designed to streamline the process of booking appointments with expert doctors across various specialties. With an emphasis on accessibility and convenience, we connect patients with highly qualified medical professionals to ensure that you receive the best possible care, when you need it.</p>
          <b>Our vision</b>
          <p>To revolutionize healthcare by making quality medical services easily accessible to everyone, fostering healthier communities through innovation, compassion, and excellence.</p>
        </div>

      </div>
      

      <div className='text-xl my-4 pt-10'>
        <p className='text-gray-600'>WHY <span className='text-blue-950 font-semibold'>CHOOSE US</span></p>

      </div>

      <div className='grid grid-cols-auto gap-2'>
        <div className='border px-10 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-800 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Ease of Booking:</b>
          <p>Scheduling your appointments has never been simpler.</p>
        </div>
        <div className='border px-10 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-800 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Qualified Specialists:</b>
          <p>Our network includes experienced doctors from diverse medical fields.
          </p>
        </div>
        <div className='border px-10 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-800 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalized Care:</b>
          <p>We focus on understanding your unique needs for a tailored healthcare experience.</p>
        </div>
        <div className='border px-10 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-800 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Commitment to Quality:</b>
          <p>Your well-being is our top priority, and we are dedicated to providing exceptional service every step of the way.
          </p>
        </div>
        <div className='border px-10 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-800 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>User-Friendly Platform:</b>
          <p>Designed to make appointment booking quick and hassle-free, even for first-time users.</p>
        </div>
        <div className='border px-10 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-800 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Real-Time Updates: </b>
          <p>Stay informed about appointment availability and schedule changes instantly.</p>
        </div>
        <div className='border px-10 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-800 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Real-Time Chatting :</b>
          <p>Connect instantly with medical professionals for advice and guidance, anytime you need.</p>
        </div>
        <div className='border px-10 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-800 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Secure and Private:</b>
          <p>Your health information is protected with advanced security measures.
          </p>
        </div>
        <div className='border px-10 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-800 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Modern Facilities:</b>
          <p>Access to state-of-the-art medical equipment and technology.</p>
        </div>


        

      </div>





    </div>
  )
}

export default About