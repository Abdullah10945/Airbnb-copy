import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-light text-dark py-4">
      <div className="container">
        <div className="row">
          {/* Links Section */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-dark text-decoration-none">
                  Support
                </a>
              </li>
              <li>
                <a href="/" className="text-dark text-decoration-none">
                  Community
                </a>
              </li>
              <li>
                <a href="/" className="text-dark text-decoration-none">
                  Hosting
                </a>
              </li>
              <li>
                <a href="/" className="text-dark text-decoration-none">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="col-md-4 mb-3 text-center">
            <h5>Follow Us</h5>
            <div>
              <a
                href="https://facebook.com"
                className="text-dark me-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                className="text-dark me-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                className="text-dark me-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                className="text-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="col-md-4 mb-3 text-md-end text-center">
            <h5>© {new Date().getFullYear()} Airbnb Clone</h5>
            <p className="text-muted">
              All rights reserved. Designed by Abdullah Azzam.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
