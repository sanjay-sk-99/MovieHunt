

import { NavLink, useNavigate } from "react-router-dom"

export const Header = () => {
  const navigate = useNavigate()
  
  const handleSearch = (e) => {
    e.preventDefault();
    const queryTerm = e.target.search.value;
    e.target.reset();
    return navigate(`/search?q=${queryTerm}`)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-lg" style={{ minHeight: '70px' }}>
      <div className="container-fluid px-4">
        {/* Brand Name with enhanced styling */}
        <NavLink to="/" className="navbar-brand d-flex align-items-center">
          <i className="bi bi-camera-reels-fill fs-4 me-2 text-primary"></i>
          <span className="fw-bold fs-4 gradient-text">MovieHunt</span>
        </NavLink>
        
        {/* Toggle button with better styling */}
        <button
          className="navbar-toggler border-0 py-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          {/* Navigation links with hover effects */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item mx-1">
              <NavLink 
                to="/" 
                className="nav-link px-3 py-2 rounded position-relative" 
                activeclassname="active"
              >
                <i className="bi bi-house-door me-1"></i>
                Home
                <span className="active-indicator"></span>
              </NavLink>
            </li>
            <li className="nav-item mx-1">
              <NavLink 
                to="/movies/top" 
                className="nav-link px-3 py-2 rounded position-relative" 
                activeclassname="active"
              >
                <i className="bi bi-star-fill me-1"></i>
                Top Rated
                <span className="active-indicator"></span>
              </NavLink>
            </li>
            <li className="nav-item mx-1">
              <NavLink 
                to="/movies/popular" 
                className="nav-link px-3 py-2 rounded position-relative" 
                activeclassname="active"
              >
                <i className="bi bi-fire me-1"></i>
                Popular
                <span className="active-indicator"></span>
              </NavLink>
            </li>
            <li className="nav-item mx-1">
              <NavLink 
                to="/movies/upcoming" 
                className="nav-link px-3 py-2 rounded position-relative" 
                activeclassname="active"
              >
                <i className="bi bi-calendar3 me-1"></i>
                Upcoming
                <span className="active-indicator"></span>
              </NavLink>
            </li>
          </ul>

          {/* Search Form with enhanced styling */}
          <form onSubmit={handleSearch} className="d-flex ms-lg-3" role="search">
            <div className="input-group search-box">
              <input
                type="search"
                className="form-control border-end-0 rounded-pill-start ps-3 py-2"
                placeholder="Search movies..."
                name="search"
                aria-label="Search movies"
              />
              <button 
                className="btn btn-primary rounded-pill-end px-3" 
                type="submit"
              >
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  )
}
