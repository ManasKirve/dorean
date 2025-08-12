import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactUsNavbar = () => {
  const [navbarToggled, setNavbarToggled] = useState(false);

  const handleNavbarToggle = () => {
    setNavbarToggled(!navbarToggled);
  };

  let containerClasses = ["container-fluid", "pt-2"];
  if (navbarToggled) {
    containerClasses.push("navbar-toggled", "text_color_navbar_scrolled","rounded-3","pb-2","mx-2");
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className={containerClasses.join(" ")}>
          <Link
            className="navbar-brand text-whites font_weigth_navbar_main custom-font-style"
            to="/"
          >
            Dorean
          </Link>
          <div className="d-flex widtth_main justify-content-between"></div>

          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleNavbarToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-lg-0 gap_4">
              <li className="nav-item">
                <Link
                  className="nav-link active text-whites"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-whites"
                  aria-current="page"
                  to="/aboubts"
                >
                  About us
                </Link>
              </li>
              <li className="nav-item d-flex align-items-center nav-linksss_pading gap-2 back_contuse">
                <i className="fa-solid fa-envelope text-whitesss"></i>
                <Link className="nav-linksss text-whitesss" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default ContactUsNavbar;
