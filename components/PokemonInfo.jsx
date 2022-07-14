import { TypeImage } from './TypeImage'

const capFirstLetter = (s) => {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const PokemonInfo = ({ pokemon }) => {
  if (pokemon.name === 'undefined') return
  return (
    <div className='bg-white flex flex-col justify-center gap-8 items-center rounded'>
      <h2 className='text-black text-xl font-bold'>
        {capFirstLetter(pokemon.name)}
      </h2>
      <div className='flex flex-col justify-between items-center gap-4'>
        <ul className='flex flex-col items-center'>
          <li>
            <ul className='flex flex-col'>
              {pokemon.types.map((type) => {
                return <TypeImage key={type.type.name} type={type.type.name} />
              })}
            </ul>
          </li>
        </ul>
        <div>Height: {pokemon.height}</div>
        <div>Weight: {pokemon.weight}</div>
      </div>
    </div>
  )
}
