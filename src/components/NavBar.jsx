import React from "react";

const NavBar = (props) => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/home">TourMa</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/bandmembers">Band Members</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/setlists">Setlists</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/venues">Venues</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;