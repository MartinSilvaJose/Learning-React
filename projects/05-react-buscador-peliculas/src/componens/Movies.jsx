// eslint-disable-next-line react/prop-types
function ListOfMovies({ movies }) {
    return (
        <ul className='movies'>
            {/* eslint-disable-next-line react/prop-types */}
            {movies.map((movie) => (
                <li key={movie.id}>
                    <h2>{movie.title}</h2>
                    <p>{movie.year}</p>
                    <img src={movie.poster} alt={movie.title} />
                </li>
            ))}
        </ul>
    )
}

function NoMoviesResults() {
    return (
        <p>No se han encontrado resultados</p>
    )
}



// eslint-disable-next-line react/prop-types
export function Movies({ movies }) {
    // eslint-disable-next-line react/prop-types
    const hasMovies = movies?.length > 0

    return (
        <>
            {hasMovies ?
                <ListOfMovies movies={movies} /> :
                <NoMoviesResults />}
        </>
    )
}