"use client"
import React, { useState } from 'react'

import PopUpForm from '../AllCourses/PopUpForm'

const LetsConnect = () => {
  const [isOpen , setIsOpen] = useState(false);

  return (
    <>
      <div className='w-full flex items-center justify-center py-6 '
       style={{ backgroundImage: "url('/images/Blog/letsConnect.png')"
        , backgroundPosition: "center center"} }>

      <button onClick={()=>setIsOpen(true)} className='text-xl py-3 px-5 bg-yellow-500 hover:bg-yellow-600 font-bold text-white rounded-2xl cursor-pointer'>
        Let's Connect
      </button>

      </div>
      <PopUpForm isOpen={isOpen} onCancel={()=>setIsOpen(false)} onConfirm={()=>setIsOpen(false)} />
    </>
   
  )
}

export default LetsConnect