import { createContext, useState } from 'react'

const PokemonContext = createContext(undefined)

export const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState({
    name: 'test',
    sprites: { front_default: '', back_default: '' },
    types: [],
    height: '0',
    weight: '0',
  })

  const findPokemon = async (text) => {
    try {
      const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${text}`)
      const data = await req.json()
      await setPokemon(data)
    } catch (err) {
      console.log(err)
      setPokemon({
        name: '',
        sprites: { front_default: '', back_default: '' },
        types: [],
        height: '0',
        weight: '0',
      })
    }
  }

  return (
    <PokemonContext.Provider value={{ pokemon, setPokemon, findPokemon }}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonContext
