import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import backup from '../assets/backup.jpg'
import { convertMinutes } from '../Utils/utils'

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams()

  const key = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;

    async function fetchMovies() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const jsonData = await response.json();
        setMovie(jsonData || []);

      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
      return { loading, error }
    }

    fetchMovies();

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    document.title = `${movie.title}`
  }, [movie.title])

  const image = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : backup;
  const { title, overview, vote_average, vote_count, runtime, revenue, budget, release_date, genres } = movie

  // Format currency values
  const formatCurrency = (amount) => {
    return amount ? new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount) : 'N/A';
  };

  return (
    <main className="container py-4">
      {/* Movie Header */}
      <div className="d-flex flex-column flex-md-row align-items-start justify-content-center align-items-md-center mb-4 gap-3">
        <h1 className="text-primary m-0 display-5">{title}</h1>
        <div className="d-flex align-items-center bg-light px-3 py-2 rounded-pill shadow-sm">
          <i className="bi bi-star-fill text-warning me-2"></i>
          <span className="fw-bold me-2">{vote_average?.toFixed(1)}</span>
          <span className="text-muted me-2">|</span>
          <i className="bi bi-people-fill text-primary me-2"></i>
          <span>{vote_count?.toLocaleString()}</span>
        </div>
      </div>

      {/* Movie Content */}
      <div className="row g-4">
        {/* Poster Column */}
        <div className="col-md-4">
          <div className="position-relative shadow-lg rounded-3 overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="img-fluid w-100"
              style={{ minHeight: '400px', objectFit: 'cover' }}
            />
            {genres?.length > 0 && (
              <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-dark bg-opacity-75">
                <div className="d-flex flex-wrap gap-3 justify-content-center">
                  {genres.map((genre) => (
                    <span key={genre.id} className="badge bg-primary">
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Details Column */}
        <div className="col-md-8">
          {/* Overview Section */}
          <div className="mb-4 p-3 bg-light rounded-3 shadow-sm">
            <h3 className="text-primary mb-3">Overview</h3>
            <p className="lead mb-0">{overview}</p>
          </div>

          {/* Stats Section */}
          <div className="bg-light rounded-3 shadow-sm p-3 mb-4">
            <div className="row">
              <div className="col-md-6">
                <table className="table table-borderless mb-3 mb-md-0">
                  <tbody>
                    <tr>
                      <th className="text-nowrap"><i className="bi bi-clock me-2"></i>Runtime</th>
                      <td className="text-end fw-bold">{convertMinutes(runtime)}</td>
                    </tr>
                    <tr>
                      <th className="text-nowrap"><i className="bi bi-calendar me-2"></i>Release Date</th>
                      <td className="text-end fw-bold">
                        {release_date ? new Date(release_date).toLocaleDateString() : 'N/A'}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-6">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <th className="text-nowrap"><i className="bi bi-cash me-2"></i>Budget</th>
                      <td className="text-end fw-bold">{formatCurrency(budget)}</td>
                    </tr>
                    <tr>
                      <th className="text-nowrap"><i className="bi bi-graph-up me-2"></i>Revenue</th>
                      <td className="text-end fw-bold">{formatCurrency(revenue)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="d-flex gap-3">
            <a 
              className="btn btn-warning px-4" 
              target="_blank" 
              rel="noopener noreferrer"
              href={`https://www.imdb.com/title/${movie.imdb_id}/`}
            >
              <i className="bi bi-film me-2"></i>
              View on IMDB
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}