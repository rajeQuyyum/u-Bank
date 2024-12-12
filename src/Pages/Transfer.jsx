import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Transfer() {
  return (
   

    <div className='flex flex-col items-center py-10'>
        <h1 className='mb-5'>Transfer</h1>
        
           <div className='flex gap-10 mb-6'>
           <input className='border-b h-10' type="text" placeholder='Amount' />
           <input className='border-b' type="text" placeholder='Etransfer Email' />
           </div>
    
     <li className='bg-blue-600 list-none text-white py-3 px-4 rounded-md'><NavLink to="/failed">Send</NavLink></li>
    </div>
  )
}
