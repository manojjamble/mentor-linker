import React from 'react'
import Image from 'next/image'

type Props = {}

function Card({}: Props) {
  return (
    <div className='h-96 w-80 bg-[#f7f7fb] p-10 rounded-xl shadow-lg flex flex-col justify-center items-center gap-4 border-2'>
      {/* Mentor dp */}
      <div className='rounded-full overflow-hidden border-4 border-white'>
        <Image
              src="/dp.jpg"
              alt="mentorship"
              width={150}
              height={150}
        />
      </div>
      <h1 className='text-lg font-bold'>Murtuza Kapasi</h1>
      <h1 className='text-lg font-bold bg-blue-200  rounded-xl  w-44 text-center text-blue-600 '>Web dev</h1>
      <h1>(915) 6525656</h1>
      <h1 className='text-blue-700'>MurtuzaKapasi@gmail.com</h1>
  
    </div>
  )
}

export default Card