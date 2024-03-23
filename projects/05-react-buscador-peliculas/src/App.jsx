import './App.css'
import { Movies } from './componens/Movies.jsx'
import { useMovies } from './Hooks/useMovies.js'

export function App() {
  const { movies } = useMovies()

  return (
    <>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form'>
          <label>
            Introduce la película que estas buscando
            <input type="text" placeholder='Jumper, Solo en casa, Jumanji..' />
          </label>
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </>
  )
}

