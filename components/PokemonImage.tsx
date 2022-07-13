import React from 'react'

export const PokemonImage = ({ url }: { url: string }) => {
  if (url === '')
    return (
      <div className='flex justify-center items-center'>
        <h1>Pokemon Not Found :/</h1>
      </div>
    )
  return (
    <div className='flex justify-center items-center grow'>
      <img src={url} alt='pokemon' className='w-2/3' />
    </div>
  )
}
