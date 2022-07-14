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
  const [isLoading, setIsLoading] = useState(false)
  const findPokemon = async (text) => {
    try {
      if (text === '') return alert('Enter a Pokemon!')
      setIsLoading(true)
      const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${text}`)
      const data = await req.json()
      setPokemon(data)
      setIsLoading(false)
    } catch (err) {
      alert('Pokemon not Found :(')
      setPokemon(fakemon)
      setIsLoading(false)
    }
  }

  return (
    <PokemonContext.Provider
      value={{ pokemon, setPokemon, findPokemon, isLoading, setIsLoading }}
    >
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonContext
