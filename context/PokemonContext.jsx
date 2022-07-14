import { createContext, useState } from 'react'

const PokemonContext = createContext(undefined)

export const PokemonProvider = ({ children }) => {
  const fakemon = {
    name: 'undefined',
    sprites: { front_default: '', back_default: '' },
    types: [],
    height: '0',
    weight: '0',
  }
  const [pokemon, setPokemon] = useState(fakemon)

  const findPokemon = async (text) => {
    if (text === '') return alert('Enter a Pokemon!')
    const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${text}`)
    const data = await req.json()
    console.log(req.status)

    req.status === 200 ? setPokemon(data) : setPokemon(fakemon)
  }

  return (
    <PokemonContext.Provider value={{ pokemon, setPokemon, findPokemon }}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonContext
