import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 p-t-2'>
        <div className='textstructure mt-20 px-20'>
            {["I am","Abhishek ","Ware"].map((item,index)=>{
                return <div className="masker ">
                <h1 className="uppercase text-7xl leading-[5.5vw] tracking-tight font-['Founders Grotesk Condensed'] font-semibold">{item}</h1>
            </div>
            })}
            
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-32 flex justify-between py-5 px-20'>
            {["For public and private companies","from the first pitch ipo"].map((item,index)=><p className='text-md font-light tracking-tight leading-none'>{item}</p>)}
       
            <div className='start flex items-center gap-5'>
                <div className='px-4 py-2 border-[2px]  border-zinc-300 font-lighter rounded-full'>Start the project</div>
               <div className='w-10 h-10 flex item-center justify-center border-[1px]  border-zinc-500  rounded-full'>
              <span className='rotate-[45deg]'>
              <FaArrowUpLong />
              </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage