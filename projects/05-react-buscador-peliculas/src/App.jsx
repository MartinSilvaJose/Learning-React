import './App.css'
import { Movies } from './componens/Movies.jsx'
import { useMovies } from './Hooks/useMovies.js'
import { useEffect, useRef, useState } from 'react'

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }
    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }
    if (search.match(/[^a-zA-Z0-9 ]/)) {
      setError('La búsqueda solo puede contener letras y números')
      return
    }

    setError(null)
  }, [search])

  return { error, updateSearch, search }
}



export function App() {
  const { movies } = useMovies()
  const { error, updateSearch, search } = useSearch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ search })
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  return (
    <>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <label>
            Introduce la película que estas buscando
            <input name='query' value={search} onChange={handleChange} type="text" placeholder='Jumper, Solo en casa, Jumanji..' />
          </label>
          {error && <p style={{ color: 'red' }} >{error}</p>}
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </>
  )
}

