import React from 'react'
import './../assets/css/bootstrap.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const climage = require('./../assets/images/client.jpg')

const Client = () => {
  return (
    <>
      <section className="client_section layout_padding">
        <div className="container ">
      <div className="heading_container heading_center">
        <h2>
          Testimonial
        </h2>
      </div>
      <div id="carouselExample2Controls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-lg-7 col-md-9 mx-auto">
                <div className="client_container ">
                  <div className="img-box">
                    <img src={climage} alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>
                      Jone Mark
                    </h5>
                    <p>
                      Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
                    </p>
                    <span>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-lg-7 col-md-9 mx-auto">
                <div className="client_container ">
                  <div className="img-box">
                    <img src={climage} alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>
                      Jone Mark
                    </h5>
                    <p>
                      Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
                    </p>
                    <span>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-lg-7 col-md-9 mx-auto">
                <div className="client_container ">
                  <div className="img-box">
                    <img src={climage} alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>
                      Jone Mark
                    </h5>
                    <p>
                      Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
                    </p>
                    <span>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel_btn-box">
          <button className="carousel-control-prev" href="#carouselExample2Controls" data-slide="prev">
            <span>
              <i className="fa fa-arrow-left" aria-hidden="true"><ArrowBackIcon /></i>
            </span>
            <span className="sr-only">Previous</span>
          </button>
          <button className="carousel-control-next" href="#carouselExample2Controls" data-slide="next">
            <span>
              <i className="fa fa-arrow-right" aria-hidden="true"><ArrowForwardIcon /></i>
            </span>
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
    </div>
      </section>
    </>
  )
}

export default Client