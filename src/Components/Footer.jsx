export const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="text-primary mb-3">
              <i className="bi bi-camera-reels me-2"></i>
              MovieHunt
            </h5>
            <p className="text-muted">
              Your ultimate guide to discovering great films and TV shows.
            </p>
          </div>

          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="text-primary mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-white text-decoration-none hover-primary">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/movies/popular" className="text-white text-decoration-none hover-primary">
                  Popular Movies
                </a>
              </li>
              <li className="mb-2">
                <a href="/movies/top" className="text-white text-decoration-none hover-primary">
                  Top Rated
                </a>
              </li>
              <li>
                <a href="/movies/upcoming" className="text-white text-decoration-none hover-primary">
                  Upcoming
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5 className="text-primary mb-3">Connect With Us</h5>
            <div className="d-flex gap-3 mb-3">
              <a href="#" className="text-white fs-5 hover-primary">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white fs-5 hover-primary">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="text-white fs-5 hover-primary">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-white fs-5 hover-primary">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
           
           
          </div>
        </div>

        <div className="border-top pt-4 mt-4">
          <p className="text-center text-muted mb-0">
            &copy; {new Date().getFullYear()} MovieHunt, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

