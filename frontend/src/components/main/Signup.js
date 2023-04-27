import { useFormik } from "formik";
import React from "react";
import Swal from "sweetalert2";
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Name is Required'),
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string().required('Password is Required'),
});

const Signup = () => {

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      // setTimeout(() => {
      console.log(values);

      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' }
      });

      console.log(res.status);

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: 'Success',
          text: 'User Registered Successfully'
        })
      }

      setSubmitting(false);

      resetForm();
      // },3000);
    },
    validationSchema: SignupSchema
  })

  return (
    <section className="vh-100" style={{ backgroundColor: "#2779e2" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-9">
            <h1 className="text-white mb-4"></h1>
            <div className="card" style={{ borderRadius: 15 }}>
              <div className="card-body">
                <div className="d-flex justify-content-center my-5">

                  <img
                    src="/logo.png"
                    alt="Generic placeholder image"
                    className=""

                    style={{ height: 60, display: "block" }}
                  />
                  <h1>Themeous</h1>
                </div>

                <form onSubmit={signupForm.handleSubmit}>
                  <div className="row align-items-center pt-4 pb-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Full name</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="name"
                        value={signupForm.values.name}
                        onChange={signupForm.handleChange}
                      />
                      <span className="text-danger fw-bold">{signupForm.errors.name}</span>
                    </div>
                  </div>
                  {/* <hr className="mx-n3" /> */}
                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Email address</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="example@example.com"
                        id="email"
                        value={signupForm.values.email}
                        onChange={signupForm.handleChange}
                      />
                      <span className="text-danger fw-bold">{signupForm.errors.email}</span>
                    </div>
                  </div>
                  {/* <hr className="mx-n3" /> */}
                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Password</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Message sent to the employer"
                        id="password"
                        value={signupForm.values.password}
                        onChange={signupForm.handleChange}
                      />
                      <span className="text-danger fw-bold">{signupForm.errors.password}</span>
                    </div>
                  </div>
                  {/* <hr className="mx-n3" /> */}

                  {/* <hr className="mx-n3" /> */}
                  <div className="px-5 py-4">
                    <button type="submit" className="btn btn-primary btn-lg" disabled={signupForm.isSubmitting} >
                      {signupForm.isSubmitting ? <span className="spinner-border spinner-border-sm"></span> : null}
                      &nbsp;&nbsp;Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;