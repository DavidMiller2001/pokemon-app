import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useContext } from 'react'
import { PokemonImage } from '../components/PokemonImage'
import { PokemonInfo } from '../components/PokemonInfo'
import PokemonContext from '../context/PokemonContext'
import { FaSearch } from 'react-icons/fa'

const Home: NextPage = () => {
  const [text, setText] = useState('')

  const { pokemon, setPokemon, findPokemon } = useContext(PokemonContext)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (text === '') {
      window.alert('Please enter a valid pokemon!')
    }
    await findPokemon(text)
  }

  const handleTextChange = (e: any) => {
    setText(e.target.value)
  }

  return (
    <div>
      <Head>
        <title>Pokémon Finder</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='w-screen h-screen bg-slate-800 flex flex-col justify-center items-center gap-16'>
        <h1 className='text-center text-5xl text-white'>Pokémon Finder</h1>
        <form onSubmit={handleSubmit} className='w-2/3 flex flex-col gap-4'>
          <div className='flex'>
            <input
              type='text'
              onChange={handleTextChange}
              placeholder='find pokémon'
              className='bg-white w-full p-4 '
            />
            <button
              type='submit'
              className='rounded rounded-l-none bg-pink-300 px-4'
            >
              <FaSearch size={20} />
            </button>
          </div>
          <div className='h-64 w-full bg-white flex flex-col justify-center items-center rounded'>
            <div className='grid grid-cols-2 w-full h-full'>
              <div className='flex gap-4 justify-center items-center'>
                <PokemonImage url={pokemon.sprites.front_default} />
                <PokemonImage url={pokemon.sprites.back_default} />
              </div>
              <PokemonInfo pokemon={pokemon} />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Home
