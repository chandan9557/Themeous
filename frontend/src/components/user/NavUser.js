import React from 'react'
import { NavLink } from 'react-router-dom'
import app_config from '../../config'

const {themeColor} = app_config;

export const NavUser = () => {
  return (
    <div>
      <>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: themeColor}}>
          {/* Container wrapper */}
          <div className="container-fluid">
            {/* Toggle button */}
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>
            {/* Collapsible wrapper */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {/* Navbar brand */}
              <a className="navbar-brand mt-2 mt-lg-0" href="#">
                <img
                  src="/logo.png"
                  height={45}
                  alt="MDB Logo"
                  loading="lazy"
                />
              </a>
              {/* Left links */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="customizemui">
                    MUICustomizer
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="customizebt">
                  BootstrapCustomizer
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="customizeantd">
                  ANTDesignCustomizer
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="userProfil">
                  UserProfile
                  </NavLink>
                </li>
              </ul>
              {/* Left links */}
            </div>
            {/* Collapsible wrapper */}
            {/* Right elements */}
        
            {/* Right elements */}
          </div>
          {/* Container wrapper */}
        </nav>
        {/* Navbar */}
      </>

    </div>
  )
}