import React from 'react'

const StarshipCard = ({starship}) => {
    const {name} = starship;
  return (
    <>
    <div className='bg-green-900 rounded-lg m-4 w-40 h-40 flex items-center justify-center'>
        <h1 className='text-centet text-white text-xl p-2'>{name}</h1>
    </div>
    
    </>

  )
}

export default StarshipCard