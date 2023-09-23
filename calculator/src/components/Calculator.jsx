import React from 'react'

function Calculator() {
  return (
    <div className='bg-gray-800 text-white w-screen h-screen flex justify-center items-center'>
        <div className='main w-64 h-auto bg-gray-900'>
            <div className="screen p-2 rounded-2xl shadow-xl border-4 border-gray-100">
                <input type='text' className='text-black w-full shadow[inset_0_2px_4px_rgba(0,0,0,0.6)] placeholder-black px-1 rounded-lg bg-gray-100 text-2xl pt-10 outline-none text-right' placeholder='0'/>
            </div>
        </div>

    </div>
  )
}

export default Calculator