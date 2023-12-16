import React from "react";
import { Link } from "react-router-dom";
export default function Home({ page }) {
  const [movies, setMovies] = React.useState([]);
  React.useEffect(() => {
    fetch(`https://yts.mx/api/v2/list_movies.json?page=${page}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.data.movies));
  }, [page]);
  if (movies.length > 0) {
    return (
      <div className="container"> 
        {movies.map((movie) => {
          return (
            <Link
              style={{ textDecoration: "none", color: "#fff" }}
              to={`/movie-details/${movie.id}`}
              key={movie.id}
            >
              <div className="movie-container">
                <div className="img-container">
                  <img
                    src={movie.medium_cover_image}
                    alt={`${movie.title_english} cover image`}
                  />
                </div>
                <p>
                  <span className="lang">
                    {movie.language === "en" ? null : `[${movie.language}] `}
                  </span>
                  {movie.title_english.length > 16
                    ? movie.title_english.slice(0, 16) + " ..."
                    : movie.title_english}
                </p>
                <p className="year">{movie.year}</p>
              </div>
            </Link>
          );
        })}
      </div>
    )
  } else {
    return <h1 style={{marginTop: "5rem", color: "white", textAlign: "center"}}>Loading...</h1>;
  }
}
/*<div className="movie-hover">
  <h1>⭐</h1>
  <h2>{movie.rating}/10</h2>
  <h2>{movie.genres[0]}</h2>
  {movie.genres[1] ? <h2>{movie.genres[1]}</h2> : null}
  <button>View Details</button>
</div>*/