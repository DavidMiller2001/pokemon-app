import React from 'react'

const capFirstLetter = (s: string) => {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const PokemonInfo = ({ pokemon }: { pokemon: any }) => {
  return (
    <div className='bg-white p-4 flex flex-col justify-center gap-16 items-center rounded'>
      <h2 className='text-black text-xl font-bold'>
        {capFirstLetter(pokemon.name)}
      </h2>
      <div>
        <ul className='flex flex-col items-center'>
          <li>
            <ul className='flex gap-4'>
              {pokemon.types.map((type: { type: { name: string } }) => {
                return <li>{capFirstLetter(type.type.name)}</li>
              })}
            </ul>
          </li>
          <li>Height: {pokemon.height}</li>
          <li>Weight: {pokemon.weight}</li>
        </ul>
      </div>
    </div>
  )
}
