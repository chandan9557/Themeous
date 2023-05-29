import React from "react";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    
    <div>
      <div data-draggable="true" className="" style={{ position: "relative" }}>
        {/**/}
        {/**/}
        <section
          draggable="false"
          className="overflow-hidden pt-0 container-fluid"
          data-v-271253ee=""
        >
          <section className="mb-10">
            {/* Background image */}
            <div
              className="p-5 text-center bg-image"
              style={{
                backgroundImage:
                  'url("https://cdn.pixabay.com/photo/2018/07/25/18/36/ecommerce-3562005_1280.jpg")',
                height: '90vh',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "rgba(0, 0, 0, 0)",
              }}
              aria-controls="#picker-editor"
            />
            {/* Background image */}
            <div className="container">
              <div
                className="card mx-4 mx-md-5 text-center shadow-5-strong"
                style={{
                  marginTop: "-200px",
                  background: "hsla(0, 0%, 100%, 0.3)",
                  backdropFilter: "blur(30px)",
                }}
              >
                <div className="card-body px-4 py-5 px-md-5">
                  <h1 className="display-3 fw-bold ls-tight mb-4">
                    <span>Customize your Frameworks Theme</span> <br />
                    <span className="" style={{color : '#8839da'}}>with no Effort</span>
                  </h1>
                  <Link
                    className="main-btn mb-2 mb-md-0 me-md-2"
                    to="/main/browse"
                    role="button"
                    aria-controls="#picker-editor"
                  >
                    Explore Frameworks & Library
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </section>
        {/**/}
      </div>
      <div
        data-draggable="true"
        className=""
        style={{ position: "relative" }}
        draggable="false"
      >
        {/**/}
        {/*
         <section 
          draggable="false"
          className="container pt-5"
          data-v-271253ee=""
        >
          <section className="mb-10 text-center">
            <h2 className="fw-bold mb-9 text-center">Why is it so great?</h2>
            <div className="row gx-lg-5">
              <div className="col-lg-4 col-md-12 mb-8 mb-lg-0">
                <div className="card shadow-2-strong h-100">
                  <div
                    className="d-flex justify-content-center"
                    style={{ marginTop: "-43px" }}
                  >
                    <div className="p-4 bg-primary rounded-circle shadow-5-strong d-inline-block">
                      <i
                        className="fas fa-cubes fa-2x text-white"
                        aria-controls="#picker-editor"
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className="fw-bold text-primary mb-3">1000</h3>
                    <h5 className="text-muted mb-3">Components</h5>
                    <p className="text-muted">
                      Laudantium totam quas cumque pariatur at doloremque hic
                      quos quia eius
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-8 mb-lg-0">
                <div className="card shadow-2-strong h-100">
                  <div
                    className="d-flex justify-content-center"
                    style={{ marginTop: "-43px" }}
                  >
                    <div className="p-4 bg-primary rounded-circle shadow-5-strong d-inline-block">
                      <i
                        className="fas fa-chart-pie fa-2x text-white"
                        aria-controls="#picker-editor"
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className="fw-bold text-primary mb-3">70%</h3>
                    <h5 className="text-muted mb-3">Growth</h5>
                    <p className="text-muted">
                      Eum nostrum fugit numquam, voluptates veniam neque
                      quibusdam ullam
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-8 mb-lg-0">
                <div className="card shadow-2-strong h-100">
                  <div
                    className="d-flex justify-content-center"
                    style={{ marginTop: "-43px" }}
                  >
                    <div className="p-4 bg-primary rounded-circle shadow-5-strong d-inline-block">
                      <i
                        className="fas fa-cogs fa-2x text-white"
                        aria-controls="#picker-editor"
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className="fw-bold text-primary mb-3">49</h3>
                    <h5 className="text-muted mb-3">Projects</h5>
                    <p className="text-muted">
                      Cupiditate enim, minus nulla dolor cumque iure eveniet
                      facere ullam
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
              </section>
        */}
      </div>
      <div data-draggable="true" className="" style={{ position: "relative" }}>
        {/**/}
        {/**/}
        <section
          draggable="false"
          className="container pt-5"
          data-v-271253ee=""
        >
          <section className="mb-1 text-center">
            <h2 className="fw-bold mb-5 text-center">Developer Select Any Framework & Library</h2>
            <div className="row gx-lg-5">
              <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                <div>
                  <div
                    className="bg-image hover-overlay ripple shadow-1-strong rounded-4 mb-4"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://vipinmishra.dev/assets/blog/customizing-bootstrap-5-sass.png"
                      className="w-100"
                      alt=""
                      aria-controls="#picker-editor"
                      style={{width:350,height:255}}
                    />
                  </div>
                  <h5 className="fw-bold">Customizing Bootstrap 5 Using SASS</h5>
                  <div className="mb-2 text-danger small">
                    
                    <span><button type="button" className="btn btn-dark btn-lg btn-block" ><Link className="deco" to="/user/customizebt">Start Now</Link></button></span>
                  </div>
                  <p className="text-muted">
                    Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                    placerat vulputate. Ut vulputate est non quam dignissim
                    elementum.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div>
                  <div
                    className="bg-image hover-overlay ripple shadow-1-strong rounded-4 mb-4"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-05-mui-button/social.png"
                      className="w-100"
                      alt=""
                      aria-controls="#picker-editor"
                      style={{width:340,height:255}}
                    />
                  </div>
                  <h5 className="fw-bold">Customizing React Js Using <br/>MUI</h5>
                  <div className="mb-2 text-primary small">
                    
                    <span><button type="button" class="btn btn-dark btn-lg btn-block"><Link className="deco" to="/user/customizemui">Start Now</Link></button></span>
                  </div>
                  <p className="text-muted">
                    Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet
                    diam orci, nec ornare metus semper sed. Integer volutpat
                    ornare erat sit amet rutrum.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div>
                  <div
                    className="bg-image hover-overlay ripple shadow-1-strong rounded-4 mb-4"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://www.specbee.com/sites/default/files/inline-images/React-theme-ant-design.jpg"
                      className="w-100"
                      alt=""
                      aria-controls="#picker-editor"
                    />
                  </div>
                  <h5 className="fw-bold">Customizing React Js Using AntDesign</h5>
                  <div className="mb-2 text-warning small">
                    
                    <span><button type="button" class="btn btn-dark btn-lg btn-block"><Link className="deco" to="/user/customizeantd">Start Now</Link></button></span>
                  </div>
                  <p className="text-muted">
                    Curabitur tristique, mi a mollis sagittis, metus felis
                    mattis arcu, non vehicula nisl dui quis diam. Mauris ut
                    risus eget massa volutpat feugiat. Donec.
                  </p>
                </div>
              </div>
             
            </div>
            <div className="container mt-3">
              <div className="row">
                <div className="col-md-5 mx-auto">
                {/* <div className="col-lg-4 mb-4 mb-lg-0"> */}
                <div>
                  <div
                    className="bg-image hover-overlay ripple shadow-1-strong rounded-4 mb-4"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://larainfo.com/storage/canvas/images/geNcEn2iBn73j4ZeeXrBfvWxdOcjrPdxn4zfCyfc.png"
                      className="w-100"
                      alt=""
                      aria-controls="#picker-editor"
                      style={{width:340,height:255}}
                    />
                  </div>
                  <h5 className="fw-bold">Customizing Tailwind CSS Using Palette</h5>
                  <div className="mb-2 text-warning small">
                    
                    <span><button type="button" class="btn btn-primary btn-lg btn-block">Start Now</button></span>
                  </div>
                  <p className="text-muted">
                    Curabitur tristique, mi a mollis sagittis, metus felis
                    mattis arcu, non vehicula nisl dui quis diam. Mauris ut
                    risus eget massa volutpat feugiat. Donec.
                  </p>
                </div>
              {/* </div> */}
                </div>
                <div className="col-md-5 d1 mx-auto">
                <div>
                  <div
                    className="bg-image hover-overlay ripple shadow-1-strong rounded-4 mb-4"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://i.ytimg.com/vi/EBnTZwr0RSs/maxresdefault.jpg"
                      className="w-100"
                      alt=""
                      aria-controls="#picker-editor"
                      style={{width:340,height:255}}
                    />
                  </div>
                  <h5 className="fw-bold">Customizing Angular Using Angular Material</h5>
                  <div className="mb-2 text-warning small">
                    
                    <span><button type="button" class="btn btn-primary btn-lg btn-block">Start Now</button></span>
                  </div>
                  <p className="text-muted">
                    Curabitur tristique, mi a mollis sagittis, metus felis
                    mattis arcu, non vehicula nisl dui quis diam. Mauris ut
                    risus eget massa volutpat feugiat. Donec.
                  </p>
                </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        {/**/}
      </div>
      <div data-draggable="true" className="" style={{ position: "relative" }}>
        {/**/}
        
        <section
          draggable="false"
          className="container pt-5"
          data-v-271253ee=""
        >
          <section className="mb-10 text-center">
            <h2 className="fw-bold mb-7 text-center">Team Member</h2>
            <div className="row gx-lg-5">
              <div className="col-lg-5 col-md-12 mb-6 mb-lg-0 mx-auto">
                <div className="card shadow-2-strong">
                  <div
                    className="bg-image hover-overlay ripple shadow-4-strong rounded mx-3"
                    data-mdb-ripple-color="light"
                    style={{ marginTop: "-15px" }}
                  >
                    <img
                      src="https://media.licdn.com/dms/image/D4D03AQHcaxvcHk6wGA/profile-displayphoto-shrink_800_800/0/1681555515959?e=1690416000&v=beta&t=8aIYga7wVAurvwBvL9072axh8_uA67L_UlvAlyTm3mA"
                      className="w-100"
                      alt=""
                      aria-controls="#picker-editor"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Chandan Kr. Sahani</h5>
                    <h6 className="text-primary mb-3">Full Stack Web Developer</h6>
                    <ul className="list-unstyled d-flex justify-content-center mb-3">
                      <li>
                        <i className="fas fa-star fa-sm text-warning" />
                      </li>
                      <li>
                        <i className="fas fa-star fa-sm text-warning" />
                      </li>
                      <li>
                        <i className="fas fa-star fa-sm text-warning" />
                      </li>
                      <li>
                        <i className="fas fa-star fa-sm text-warning" />
                      </li>
                      <li>
                        <i className="fas fa-star-half-alt fa-sm text-warning" />
                      </li>
                    </ul>
                    <p className="card-text">
                      Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                      placerat vulputate. Ut vulputate est non quam dignissim
                      elementum. Donec a ullamcorper diam.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 mb-6 mb-lg-0 mx-auto">
                <div className="card shadow-2-strong">
                  <div
                    className="bg-image hover-overlay ripple shadow-4-strong rounded mx-3"
                    data-mdb-ripple-color="light"
                    style={{ marginTop: "-15px" }}
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg"
                      className="w-100"
                      alt=""
                      aria-controls="#picker-editor"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Halley Frank</h5>
                    <h6 className="text-primary mb-3">Marketing Specialist</h6>
                    <ul className="list-unstyled d-flex justify-content-center mb-3">
                      <li>
                        <i className="fas fa-star fa-sm text-warning" />
                      </li>
                      <li>
                        <i className="fas fa-star fa-sm text-warning" />
                      </li>
                      <li>
                        <i className="fas fa-star fa-sm text-warning" />
                      </li>
                      <li>
                        <i className="fas fa-star fa-sm text-warning" />
                      </li>
                      <li>
                        <i className="fas fa-star-half-alt fa-sm text-warning" />
                      </li>
                    </ul>
                    <p className="card-text">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium accusamus voluptatum deleniti
                      atque corrupti.
                    </p>
                  </div>
                </div>
              </div>
        
            </div>
          </section>
        </section>
        
      </div>
    </div>
    
  );
};

export default Home;
