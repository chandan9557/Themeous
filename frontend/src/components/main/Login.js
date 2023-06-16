import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import { useFormik } from "formik";
import * as Yup from 'yup';
import Swal from "sweetalert2";

const LoginSchema = Yup.object().shape({

  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string().required('Password is Required'),
});

const Login = () => {
  const loginForm = useFormik({
    initialValues: {
      //  name : '',
      email: '',
      password: '',
    },

    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      // setTimeout(() => {
      console.log(values);

      const res = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' }
      });

      console.log(res.status);

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: 'Success',
          text: 'User login Successfully'
        })
      } else if (res.status === 401) {
        Swal.fire({
          icon: "error",
          title: 'Error',
          text: 'Login Failed'
        })

      }

      setSubmitting(false);

      resetForm();
      // },3000);
    },
    validationSchema: LoginSchema
  })
  return (
    <div style={{backgroundImage:'url("https://static.vecteezy.com/system/resources/previews/003/484/037/original/modern-abstract-background-design-with-colorful-liquid-shapes-fluid-background-design-for-landing-page-theme-brochure-banner-cover-print-flyer-book-card-or-advertising-vector.jpg")', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
      <section className="vh-100">
        {/* <img
          src="/login.jpg"
          alt="backgraund-img"
        /> */}
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                <div className="card-body p-5 text-center">
                  <form onSubmit={loginForm.handleSubmit}>
                  
                    <h3 className="mb-5">Themeous</h3>
                    <MDBInput label='Email' type='text' id="email"
                      value={loginForm.values.email}
                      onChange={loginForm.handleChange} className='mb-3' />
                    <p></p>
                    <MDBInput label='Password' type='password' id="password"
                      value={loginForm.values.password}
                      onChange={loginForm.handleChange} className='mb-3' />


                    {/* Checkbox */}
                    <div className="form-check d-flex justify-content-start mb-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="form1Example3"
                      />
                      <label className="form-check-label" htmlFor="form1Example3">
                        {" "}
                        Remember password{" "}
                      </label>
                    </div>
                    <button className="btn btn-primary btn-lg btn-block" type="submit">
                      Login
                    </button>
                    <hr className="my-4" />
                    <button
                      className="btn btn-lg btn-block btn-primary"
                      style={{ backgroundColor: "#dd4b39" }}
                      type="submit"
                    >
                      <i className="fab fa-google me-2" /> Sign in with google
                    </button>
                    <button
                      className="btn btn-lg btn-block btn-primary mb-2"
                      style={{ backgroundColor: "#3b5998" }}
                      type="submit"
                    >
                      <i className="fab fa-facebook-f me-2" />
                      Sign in with facebook
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Login