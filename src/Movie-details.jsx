import React from "react";
import { useParams, Link } from "react-router-dom";
export default function MovieDetails() {
  const [movie, setMovie] = React.useState({});
  const [movieSuggestions, setMovieSuggestions] = React.useState([]);
  const [display, setDisplay] = React.useState(false);
  const { id } = useParams();
  React.useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data?.data.movie));
  }, [id]);

  React.useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`)
      .then((res) => res.json())
      .then((data) => setMovieSuggestions(data?.data.movies));
  }, [id]);
  if (JSON.stringify(movie) === "{}") {
    return (
      <h1 style={{ marginTop: "10rem", color: "white", textAlign: "center" }}>
        Loading...
      </h1>
    );
  } else {
    let qualities = movie.torrents.map((torrent) => {
      return (
        <a key={torrent.url} href={torrent.url}>
          {torrent.quality}.{torrent.type}
        </a>
      );
    });
    let quality = movie.torrents.map((q) => {
      return (
        <div className="quality-container" key={q.size_bytes}>
          <img
            className="quality-image"
            src={`https://yts.mx/assets/images/website/${
              q.quality === "720p" ? "720" : "1080"
            }p-quality.svg`}
            alt={`${q.quality} logo`}
          />
          <p>{q.type.toUpperCase()}</p>
          <p className="file-size">File size</p>
          <p>{q.size}</p>
          <Link to={q.url} className="download-button green">
            Download
          </Link>
        </div>
      );
    });
    let suggestions = [];
    if (movieSuggestions.length === 0) {
    } else {
      suggestions = movieSuggestions.map((suggestion) => {
        if (suggestion.title_english === null) {
          return [];
        } else {
          return (
            <Link key={suggestion.id} to={`/movie-details/${suggestion.id}`}>
              <div className="suggested-movie-img-container">
                <img
                  src={suggestion.medium_cover_image}
                  alt={`${suggestion.title_english} cover image`}
                />
              </div>
            </Link>
          );
        }
      });
    }
    return (
      <>
        <div
          className={
            display ? `blur-background page-container` : `page-container`
          }
        >
          <div className="part1">
            <div className="main-img-container">
              <img
                src={`${movie.medium_cover_image}`}
                alt={`${movie.title_english} cover image`}
              />
            </div>
            <div className="buttons-container">
              <button className="green" onClick={() => setDisplay(true)}>
                Download
              </button>
              <button className="watch-now">Watch Now</button>
            </div>
          </div>
          <div className="part2">
            <h1>{movie.title_english}</h1>
            <h3 className="movie-year shadow">{movie.year}</h3>
            <h3 className="genres shadow">
              {movie.genres[0]}
              {movie.genres[1] ? ` / ${movie.genres[1]}` : null}
              {movie.genres[2] ? ` / ${movie.genres[2]}` : null}
              {movie.genres[3] ? ` / ${movie.genres[3]}` : null}
              {movie.genres[4] ? ` / ${movie.genres[4]}` : null}
            </h3>
            <span className="qualties">
              <i>Available in: </i>
              {qualities}
            </span>
            <div className="statistics top">
              <p className="green-heart">💚</p>
              <p style={{ marginTop: "20px", fontWeight: "700" }}>
                {movie.like_count}
              </p>
            </div>
            <div className="statistics">
              <img
                className="imdb"
                src="https://yts.mx/assets/images/website/logo-imdb.svg"
                alt="imdb logo"
              />
              <p style={{ fontWeight: "700", fontSize: "1.2rem" }}>
                {movie.rating}
                <span
                  style={{
                    fontWeight: "normal",
                    fontSize: "14px",
                    color: "#919191",
                  }}
                >
                  /10
                </span>
              </p>
            </div>
          </div>
          <div className="part3">
            {movieSuggestions[0]?.title === null ? null : (
              <p className="similar-movies">Similar Movies</p>
            )}
            <div className="similar-movie-container">{suggestions}</div>
          </div>
        </div>
        <div
          style={display ? { display: "block" } : { display: "none" }}
          className="pop-up-screen"
        >
          <p className="x-logo" onClick={() => setDisplay(false)}>
            x
          </p>
          <p className="pop-up-title">Select movie quality</p>
          <div className="download-options-conatainer">{quality}</div>
        </div>
      </>
    );
  }
}
//https://yts.mx/assets/images/website/720p-quality.svg
