import { Link } from 'react-router-dom'
import backup from '../assets/backup.jpg'

export const Card = ({ movie, className = '' }) => {
  const { poster_path, id, overview, title, vote_average, vote_count, release_date } = movie
  const image = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : backup;
  const releaseYear = release_date ? new Date(release_date).getFullYear() : 'N/A';

  return (
    <div className={`col ${className} `}>
      <div className="card h-100 shadow-sm overflow-hidden hover-effect">
        {/* Image with overlay for rating */}
        <div className="position-relative">
          <img 
            src={image} 
            alt={title} 
            className="card-img-top object-fit-cover" 
            style={{ height: '300px' }}
            loading="lazy"
          />
          <div className="position-absolute top-0 end-0 bg-dark bg-opacity-75 text-white p-2 rounded-bl">
            <i className="bi bi-star-fill text-warning me-1"></i>
            <span>{vote_average.toFixed(1)}</span>
          </div>
        </div>

        <div className="card-body d-flex flex-column">
          <div className="mb-2">
            <h5 className="card-title text-primary mb-1 text-truncate" title={title}>
              {title}
            </h5>
            <div className="d-flex justify-content-between text-muted small mb-2">
              <span>{releaseYear}</span>
              <span>
                <i className="bi bi-people-fill me-1 text-warning"></i>
                {vote_count.toLocaleString()}
              </span>
            </div>
          </div>
          
          <p className="card-text flex-grow-1 text-truncate-multiline" style={{ '--lines': 3 }}>
            {overview || 'No description available.'}
          </p>
          
          <div className="mt-3 pt-2 border-top">
            <Link 
              to={`/movie/${id}`} 
              className="btn btn-sm btn-primary stretched-link d-flex align-items-center justify-content-between"
            >
              View Details
              <i className="bi bi-chevron-right ms-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


