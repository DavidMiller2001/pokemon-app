import '../styles/globals.css'
import { PokemonProvider } from '../context/PokemonContext'

function MyApp({ Component, pageProps }) {
  return (
    <PokemonProvider>
      <Component {...pageProps} />
    </PokemonProvider>
  )
}

export default MyApp
