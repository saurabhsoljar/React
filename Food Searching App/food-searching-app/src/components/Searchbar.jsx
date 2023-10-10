import React from 'react'

function Searchbar() {
  return (
    <div className='main flex justify-center py-10'>
        <input type='text'
        placeholder='Search your food'
        className='bg-gray-200 py-1.5 px-2 w-80 border-b-2 border-gray-400 rounded-l-lg '
        />
        <button className='bg-[#F8EFBA] px-5 py-1.5 border-t-2 border-r-2 border-b-2 border-gray-400 rounded-r-lg'>Search</button>
    </div>
  )
}

export default Searchbar