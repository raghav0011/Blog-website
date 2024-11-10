import React from "react";
import { Box, Typography } from "@mui/material";
import "../../styles/AboutUs/Welcome.css";
import { Fade } from "react-awesome-reveal";
import images from "../../constants/images";

const Welcome = () => {
  return (
    <Box className="about_info_main" sx={{ backgroundColor: "#F3F3F3" }}>
      <Box className="about_info">
        <Box className="about_info_left">
          <Fade direction="left">
            <img
              className="about_info_image"
              src={images?.WelcomeImage}
              alt="AboutInfoImage"
              width={480}
            />
          </Fade>
        </Box>
        <Box className="about_info_right">
          <Fade cascade>
            <Typography variant={"h5"} className="about_info_head">
              Welcome to Dream Sailor Consulting
            </Typography>
            <Typography variant="h4" className="about_info_title">
              One Stop for you Complete Career
            </Typography>
            <Typography className="about_info_description">
              Dream Sailor Consulting understands that choosing the right career
              path is a significant decision, one that opens doors to new
              opportunities. Our mission is to be your trusted partner, offering
              expertise, transparency, and dedicated support as you navigate the
              recruitment process. With a comprehensive range of recruitment
              services, Dream Sailor Consulting is committed to making your
              career transition smooth and successful.
            </Typography>
            <a href={"#"} className="about_navigation">
              Learn More
            </a>
          </Fade>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
