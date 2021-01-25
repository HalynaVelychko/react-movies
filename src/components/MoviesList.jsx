import { Movie } from './Movie';

function MoviesList(props) {
    const { movies = [] } = props;

    return (
        <div className='movies'>
            {movies.length ? (
                movies.map((movie) => (
                    <Movie key={movie.imdbID} {...movie} /> //спред оператором взяли всі ключі по об'єкту, щоб не прописувати кожному key={movie.key}
                ))
            ) : (
                <h4>Not found</h4>
            )}
        </div>
    );
}

export { MoviesList };
