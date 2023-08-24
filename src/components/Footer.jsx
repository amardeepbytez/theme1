import React from "react";
import "./style/footer.css";
import { Link } from "react-router-dom";
// import { Grid } from "@mui/material";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import CallIcon from "@mui/icons-material/Call";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";

// const Footer = () => {
//   return (
//     <Grid container className="footer">
//       <Grid item className="footer_upper">
//         <Grid container spacing={0}>

//           <Grid item>
//             <Grid container spacing={3}>

//               <Grid item xs={12} sm={6} md={3}>
//                 <span>FINTER</span>
//               </Grid>

//               <Grid item>
//                 <Grid container>
//                   <Grid item xs={6} sm={6} md={3}>
//                     <LocationOnIcon />
//                     <span>Location</span>
//                   </Grid>
//                   <Grid item xs={6} sm={6} md={3}>
//                     <CallIcon />
//                     <span>+01 1234567890</span>
//                   </Grid>
//                   <Grid item xs={12} sm={6} md={3}>
//                     <FacebookIcon />
//                     <TwitterIcon />
//                     <LinkedInIcon />
//                     <InstagramIcon />
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </Grid>
//           </Grid>

//           <Grid item>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6} lg={3}>
//                 <span>COMPANY</span>
//                 <p>
//                   Randomised words which don't look even slightly believable. If
//                   you are going to use a passage of Lorem Ipsum, you need to be
//                   sure
//                 </p>
//               </Grid>
//               <Grid className="newsletter" item xs={12} sm={6} lg={3}>
//                 <span>NEWSLETTER</span>
//                 <input type="text" placeholder="Enter Your Email" />
//                 <button>Subscribe</button>
//               </Grid>
//               <Grid item xs={12} sm={6} lg={3}>
//                 <span>SERVICES</span>
//                 <p>
//                   Randomised words which don't look even slightly believable. If
//                   you are going to use a passage of Lorem Ipsum, you need to be
//                   sure
//                 </p>
//               </Grid>
//               <Grid item xs={12} sm={6} lg={3}>
//                 <span>USEFUL LINKS</span>
                // <ul className="useful_links">
                //   <Link className="links" to="/">
                //     Home
                //   </Link>
                //   <Link className="links" to="/about">
                //     About
                //   </Link>
                //   <Link className="links" to="/services">
                //     Services
                //   </Link>
                //   <Link className="links" to="/team">
                //     Team
                //   </Link>
                //   <Link className="links" to="/contact">
                //     Contact Us
                //   </Link>
                // </ul>
//               </Grid>
//             </Grid>
//           </Grid>

//         </Grid>
//       </Grid>

//       <Grid item className="footer_lower">
//         © 2023 All Rights Reserved By Free Html Templates
//       </Grid>
//     </Grid>
//   );
// };

const Footer = () => {
  return (
    <>
      <section className="info_section ">
        <div className="container">
          <div className="info_top">
            <div className="row">
              <div className="col-md-3 ">
                <Link className="navbar-brand" to="/">
                  Finter
                </Link>
              </div>
              <div className="col-md-5 ">
                <div className="info_contact">
                  <Link to="/">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>Location</span>
                  </Link>
                  <Link to="/">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>+01 1234567890</span>
                  </Link>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="social_box">
                  <Link to="/">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </Link>
                  <Link to="/">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </Link>
                  <Link to="/">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </Link>
                  <Link to="/">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="info_bottom">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="info_detail">
                  <h5>Company</h5>
                  <p>
                    Randomised words which don't look even slightly believable.
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="info_form">
                  <h5>NEWSLETTER</h5>
                  <form action="">
                    <input type="text" placeholder="Enter Your Email" />
                    <button type="submit">Subscribe</button>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="info_detail">
                  <h5>Services</h5>
                  <p>
                    Randomised words which don't look even slightly believable.
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="">
                  <h5>Useful links</h5>
                  {/* <ul className="info_menu">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="service.html">Services</a>
                    </li>
                    <li>
                      <a href="team.html">Team</a>
                    </li>
                    <li className="mb-0">
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul> */}
                  <ul className="info_menu">
                  <Link className="links" to="/">
                    Home
                  </Link>
                  <Link className="links" to="/about">
                    About
                  </Link>
                  <Link className="links" to="/services">
                    Services
                  </Link>
                  <Link className="links" to="/team">
                    Team
                  </Link>
                  <Link className="links" to="/contact">
                    Contact Us
                  </Link>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By
            <span>Free Html Templates</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
