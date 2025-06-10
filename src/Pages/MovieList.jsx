
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Card } from '../Components'
import { useFetch } from "../Hooks/useFetch"

export const MovieList = ({ title, apiPath }) => {
  const { data: movies } = useFetch(apiPath)

  useEffect(() => {
    document.title = title
  }, [title])

  const navigator = useNavigate()

  return (
    <main className="container py-4">
      {/* Hero section for home page */}
      {title === "Your Guide to Great Movies" && (
        <div className="hero-section bg-dark text-white p-5 rounded-3 mb-5 position-relative overflow-hidden">
          <div className="position-absolute top-0 end-0 opacity-25">
            <i className="bi bi-film fs-1 me-3 mt-2"></i>
          </div>
          <div className="position-relative">
            <h1 className="display-4 fw-bold mb-3">Welcome to <span className="text-primary">MoviesHunt</span></h1>
            <p className="lead mb-4">Discover movies you'll love with personalized suggestions, curated collections, and quick searches</p>
            <div className="d-flex gap-3">
              <button 
                className="btn btn-primary btn-lg px-4" 
                onClick={() => navigator("/movies/upcoming")}
              >
                Explore Now <i className="bi bi-arrow-right ms-2"></i>
              </button>
              <button 
                className="btn btn-outline-light btn-lg px-4" 
                onClick={() => navigator("/movies/popular")}
              >
                Popular Movies
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Page Title with decorative element */}
      <div className="d-flex align-items-center mb-4">
        <h2 className="text-danger m-0">{title}</h2>
        <span className="flex-grow-1 border-bottom border-danger mx-3"></span>
        <span className="text-muted">{movies.length} movies</span>
      </div>

      {/* Movie list cards with responsive columns and hover effects */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 g-4">
        {movies.map((movie) => (
          <div key={movie.id} className="col d-flex ">
            <Card movie={movie} className="flex-grow-1 hover-shadow w-100 " />
          </div>
        ))}
      </div>

      {/* Loading more indicator (you can connect this to your API pagination) */}
      {movies.length > 0 && (
        <div className="text-center mt-5">
          <button className="btn btn-outline-primary px-4 py-2">
            Load More <i className="bi bi-arrow-down-circle ms-2"></i>
          </button>
        </div>
      )}
    </main>
  )
}


