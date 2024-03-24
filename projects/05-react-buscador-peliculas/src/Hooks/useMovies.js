import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../service/movies'

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null)
  const previusSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
    if (search === previusSearch.current) return

    try {
      setLoading(true)
      setError(null)
      previusSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    } finally { //se ejecuta siempre
      setLoading(false)
    }
  }, [])

  //Se renderiza cada vez que se renderiza el componente
  // const sortedMovies = sort
  //   ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  //   : movies

  //Se renderiza ÚNICAMENTE solo cuando cambia movies o sort
  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [movies, sort])//<--- Igual que useEffect, solo se ejecuta cuando cambian las dependencias

  return { movies: sortedMovies, getMovies, loading }

}