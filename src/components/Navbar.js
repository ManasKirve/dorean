import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onSearchChange, onFilterChange }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeButton, setActiveButton] = useState("");
  const [navbarToggled, setNavbarToggled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
      setShowSearch(true);
    } else {
      setScrolled(false);
      setShowSearch(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    onSearchChange(query);
  };

  const handleFilterChange = (filterType) => {
    if (filterType === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setActiveButton(filterType);
    onFilterChange(filterType);
  };

  const handleNavbarToggle = () => {
    setNavbarToggled(!navbarToggled);
  };

  let containerClasses = ["container-fluid", "px-4", "fixed-navbar"];
  if (scrolled) {
    containerClasses.push("scrolled");
  }
  if (navbarToggled) {
    containerClasses.push("navbar-toggled", "text_color_navbar_scrolled","rounded-3","pb-2");
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg margin_bottom ">
        <div className={` ${containerClasses.join(" ")} pt-3`}>
          <a
            className="navbar-brand text-whites font_weigth_navbar_main custom-font-style"
            href="#"
          >
            Dorean
          </a>
          <div className="d-flex widtth_main justify-content_between">
            {showSearch && (
              <div className="searchs_in_scroll sreach_background">
                <input
                  className="search-inputs"
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                />
                <span className="screach-icons material-symbols-outlined">
                  search
                </span>
              </div>
            )}
            {scrolled && (
              <div className="scrolled-icons styling_buttons">
                <div className="d-flex justify-content-center align-items-center gap-2">
                  <button
                    className={`scrollback_icons d-flex justify-content-center align-items-center gap-1 ${
                      activeButton === "" ? "scroll_activesss" : ""
                    }`}
                    onClick={() => handleFilterChange("")}
                  >
                    <span
                      className={`material-symbols-outlined icone_sixe_backgroun  iconfill ${
                        activeButton === "" ? "activetext" : ""
                      }`}
                    >
                      home
                    </span>
                    <div
                      className={`text_icon_font ${
                        activeButton === "" ? "activetext" : ""
                      }`}
                    >
                      Home
                    </div>
                  </button>
                  <button
                    className={`scrollback_icons d-flex justify-content-center align-items-center gap-1 ${
                      activeButton === "Free" ? "scroll_activesss" : ""
                    }`}
                    onClick={() => handleFilterChange("Free")}
                  >
                    <span
                      className={`material-symbols-outlined icone_sixe_backgroun  ${
                        activeButton === "Free" ? "activetext" : ""
                      }`}
                    >
                      money_off
                    </span>
                    <div
                      className={`text_icon_font ${
                        activeButton === "Free" ? "activetext" : ""
                      }`}
                    >
                      Free
                    </div>
                  </button>
                  <button
                    className={`scrollback_icons d-flex justify-content-center align-items-center ${
                      activeButton === "Paid" ? "scroll_activesss" : ""
                    }`}
                    onClick={() => handleFilterChange("Paid")}
                  >
                    <span
                      className={`material-symbols-outlined icone_sixe_backgroun ${
                        activeButton === "Paid" ? "activetext" : ""
                      }`}
                    >
                      attach_money
                    </span>
                    <div
                      className={`text_icon_font ${
                        activeButton === "Paid" ? "activetext" : ""
                      }`}
                    >
                      Paid
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            className="navbar-toggler bg-white "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleNavbarToggle}
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-lg-0 gap_4 mb-2">
              <li className="nav-item">
                <Link
                  className="nav-link active text-whites"
                  aria-current="page"
                  to="/aboubts"
                >
                  About us
                </Link>
              </li>
              <li className="nav-item d-flex align-items-center  nav-linksss_pading gap-2 back_contuse ">
                <i className="fa-solid fa-envelope text-whitesss"></i>
                <Link className="nav-linksss  text-whitesss" to='/contact'>
                        Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
