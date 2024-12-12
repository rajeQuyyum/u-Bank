import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Deposite() {
  return (
    <div className='flex flex-col items-center py-10'>
        <h1 className='mb-5'>Deposite</h1>
        
           <div className='flex flex-col gap-5 mb-6'>
           <input className='border-b h-10' type="text" placeholder='Bank Name' />
           <input className='border-b h-10' type="text" placeholder='Amount' />
           <input className='border-b h-10' type="text" placeholder='Etransfer Email' />
           <input className='border-b h-10' type="text" placeholder='Account No' />
           <input className='border-b h-10' type="text" placeholder='Transit No' />
           <input className='border-b h-10' type="text" placeholder='Institution No' />
           
           </div>
    
           <li className='bg-blue-600 list-none text-white py-3 px-4 rounded-md'><NavLink to="/failed">Send</NavLink></li>
    </div>
  )
}
