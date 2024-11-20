import React from 'react';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* Make the logo icon act as the home button */}
          <a className="navbar-brand" href="/">
            <img
              className="Logo"
              src="./airbnb-logo.png"
              alt="airbnb"
              width={50}
              height={50}
              style={{ cursor: 'pointer' }} // Add pointer cursor for better UX
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Adjust nav links to center */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Stays
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Experiences
                </a>
              </li>
            </ul>
            {/* Adjust the dropdown button */}
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle rounded-circle" // Make button rounded
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </button>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                <li>
                  <a className="dropdown-item" href="/">
                    Sign up
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Log in
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Gift Cards
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Airbnb your home
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Host an experience
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Help Centre
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
