import React from 'react'
import { Link } from 'react-router-dom';

export function home(props) {
    

    return (
       
       
       <>
         <div>
        <section className="hero-area bg-primary" id="parallax">
          <div className="container">
            <div className="row">
              <div className="col-lg-11 mx-auto">
                <h1 className="text-white font-tertiary">Hi ! We are <br />HU <br />Web Developers</h1>
              </div>
            </div>
          </div>
          <div className="layer-bg w-100">
            <img className="img-fluid w-100" src="images/illustrations/leaf-bg.png" alt="bg-shape" />
          </div>
          <div className="layer" id="l2">
            <img src="images/illustrations/dots-cyan.png" alt="bg-shape" />
          </div>
          <div className="layer" id="l3">
            <img src="images/illustrations/leaf-orange.png" alt="bg-shape" />
          </div>
          <div className="layer" id="l4">
            <img src="images/illustrations/dots-orange.png" alt="bg-shape" />
          </div>
          <div className="layer" id="l5">
            <img src="images/illustrations/leaf-yellow.png" alt="bg-shape" />
          </div>
          <div className="layer" id="l6">
            <img src="images/illustrations/leaf-cyan.png" alt="bg-shape" />
          </div>
          <div className="layer" id="l7">
            <img src="images/illustrations/dots-group-orange.png" alt="bg-shape" />
          </div>
          <div className="layer" id="l8">
            <img src="images/illustrations/leaf-pink-round.png" alt="bg-shape" />
          </div>
          <div className="layer" id="l9">
            <img src="images/illustrations/leaf-cyan-2.png" alt="bg-shape" />
          </div>
          {/* social icon */}
          <ul className="list-unstyled ml-5 mt-3 position-relative zindex-1 d-flex justify-content-center">
            <li className="mb-3 " ><a className="text-white " href="https://www.facebook.com/mian.umernadeem/"><i class="fab fa-facebook"></i></a></li>
            <li className="mb-3 ml-3"><a className="text-white" href="https://www.instagram.com/ommar._._/"><i class="fab fa-instagram"></i></a></li>
            <li className="mb-3 ml-3"><a className="text-white" href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a></li>
            <li className="mb-3 ml-3"><a className="text-white" href="https://twitter.com/Ch_Ommar"><i class="fab fa-twitter"></i></a></li>
          </ul>
          {/* /social icon */}
        </section>
        {/* /hero area */}
       
        {/* skills */}
        <div class="container">
    <div class="row">
    <div className="col-lg-10 mx-auto text-center">
              
              <div className="col-lg-12 text-center">
                <h2 className="section-title">Skills</h2>
              </div>
               
              </div>
        <div class="col-md-3 col-sm-6">
            <div class="progress blue">
                <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                <div class="progress-value">97%</div>
                
            </div>
            <br/><h1 id="te" >HTML</h1>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="progress yellow" id="kl">
                <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                <div class="progress-value">90%</div>
            </div>
           <br/> <h1 id="te" >bootstrap</h1>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="progress yellow" id="op">
                <span class="progress-left">
                    <span class="progress-bar" id="kk"></span>
                </span>
                <span class="progress-right" >
                    <span class="progress-bar" id="hu"></span>
                </span>
                <div class="progress-value">95%</div>
            </div>
           <br/> <h1  id="te" >Laravel</h1>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="progress yellow" id="jk">
                <span class="progress-left">
                    <span class="progress-bar" id="kkk"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar" id="hui"></span>
                </span>
                <div class="progress-value">80%</div>
            </div>
           <br/> <h1 id="te" >React Js</h1>
        </div>
        
    </div>
</div>
        {/* /skills */}
        {/* experience */}
        <section className="section">
          <div className="container">
            <div className="row justify-content-around">
              <div className="col-lg-12 text-center">
                <h2 className="section-title">Experience</h2>
              </div>
              <div className="col-lg-3 col-md-4 text-center">
                <img src="images/experience/icon-1.png" alt="icon" />
                <p className="mb-0">2015 - 2016</p>
                <h4>Junior front end Developers</h4>
                
              </div>
              <div className="col-lg-3 col-md-4 text-center">
                <img src="images/experience/icon-2.png" alt="icon" />
                <p className="mb-0"> 2016 - 2017</p>
                <h4>Senior Front end Developers</h4>
                
              </div>
              <div className="col-lg-3 col-md-4 text-center">
                <img src="images/experience/icon-3.png" alt="icon" />
                <p className="mb-0">2017 - Present</p>
                <h4>Senior Front &amp; Back end Developers</h4>
               
              </div>
            </div>
          </div>
        </section>
        {/* ./experience */}
        
        {/* services */}
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="section-title">Services</h2>
              </div>
              <div className="col-md-4 mb-4 mb-md-0">
                <div className="card hover-shadow shadow">
                  <div className="card-body text-center px-4 py-5">
                    <i className="ti-palette icon mb-5 d-inline-block" />
                    <h4 className="mb-4">Front end Design</h4>
                    <p className="lead">Great Interactive User friendly Design, Fully Responsive, Fully Customisable And User Friendly Web Pages And Landing Pages </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 mb-md-0">
                <div className="card active-bg-primary hover-shadow shadow">
                  <div className="card-body text-center px-4 py-5">
                    <i className="ti-vector icon mb-5 d-inline-block" />
                    <h4 className="mb-4">Back end </h4>
                    <p className="lead">E-Commerce Functionality, Admin Panels For Any Organization, Fully Functional CRUD Operations And Other Customer's Custom Functions As Well</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 mb-md-0">
                <div className="card hover-shadow shadow">
                  <div className="card-body text-center px-4 py-5">
                    <i className="ti-panel icon mb-5 d-inline-block" />
                    <h4 className="mb-4">Fixing errors and bugs</h4>
                    <p className="lead">Stuck In Between Any Project !! Share With Us We Will Provide The Best And Most Effeicient Way To Remove That Bug/Error</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /services */}
        {/* portfolio */}
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="section-title">Portfolio</h2>
              </div>
            </div>
            <div className="row shuffle-wrapper col-12">
              <div className=" col-4 shuffle-item">
                <div className="position-relative rounded hover-wrapper">
                  <img src="images/portfolio/item-5.png" alt="portfolio-image" className="img-fluid rounded w-50" />
                  <div className="hover-overlay" >
                    <div className="hover-content">
                      <a className="btn btn-light btn-sm" href="https://mrabdul6485.github.io/tindog/">view project</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-4 shuffle-item">
                <div className="position-relative rounded hover-wrapper" id="hh">
                  <img src="images/portfolio/item-3.png" alt="portfolio-image" className="img-fluid rounded w-50" />
                  <div className="hover-overlay" id="hh" >
                    <div className="hover-content" id="hh" >
                      <a className="btn btn-light btn-sm" href="https://create-f910c.web.app/">view project</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-4 shuffle-item">
                <div className="position-relative rounded hover-wrapper " id="hh">
                  <img src="images/portfolio/item-4.png" alt="portfolio-image" className="img-fluid rounded w-50" />
                  <div className="hover-overlay" id="hhk" >
                    <div className="hover-content" id="hhk">
                      <a className="btn btn-light btn-sm" href="https://umarnadeem7222.github.io/ommer/">view project</a>
                    </div>
                  </div>
                </div>
              </div>
          
             
              
            </div>
          </div>
        </section>
        {/* /portfolio */}
        {/* testimonial */}
        <section className="section bg-primary position-relative testimonial-bg-shapes">
          
          
           
        <div class="container"> 
          <div className="col-12 text-center">
                <h2 style = {{color: 'white'}} className="section-title">Testimonial</h2>
              </div>
<div class="row">
                    <div class="col-md-12" data-wow-delay="0.2s">
                        <div class="carousel slide" data-ride="carousel" id="quote-carousel">

                          
                           
                            <ol class="carousel-indicators">
                             
                                <li id="lk" data-target="#quote-carousel" data-slide-to="0" class="active"><img class="img-responsive " src="images/testimonial/3.jpg" alt="" />
                                </li>
                                <li id="lk" data-target="#quote-carousel" data-slide-to="1"><img class="img-responsive" src="images/testimonial/2.jpg" alt="" />
                                </li>
                                <li id="lk" data-target="#quote-carousel" data-slide-to="2"><img class="img-responsive" src="images/testimonial/4.jpg" alt="" />
                                </li>
                                 
                            </ol>

                           
                            <div class="carousel-inner text-center">

                                
                                <div class="item active">
                                 
                                        <div class="row">
                                            <div class="col-sm-8 col-sm-offset-2">

                                                
                                                <small id="kh" className="display-4 ">Umar Nadeem</small>

                                                <br/>
                                                <br/>
                                                <strong id="p2" > "We as a team work very effectively to provide the best possible solution to our clients. We make sure that our client has his work done as soon as possible"</strong>
                                            </div>
                                        </div>
                                   
                                </div>
                              
                                <div class="item">
                                   
                                        <div class="row">
                                            <div class="col-sm-8 col-sm-offset-2">

                                                <small id="kh"  className="display-4">Haseeb Khan</small>
                                                <br/>
                                                <br/>
                                                <strong id="p2">"We provide the most efficient way to solve any task our client tells us to do. We make sure that our client gets 100% satisfaction because its not only about their project, it is about our bond with him as well"</strong>
                                            </div>
                                        </div>
                                    
                                </div>
                              
                                <div class="item">
                                 
                                        <div class="row">
                                            <div class="col-sm-8 col-sm-offset-2">
                                            <small id="kh"  className="display-4">Abdul Rehman</small>
                                                <br/>
                                                <br/>
                                                <strong id="p2" >“We see our customers as invited guests to a party, and we are the hosts. It’s our job every day to make every important aspect of the customer experience a little bit better.”</strong>
                                               
                                            </div>
                                        </div>
                                  
                                </div>
                            </div>

                         
                        </div>
                    </div>
                </div>
</div>
         
        </section>
        {/* /testimonial */}
      
        {/* blog */}
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="section-title">Blogs</h2>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                <article className="card shadow">
                  <img className="rounded card-img-top" src="images/blog/post-3.jpg" alt="post-thumb" style={{width:"350px", height:"250px"}} />
                  <div className="card-body">
                    <h4 className="card-title"><a className="text-dark" href="blog-single.html">Rockstar Finance gave me $100 to spread some love at Christmas. This is how I spent it.</a>
                    </h4>
                    <p className="cars-text">This is a post about the Rockstar Finance Community Fund – but first of all, an update. I’ve been quiet of late, I know. I’ve been juggling parenthood, my full-time job and Christmas: fortunately, I still adore all three. But I’ve also been doing a lot of flitting, spending time in hospitals.</p>
                    <a href="https://www.miss-thrifty.co.uk/rockstar-finance-gave-me-100-to-spread-some-love-at-christmas-this-is-how-i-spent-it/" className="btn btn-xs btn-primary">Read More</a>
                  </div>
                </article>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                <article className="card shadow">
                  <img className="rounded card-img-top" src="images/blog/post-4.jpg" alt="post-thumb" style={{width:"350px", height:"250px"}} />
                  <div className="card-body">
                    <h4 className="card-title"><a className="text-dark" href="blog-single.html">The Student Money-Saving Tips I Wish I’d Known</a>
                    </h4>
                    <p className="cars-text">It’s that time of year again: the students arrive at university, the Student Finance loans hit their accounts, shiny new student bank cards hit wallets – and all that money trickles out again, like water through a sieve. University life can be expensive: those graduating from universities in England now have average debts of £44,000 each.</p>
                    <a href="https://www.miss-thrifty.co.uk/the-student-money-saving-tips-i-wish-id-known/" className="btn btn-xs btn-primary">Read More</a>
                  </div>
                </article>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                <article className="card shadow">
                  <img className="rounded card-img-top" src="images/blog/post-2.jpg" alt="post-thumb" style={{width:"350px", height:"250px"}} />
                  <div className="card-body">
                    <h4 className="card-title"><a className="text-dark" href="blog-single.html">Decorating a 1950s bedroom on a budget</a>
                    </h4>
                    <p className="cars-text">Our guest bedroom didn’t always look like this. When we moved into this house, it became clear that decorating ideas needed to come thick and fast. The guest bedroom walls had chunks out of them and were painted lilac. The thin blue carpet was threadbare in places, and stained with drips and drops of lilac paint. The faded floral curtains were mounted on a wonky, plastic curtain-pole. </p>
                    <a href="https://www.miss-thrifty.co.uk/bedroom-decorating-ideas-on-a-budget/" className="btn btn-xs btn-primary">Read More</a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        {/* /blog */}
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
      </div>
            
        </>
    )
}
export default home;