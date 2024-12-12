import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
   

    <section>
        <div className='text-center bg-slate-200 flex flex-col gap-3 mb-5'>
        <h1 className='text-3xl font-serif'>Welcome</h1>
        <p className='text-lg font-normal text-gray-400'>Mr MATTHEW GRAY</p>

    </div>

    <div className='flex flex-col justify-center gap-5 items-center mb-10'>
    <h1>Available Balance:$100,000,000</h1>
    
    <div className='flex gap-10 list-none'>
        <li className='bg-blue-600 text-white py-3 px-4'><NavLink to="transfer">Transfer</NavLink></li>
        <li className='bg-blue-600 text-white py-3 px-4'><NavLink to="deposite">Deposite</NavLink></li>
        <li className='bg-blue-600 text-white py-3 px-4'><NavLink to="history">History</NavLink></li>

    </div>
   </div>
    </section>
  )
}
