import React from 'react'
import { useFormik } from "formik";
import Swal from "sweetalert2";
import * as Yup from 'yup';
 
 const userProfileSchema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(10, 'Too Long!')
     .required('Name is Required'),
   email: Yup.string().email('Invalid email').required('Email is Required'),
   password: Yup.string().required('Password is Required'),
 });
const UserProfile = () => {
  const userProfileForm = useFormik({
    initialValues: {
        name : '',
        email : '',
        password : '',
    },

    onSubmit : async (values, {setSubmitting, resetForm}) => {
      setSubmitting(true);
      // setTimeout(() => {
        console.log(values);

        const res = await fetch('http://localhost:5000/user/add', {
          method: 'POST',
          body : JSON.stringify(values),
          headers: { 'Content-Type' : 'application/json' }
        });

        console.log(res.status);

        if(res.status === 200){
          Swal.fire({
            icon : "success",
            title : 'Success',
            text : 'User Registered Successfully'
          })
        }

        setSubmitting(false);
        
        resetForm();
      // },3000);
    },
    validationSchema : userProfileSchema
})
  return (
    <div>
        <section className="h-100 gradient-custom-2">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-9 col-xl-7">
        <div className="card">
         <form onSubmit={userProfileForm.handleSubmit}>
         
            
          <div
            className="rounded-top text-white d-flex flex-row"
            style={{ backgroundColor: "skyblue", height: 200 }}
          >
            <div
              className="ms-4 mt-5 d-flex flex-column"
              style={{ width: 150 }}
            >
              <img
                src="/ChandanPhoto.png"
                alt="Generic placeholder image"
                className="img-fluid img-thumbnail mt-4 mb-2"
                style={{ width: 150, zIndex: 1 }}
              />
              <button
                type="button"
                className="btn btn-outline-dark"
                data-mdb-ripple-color="dark"
                style={{ zIndex: 1 }}
              >
                Edit profile
              </button>
            </div>
            <div className="ms-3" style={{ marginTop: 130 }}>
              <h5 style={{color:'#000',fontWeight:'bold'}}>C.K.Sahani</h5>
              <p style={{color:'#000',fontWeight:'bold'}}>India</p>
            </div>
          </div>
          <div
            className="p-4 text-black"
            style={{ backgroundColor: "#f8f9fa" }}
          >
            <div className="d-flex justify-content-end text-center py-1">
              <div>
                <p className="mb-1 h5">253</p>
                <p className="small text-muted mb-0">Photos</p>
              </div>
              <div className="px-3">
                <p className="mb-1 h5">1026</p>
                <p className="small text-muted mb-0">Followers</p>
              </div>
              <div>
                <p className="mb-1 h5">478</p>
                <p className="small text-muted mb-0">Following</p>
              </div>
            </div>
          </div>
          <div className="card-body p-4 text-black">
            <div className="mb-5">
              <p className="lead fw-normal mb-1">About</p>
              <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                <p className="font-italic mb-1">Full Stack Developer</p>
                <p className="font-italic mb-1">Lives in India</p>
                <p className="font-italic mb-0">Photographer</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <p className="lead fw-normal mb-0">Recent photos</p>
              <p className="mb-0">
                <a href="#!" className="text-muted">
                  Show all
                </a>
              </p>
            </div>
            <div className="row g-2">
              <div className="col mb-2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                  alt="image 1"
                  className="w-100 rounded-3"
                />
              </div>
              <div className="col mb-2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                  alt="image 1"
                  className="w-100 rounded-3"
                />
              </div>
            </div>
            <div className="row g-2">
              <div className="col">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                  alt="image 1"
                  className="w-100 rounded-3"
                />
              </div>
              <div className="col">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                  alt="image 1"
                  className="w-100 rounded-3"
                />
              </div>
            </div>
          </div>
          </form> 
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default UserProfile