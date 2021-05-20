import React from 'react'

export function Contact(props) {
    

    return (
        <>
         <div>
        <section className="page-title bg-primary position-relative">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h1 className="text-white font-tertiary">Contacts</h1>
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
