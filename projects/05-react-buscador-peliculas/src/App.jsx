import './App.css'
import { Movies } from './componens/Movies.jsx'
import { useMovies } from './Hooks/useMovies.js'
import { useCallback, useEffect, useRef, useState } from 'react'
import debounce from 'just-debounce-it'

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
  const [sort, setSort] = useState(false)

  const { error, updateSearch, search } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce(search => getMovies({ search }), 300)
    , [getMovies])

  const handleSort = () => {
    setSort(!sort)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
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
          <label>
            Ordenar por título
            <input type='checkbox' name='sort' onChange={handleSort} checked={sort} />
          </label>
          {error && <p style={{ color: 'red' }} >{error}</p>}
          <button type='submit' disabled={error ? true : false}>Buscar</button>
        </form>
      </header>
      <main>
        {loading ? <p>Cargando..</p> : <Movies movies={movies} />}

      </main> 
    </>
  )
}

