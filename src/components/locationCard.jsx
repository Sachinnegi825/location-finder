import React from 'react'

const LocationCard = ({state,latitude,longitude,place}) => {
  return (
    <div className='  p-10 rounded-lg shadow-xl uppercase tracking-widest text-center w-72 cursor-pointer bg-white m-5 mt-20 hover:scale-125 transition-all ease-in-out duration-300'>
         <h1 className='text-3xl p-2 underline'>{state}</h1>
         <h1 className='p-2'>{place}</h1>
         <h2 className='p-2'>LAT: {latitude}</h2>
         <h2 className='p-2'>LONG: {longitude}</h2>
         
         
    </div>
  )
}

export default LocationCard