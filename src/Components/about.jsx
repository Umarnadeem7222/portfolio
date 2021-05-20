import React from 'react'

export function About(props) {
    

    return (
        <>
        <div>
        <section className="page-title-alt bg-primary position-relative">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="text-white font-tertiary">About Us</h1>
              </div>
            </div>
          </div>
          {/* background shapes */}
          <img src="images/illustrations/leaf-bg-top.png" alt="illustrations" className="bg-shape-1 w-100" />
          <img src="images/illustrations/dots-group-sm.png" alt="illustrations" className="bg-shape-2" />
          <img src="images/illustrations/leaf-yellow.png" alt="illustrations" className="bg-shape-3" />
          <img src="images/illustrations/leaf-orange.png" alt="illustrations" className="bg-shape-4" />
          <img src="images/illustrations/dots-group-cyan.png" alt="illustrations" className="bg-shape-5" />
          <img src="images/illustrations/leaf-cyan-lg.png" alt="illustrations" className="bg-shape-6" />
        </section>
        {/* /page title */}
        {/* about */}
        <section className="section pt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident.</p>
                <p>Deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia.</p>
              </div>
              <div className="col-md-4 text-center drag-lg-top">
                <div className="shadow-down mb-4">
                  <img src="images/about/3.jpg" alt="author" className="img-fluid w-100 rounded-lg border-thick border-white" />
                </div>
                
                <h4 id="u1" className="display-1" >Umar Nadeem</h4>
                <small className="text-light font-secondary " style={{fontSize:'30px',}}>Manager</small>
              </div>
            </div>
          </div>
        </section>
        {/* /about */}
        {/* Work Process */}
        <section className="section">
          <div className="container">
            <div className="row justify-content-around">
              <div className="col-lg-12 text-center">
                <h2 className="section-title">Work Process</h2>
              </div>
              <div className="col-lg-3 col-md-4 text-center hover-shadow pt-3">
                <div className>
                  <img src="images/icons/plan.png" className="mb-4" alt="icon" />
                  <h4 className="mb-4">Research and Plan</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 text-center hover-shadow pt-3">
                <img src="images/icons/design.png" className="mb-4" alt="icon" />
                <h4 className="mb-4">Design and Develop</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.</p>
              </div>
              <div className="col-lg-3 col-md-4 text-center hover-shadow pt-3">
                <img src="images/icons/print.png" className="mb-4" alt="icon" />
                <h4 className="mb-4">Deliver</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </section>
        {/* ./Work Process */}
        {/* team */}
        <section className="section bg-cover" data-background="images/backgrounds/team-bg.png">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="section-title">My Team</h2>
              </div>
              <div className="col-md-4 col-sm-6 mb-4 mb-md-0">
                <div className="card text-center">
                  <img src="images/team/3.jpg" className="card-img-top" />
                  <div className="card-body">
                    <h4 className="card-title">Umar Nadeem</h4>
                    <p className="text-light font-secondary">Full-Stack Developer</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 mb-4 mb-md-0">
                <div className="card text-center">
                  <img src="images/team/2.jpg" className="card-img-top" />
                  <div className="card-body">
                    <h4 className="card-title">Haseeb Khan</h4>
                    <p className="text-light font-secondary">Full-Stack Developer</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 mb-4 mb-md-0">
                <div className="card text-center">
                  <img src="images/testimonial/4.jpg" style={{height: "350px"}}className="card-img-top" />
                  <div className="card-body">
                    <h4 className="card-title">Abdul Rehman</h4>
                    <p className="text-light font-secondary">Wordpress </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /team */}
       
        {/* contact */}
        <section className="section section-on-footer" data-background="images/backgrounds/bg-dots.png">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="section-title">Contact Info</h2>
              </div>
              <div className="col-lg-8 mx-auto">
                <div className="bg-white rounded text-center p-5 shadow-down">
                  <h4 className="mb-80">Contact Form</h4>
                  <form action="#" className="row">
                    <div className="col-md-6">
                      <input type="text" id="name" name="name" placeholder="Full Name" className="form-control px-0 mb-4" />
                    </div>
                    <div className="col-md-6">
                      <input type="email" id="email" name="email" placeholder="Email Address" className="form-control px-0 mb-4" />
                    </div>
                    <div className="col-12">
                      <textarea name="message" id="message" className="form-control px-0 mb-4" placeholder="Type Message Here" defaultValue={""} />
                    </div>
                    <div className="col-lg-6 col-10 mx-auto">
                      <button className="btn btn-primary w-100">send</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /contact */}
      </div>
            
        </>
    )
}
