import React from 'react'
import { PokemonImage } from './PokemonImage'

export const ImageContainer = (frontUrl: any, backUrl: any) => {
  if (frontUrl === '' || backUrl === '') return <h1>Pokemon not Found :/</h1>
  return (
    <div className='flex gap-4 justify-center items-center'>
      <PokemonImage url={frontUrl} />
      <PokemonImage url={backUrl} />
    </div>
  )
}
