import React from 'react'
import { RiHome6Fill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    
  return (
   


 <section>

<nav>
     <div className='flex items-center justify-around bg-blue-500 text-white py-8 px-4 text-3xl'>
        <div>
            <h1><span className='text-red-500 italic'>U</span>Bank</h1>
        </div>

        <div>
        <RiHome6Fill />
        </div>
    </div>

   
   </nav>


  
 </section>
  )
}
