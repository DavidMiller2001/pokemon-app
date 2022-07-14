import React from 'react'

export const PokemonImage = ({ url }) => {
  return (
    <div className='flex justify-center items-center grow'>
      <img src={url} alt='pokemon' className='w-2/3' />
    </div>
  )
}
