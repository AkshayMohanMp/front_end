import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const lastsection = () => {
  return (
    // bg-gradient-to-br from-sky-400 to-sky-100
    <div className=' bg-gradient-to-b from-sky-400 to-blue-500 flex place-content-end flex-wrap w-full '>
      <div className='container mx-auto px-4 md:px-10 my-8 flex flex-col '>
        <div className=' grid grid-cols-3 mt-10 justify-items-center'>
          <div className=' self-end pb-3'>
            <NavLink className="flex justify-between mb-3 flex-wrap font-serif underline font-bold text-base text-white" to="#">ABC Hospital</NavLink>

            <NavLink className="flex justify-between flex-wrap font-serif text-sm hover:text-red-700 text-white" to="/Appontment_Booking">Get an Appointment</NavLink>
            <NavLink className="flex justify-between flex-wrap font-serif font-medium text-sm hover:text-red-700 text-white" to="/Career">Work With Us</NavLink>
            <NavLink className="flex justify-between flex-wrap font-serif font-medium text-sm text-white" to="#">FeedBack Report</NavLink>
          </div>
          <div className='  pb-3'>
            <div className="flex justify-between mb-3 font-serif flex-wrap font-bold text-base text-white" >Contact Detail:</div>

            <div className="flex justify-between flex-wrap font-serif font-medium text-sm text-white" >Place: Kannur, Kerala, India</div>
            <div className="flex justify-between flex-wrap font-serif text-sm text-white" >Contact No: 0000012213</div>
          </div>
          <div className='  pb-3 '>
            <NavLink className="flex justify-center mb-3 flex-wrap font-bold text-base hover:shadow-sm text-white" to="#">Social Media</NavLink>

            <div className='grid justify-center grid-cols-3 px-4 space-x-2'>
              <NavLink className="flex justify-items-center px- justify-between flex-wrap  hover:text-red-500 text-white" to="https://www.instagram.com">
                <FaInstagram className=' size-6'/>
              </NavLink>
              <NavLink className="flex justify-between flex-wrap hover:text-red-500 text-white" to="https://www.facebook.com">
                <FaFacebook className=' size-6'/>
              </NavLink>
              <NavLink className="flex justify-between flex-wrap hover:text-red-500 text-white" to="https://www.facebook.com">
                <FaLinkedin className=' size-6'/>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default lastsection
