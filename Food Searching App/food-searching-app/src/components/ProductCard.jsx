import React from 'react'

function ProductCard() {
  return (
    <div className='main px-4  flex flex-wrap '>
            <div className='md:w-1/4 w-full p-3'>
                <div className='content bg-gray-300 p-4 rounded-xl border-2 border-gray-600'>
                    <img className='rounded-xl w-full nb-2' src="https://dummyimage.com/720x400" alt="" />
                    <h1 className='text-lg font-bold'>This is tittle</h1>
                    <h2 className='nb-3'>desc</h2>
                    <div className='flex justify-between'>
                    <button className='bg-gray-400 px-5 py-1.5 rounded-lg'>Add to card</button>
                    <button className='bg-gray-600 px-1.5 py-5 rounded-lg'>Buy Now</button>
                    </div>
                </div>
            </div>

            <div className='md:w-1/4 w-full p-3'>
                <div className='content bg-gray-300 p-4 rounded-xl border-2 border-gray-600'>
                    <img className='rounded-xl w-full nb-2' src="https://dummyimage.com/720x400" alt="" />
                    <h1 className='text-lg font-bold'>This is tittle</h1>
                    <h2 className='nb-3'>desc</h2>
                    <div className='flex justify-between'>
                    <button className='bg-gray-400 px-5 py-1.5 rounded-lg'>Add to card</button>
                    <button className='bg-gray-600 px-1.5 py-5 rounded-lg'>Buy Now</button>
                    </div>
                </div>
            </div>

            <div className='md:w-1/4 w-full p-3'>
                <div className='content bg-gray-300 p-4 rounded-xl border-2 border-gray-600'>
                    <img className='rounded-xl w-full nb-2' src="https://dummyimage.com/720x400" alt="" />
                    <h1 className='text-lg font-bold'>This is tittle</h1>
                    <h2 className='nb-3'>desc</h2>
                    <div className='flex justify-between'>
                    <button className='bg-gray-400 px-5 py-1.5 rounded-lg'>Add to card</button>
                    <button className='bg-gray-600 px-1.5 py-5 rounded-lg'>Buy Now</button>
                    </div>
                </div>
            </div>

            <div className='md:w-1/4 w-full p-3'>
                <div className='content bg-gray-300 p-4 rounded-xl border-2 border-gray-600'>
                    <img className='rounded-xl w-full nb-2' src="https://dummyimage.com/720x400" alt="" />
                    <h1 className='text-lg font-bold'>This is tittle</h1>
                    <h2 className='nb-3'>desc</h2>
                    <div className='flex justify-between'>
                    <button className='bg-gray-400 px-5 py-1.5 rounded-lg'>Add to card</button>
                    <button className='bg-gray-600 px-1.5 py-5 rounded-lg'>Buy Now</button>
                    </div>
                </div>
            </div>

            



    </div>
  )
}

export default ProductCard