import React from "react";
import { Helmet } from "react-helmet";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import $ from "jquery";
const s1 = require("./../assets/images/s1.png");
const s4 = require("./../assets/images/s4.png");
const s6 = require("./../assets/images/s6.png");

const Services = () => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossorigin="anonymous"
        ></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=myMap"></script>
      </Helmet>

      <section className="service_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center ">
            <h2 className="">Our Services</h2>
            <p className="col-lg-8 px-0">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything believable. If you are going to use a
              passage of Lorem Ipsum, you need to be sure there isn't anything
            </p>
          </div>
          <div className="service_container">
            {/* <div className="carousel-wrap ">
              <div className="service_owl-carousel owl-carousel">
                <div className="item">
                  <div className="box ">
                    <div className="img-box">
                      <img src={s1} alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Home Welding</h5>
                      <p>
                        when looking at its layout. The point of using Lorem
                        Ipsum is that it has a more-or-less normal
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box ">
                    <div className="img-box">
                      <img src={s4} alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Machine Welding</h5>
                      <p>
                        when looking at its layout. The point of using Lorem
                        Ipsum is that it has a more-or-less normal
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box ">
                    <div className="img-box">
                      <img src={s6} alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Car Welding</h5>
                      <p>
                        when looking at its layout. The point of using Lorem
                        Ipsum is that it has a more-or-less normal
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box ">
                    <div className="img-box">
                      <img src={s1} alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Home Welding</h5>
                      <p>
                        when looking at its layout. The point of using Lorem
                        Ipsum is that it has a more-or-less normal
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box ">
                    <div className="img-box">
                      <img src={s4} alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Machine Welding</h5>
                      <p>
                        when looking at its layout. The point of using Lorem
                        Ipsum is that it has a more-or-less normal
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box ">
                    <div className="img-box">
                      <img src={s6} alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Car Welding</h5>
                      <p>
                        when looking at its layout. The point of using Lorem
                        Ipsum is that it has a more-or-less normal
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="carousel-wrap">
              <div>
                <Carousel
                  autoPlay={true}
                  infiniteLoop={true}
                  centerMode={true}
                  showStatus={false}
                  centerSlidePercentage={33.33}
                >
                  <div className="item">
                    <div className="box ">
                      <div className="img-box">
                        <img src={s1} alt="" />
                      </div>
                      <div className="detail-box">
                        <h5>Home Welding</h5>
                        <p>
                          when looking at its layout. The point of using Lorem
                          Ipsum is that it has a more-or-less normal
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="box ">
                      <div className="img-box">
                        <img src={s4} alt="" />
                      </div>
                      <div className="detail-box">
                        <h5>Machine Welding</h5>
                        <p>
                          when looking at its layout. The point of using Lorem
                          Ipsum is that it has a more-or-less normal
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="box ">
                      <div className="img-box">
                        <img src={s6} alt="" />
                      </div>
                      <div className="detail-box">
                        <h5>Machine Welding</h5>
                        <p>
                          when looking at its layout. The point of using Lorem
                          Ipsum is that it has a more-or-less normal
                        </p>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <span>Read More</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
