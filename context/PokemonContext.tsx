import { createContext, useState } from 'react'

const PokemonContext: any = createContext(undefined)

export const PokemonProvider = ({ children }: { children: any }) => {
  type Pokemon = {
    name: string
    sprites: {
      front_default: string
      back_default: string
    }
  }

  const [pokemon, setPokemon] = useState({
    name: 'test',
    sprites: { front_default: '' },
  })

  const findPokemon = async (text: string) => {
    try {
      const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${text}`)
      const data = (await req.json()) as Pokemon
      await setPokemon(data)
    } catch (err) {
      console.log(err)
      setPokemon({ name: '', sprites: { front_default: '' } })
    }
  }

  return (
    <PokemonContext.Provider value={{ pokemon, setPokemon, findPokemon }}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonContext
