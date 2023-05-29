import { blueGrey } from '@mui/material/colors'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-light text-center ">
              {/* Grid container */}
              <div className="container p-4">
                {/* Section: Social media */}
                <section className="mb-4">
                  {/* Facebook */}
                  <a
                    className="btn btn-primary  m-1"
                    style={{ backgroundColor: "#3b5998" }}
                    href="https://www.facebook.com/profile.php?id=100092283253010"
                    role="button"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  {/* Twitter */}
                  <a
                    className="btn btn-primary  m-1"
                    style={{ backgroundColor: "#55acee" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  {/* Google */}
                  <a
                    className="btn btn-primary m-1"
                    style={{ backgroundColor: "#dd4b39" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-google" />
                  </a>
                  {/* Instagram */}
                  <a
                    className="btn btn-primary  m-1"
                    style={{ backgroundColor: "#ac2bac" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  {/* Linkedin */}
                  <a
                    className="btn btn-primary m-1"
                    style={{ backgroundColor: "#0082ca" }}
                    href="https://www.linkedin.com/in/chandan-kumar-35a753234"
                    role="button"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  {/* Github */}
                  <a
                    className="btn btn-primary m-1"
                    style={{ backgroundColor: "#333333" }}
                    href="https://github.com/chandan9557/e-dashboard-front-end"
                    role="button"
                  >
                    <i className="fab fa-github" />
                  </a>
                </section>
                {/* Section: Social media */}
                {/* Section: Form */}
                <section className="">
                  <form action="">
                    {/*Grid row*/}
                    <div className="row d-flex justify-content-center">
                      {/*Grid column*/}
                      <div className="col-auto">
                        <p className="pt-2">
                          <strong>Sign up for our news letter</strong>
                        </p>
                      </div>
                      {/*Grid column*/}
                      {/*Grid column*/}
                      <div className="col-md-5 col-12">
                        {/* Email input */}
                        <div className="form-outline mb-4 bord">
                          <input
                            type="email"
                            id="form5Example2"
                            className="form-control"
          
                          />
                          <label className="form-label" htmlFor="form5Example2">
                            Email address
                          </label>
                        </div>
                      </div>
                      {/*Grid column*/}
                      {/*Grid column*/}
                      <div className="col-auto">
                        {/* Submit button */}
                        <button type="submit" className="btn btn-primary mb-4">
                          Subscribe
                        </button>
                      </div>
                      {/*Grid column*/}
                    </div>
                    {/*Grid row*/}
                  </form>
                </section>
                {/* Section: Form */}
                {/* Section: Text */}
              
                {/* Section: Text */}
                {/* Section: Links */}
       
                {/* Section: Links */}
              </div>
              {/* Grid container */}
              {/* Copyright */}
              <div
                className="text-center p-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
              >
                © 2023 Copyright:&nbsp;
                <a className="text-dark" href="https://bbdu.ac.in">
                  BBDU.COM
                </a>
              </div>
              {/* Copyright */}
            </footer>
    </div>
  )
}

export default Footer