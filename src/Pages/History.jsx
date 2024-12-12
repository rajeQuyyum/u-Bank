import React from 'react'
import { IoArrowForwardOutline } from "react-icons/io5";

export default function History() {
  return (
    

    <section className='text-center py-8 bg-slate-200'>
        <h1 className='mb-10'>Transaction history</h1>

        <div className='mb-5'>
            <input className='w-[250px] h-10 border-2 pl-2 border-gray-500' type="text" placeholder='Search'/>
            
        </div>
            

        <div className='bg-white w-[300px] block m-auto'> 
        <p className='mb-3'>11 December 2024</p>

        <div className='flex items-center gap-3  w-[300px]'>
        <IoArrowForwardOutline className='text-5xl bg-blue-400 rounded-full' />
        <div className='flex flex-col gap-1'>
            <h1>Credited-------- <span className='text-green-600'>+$100,000,000</span></h1>
            <p className='pr-[170px]'>Transfer</p>
        </div>
        </div>
        </div>

    </section>
  )
}
