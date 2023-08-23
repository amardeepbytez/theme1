import React from "react";
import "./style/footer.css";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Grid container className="footer">
      <Grid item className="footer_upper">
        <Grid container spacing={0}>
          <Grid item>
            <Grid container spacing={3}>
              <Grid item>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={3}>
                    <span>FINTER</span>
                  </Grid>

                  <Grid item xs={6} sm={6} md={3}>
                    <LocationOnIcon />
                    <span>Location</span>
                  </Grid>

                  <Grid item xs={6} sm={6} md={3}>
                    <CallIcon />
                    <span>+01 1234567890</span>
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <FacebookIcon />
                    <TwitterIcon />
                    <LinkedInIcon />
                    <InstagramIcon />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} lg={3}>
                <span>COMPANY</span>
                <p>
                  Randomised words which don't look even slightly believable. If
                  you are going to use a passage of Lorem Ipsum, you need to be
                  sure
                </p>
              </Grid>
              <Grid className="newsletter" item xs={12} sm={6} lg={3}>
                <span>NEWSLETTER</span>
                <input type="text" placeholder="Enter Your Email" />
                <button>Subscribe</button>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <span>SERVICES</span>
                <p>
                  Randomised words which don't look even slightly believable. If
                  you are going to use a passage of Lorem Ipsum, you need to be
                  sure
                </p>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <span>USEFUL LINKS</span>
                <ul className="useful_links">
                  <Link className="links" to="/">Home</Link>
                  <Link className="links" to="/about">About</Link>
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
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item className="footer_lower">
        © 2023 All Rights Reserved By Free Html Templates
      </Grid>
    </Grid>
  );
};

export default Footer;
