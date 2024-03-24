const API_KEY = 'a9f04411'

export async function searchMovies({ search }) {
    if (search === '') return null
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const json = await response.json()

        const movies = json.Search

        return movies?.map((movie) => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster,
        }))
    } catch (e) {
        throw new Error('No se han encontrado resultados')
    }

}