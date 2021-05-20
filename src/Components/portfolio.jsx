import React from 'react'

export function Portfolio(props) {
    

    return (
        <>
        <div>
        {/* page title */}
        <section className="page-title bg-primary position-relative">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h1 className="text-white font-tertiary">Portfolio</h1>
              </div>
            </div>
          </div>
          {/* background shapes */}
          <img src="images/illustrations/page-title.png" alt="illustrations" className="bg-shape-1 w-100" />
          <img src="images/illustrations/leaf-pink-round.png" alt="illustrations" className="bg-shape-2" />
          <img src="images/illustrations/dots-cyan.png" alt="illustrations" className="bg-shape-3" />
          <img src="images/illustrations/leaf-orange.png" alt="illustrations" className="bg-shape-4" />
          <img src="images/illustrations/leaf-yellow.png" alt="illustrations" className="bg-shape-5" />
          <img src="images/illustrations/dots-group-cyan.png" alt="illustrations" className="bg-shape-6" />
          <img src="images/illustrations/leaf-cyan-lg.png" alt="illustrations" className="bg-shape-7" />
        </section>
        {/* /page title */}
        {/* portfolio */}
        <section className="section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12">
                <div className="btn-group btn-group-toggle justify-content-center d-flex" data-toggle="buttons">
                  <label className="btn btn-sm btn-primary active">
                    <input type="radio" name="shuffle-filter" defaultValue="all" defaultChecked="checked" />All
                  </label>
                  <label className="btn btn-sm btn-primary">
                    <input type="radio" name="shuffle-filter" defaultValue="design" />UI/UX Design
                  </label>
                  <label className="btn btn-sm btn-primary">
                    <input type="radio" name="shuffle-filter" defaultValue="branding" />BRANDING
                  </label>
                  <label className="btn btn-sm btn-primary">
                    <input type="radio" name="shuffle-filter" defaultValue="illustration" />ILLUSTRATION
                  </label>
                </div>
              </div>
            </div>
            <div className="row shuffle-wrapper">
              <div className="col-lg-4 col-6 mb-4 shuffle-item" data-groups="[&quot;design&quot;,&quot;illustration&quot;]">
                <div className="position-relative rounded hover-wrapper">
                  <img src="images/portfolio/item-1.png" alt="portfolio-image" className="img-fluid rounded w-100 d-block" />
                  <div className="hover-overlay">
                    <div className="hover-content">
                      <a className="btn btn-light btn-sm" href="project-single.html">view project</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-6 mb-4 shuffle-item" data-groups="[&quot;branding&quot;]">
                <div className="position-relative rounded hover-wrapper">
                  <img src="images/portfolio/item-2.png" alt="portfolio-image" className="img-fluid rounded w-100 d-block" />
                  <div className="hover-overlay">
                    <div className="hover-content">
                      <a className="btn btn-light btn-sm" href="project-single.html">view project</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-6 mb-4 shuffle-item" data-groups="[&quot;illustration&quot;]">
                <div className="position-relative rounded hover-wrapper">
                  <img src="images/portfolio/item-3.png" alt="portfolio-image" className="img-fluid rounded w-100 d-block" />
                  <div className="hover-overlay">
                    <div className="hover-content">
                      <a className="btn btn-light btn-sm" href="project-single.html">view project</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-6 mb-4 shuffle-item" data-groups="[&quot;design&quot;,&quot;branding&quot;]">
                <div className="position-relative rounded hover-wrapper">
                  <img src="images/portfolio/item-6.png" alt="portfolio-image" className="img-fluid rounded w-100 d-block" />
                  <div className="hover-overlay">
                    <div className="hover-content">
                      <a className="btn btn-light btn-sm" href="project-single.html">view project</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-6 mb-4 shuffle-item" data-groups="[&quot;illustration&quot;]">
                <div className="position-relative rounded hover-wrapper">
                  <img src="images/portfolio/item-8.png" alt="portfolio-image" className="img-fluid rounded w-100 d-block" />
                  <div className="hover-overlay">
                    <div className="hover-content">
                      <a className="btn btn-light btn-sm" href="project-single.html">view project</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-6 mb-4 shuffle-item" data-groups="[&quot;design&quot;]">
                <div className="position-relative rounded hover-wrapper">
                  <img src="images/portfolio/item-5.png" alt="portfolio-image" className="img-fluid rounded w-100 d-block" />
                  <div className="hover-overlay">
                    <div className="hover-content">
                      <a className="btn btn-light btn-sm" href="project-single.html">view project</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-6 mb-4 shuffle-item" data-groups="[&quot;branding&quot;]">
                <div className="position-relative rounded hover-wrapper">
                  <img src="images/portfolio/item-1.png" alt="portfolio-image" className="img-fluid rounded w-100 d-block" />
                  <div className="hover-overlay">
                    <div className="hover-content">
                      <a className="btn btn-light btn-sm" href="project-single.html">view project</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-6 mb-4 shuffle-item" data-groups="[&quot;design&quot;,&quot;illustration&quot;,&quot;branding&quot;]">
                <div className="position-relative rounded hover-wrapper">
                  <img src="images/portfolio/item-3.png" alt="portfolio-image" className="img-fluid rounded w-100 d-block" />
                  <div className="hover-overlay">
                    <div className="hover-content">
                      <a className="btn btn-light btn-sm" href="project-single.html">view project</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-6 mb-4 shuffle-item illustration" data-groups="[&quot;illustration&quot;]">
                <div className="position-relative rounded hover-wrapper">
                  <img src="images/portfolio/item-7.png" alt="portfolio-image" className="img-fluid rounded w-100 d-block" />
                  <div className="hover-overlay">
                    <div className="hover-content">
                      <a className="btn btn-light btn-sm" href="project-single.html">view project</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /portfolio */}
        {/* clients */}
        <section className="section bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="section-title">My Clients</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="client-logo-slider d-flex align-items-center">
                  <a href="#" className="text-center d-block outline-0 p-4"><img className="d-unset img-fluid" src="images/clients-logo/client-logo-1.png" alt="client-logo" /></a>
                  <a href="#" className="text-center d-block outline-0 p-4"><img className="d-unset img-fluid" src="images/clients-logo/client-logo-2.png" alt="client-logo" /></a>
                  <a href="#" className="text-center d-block outline-0 p-4"><img className="d-unset img-fluid" src="images/clients-logo/client-logo-3.png" alt="client-logo" /></a>
                  <a href="#" className="text-center d-block outline-0 p-4"><img className="d-unset img-fluid" src="images/clients-logo/client-logo-4.png" alt="client-logo" /></a>
                  <a href="#" className="text-center d-block outline-0 p-4"><img className="d-unset img-fluid" src="images/clients-logo/client-logo-5.png" alt="client-logo" /></a>
                  <a href="#" className="text-center d-block outline-0 p-4"><img className="d-unset img-fluid" src="images/clients-logo/client-logo-1.png" alt="client-logo" /></a>
                  <a href="#" className="text-center d-block outline-0 p-4"><img className="d-unset img-fluid" src="images/clients-logo/client-logo-2.png" alt="client-logo" /></a>
                  <a href="#" className="text-center d-block outline-0 p-4"><img className="d-unset img-fluid" src="images/clients-logo/client-logo-3.png" alt="client-logo" /></a>
                  <a href="#" className="text-center d-block outline-0 p-4"><img className="d-unset img-fluid" src="images/clients-logo/client-logo-4.png" alt="client-logo" /></a>
                  <a href="#" className="text-center d-block outline-0 p-4"><img className="d-unset img-fluid" src="images/clients-logo/client-logo-5.png" alt="client-logo" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /clients */}
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
