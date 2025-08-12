import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        {/* Section: Social media */}
        {/* Section: Social media */}

        {/* Section: Links  */}
        <section className="pt-3">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Doren
                </h6>
                <p></p>
              </div>
              {/* Grid column */}

              {/* Grid column */}

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 d-flex flex-column gap-3">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-2">Products</h6>
                <Link to="/" className="text-reset">
                  Angular
                </Link>
                <Link to="/" className="text-reset">
                  React
                </Link>
                <Link to="/" className="text-reset">
                  Vue
                </Link>
                <Link to="/" className="text-reset">
                  Laravel
                </Link>
              </div>

              {/* Grid column */}

              {/* Grid column */}

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 d-flex flex-column gap-3">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-2">Useful links</h6>
                <Link to="/contact" className="text-reset">
                  Contact
                </Link>
                <Link to="/contact" className="text-reset">
                  Settings
                </Link>
                <Link to="/contact" className="text-reset">
                  Orders
                </Link>
                <Link to="/contact" className="text-reset">
                  Help
                </Link>
              </div>

              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> Pune
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  dorem10023946@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> 8208636443
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
      </footer>
      {/* Footer */}
    </div>
  );
};

export default Footer;
