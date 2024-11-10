"use client";
import React from "react";
import "../../styles/AboutUs/ReasonChooseUs.css";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { AboutUsImages } from "../../constants/images";
import { Fade } from "react-awesome-reveal";

const ReasonChooseUs = () => {
  const ReasonProcessPayload = [
    {
      reason: "Accelerated Hiring Process",
      description:
        "Dream Sailor offers swift hiring programs tailored to bring top talent to your company.",
      icon: AboutUsImages?.ReasonIcon1,
    },
    {
      reason: "Comprehensive Screening & Profiling",
      description:
        "We ensure that only top-quality professionals join your organization, with a commitment to performance, loyalty, and motivation.",
      icon: AboutUsImages?.ReasonIcon2,
    },
  ];

  return (
    <Box className="reason_choose_us">
      <Box className="reason_choose_us_left">
        <Fade direction="left">
          <Typography className="reason_choose_us_head">
            WHY CHOOSE DREAM SAILOR AS YOUR AUSTRALIAN RECRUITMENT AGENCY
          </Typography>
          <Typography variant="h4" className="reason_choose_us_title">
            Countless Benefits & Easy Processing
          </Typography>
          <Divider
            sx={{
              borderWidth: "2px",
              borderColor: "#3D3D3D",
              width: "180px",
              margin: "10px 0 20px 0",
            }}
          />
        </Fade>
        <Fade direction="down">
          <Typography sx={{ color: "#747474" }}>
            Dream Sailor a professional recruitment company, provides
            exceptional recruitment services to businesses across Australia. We
            have helped hundreds of job seekers both within Australia and
            internationally find their ideal roles. Our mission is to support
            and connect both job seekers and employers, ensuring the best
            possible solutions for all hiring needs.
          </Typography>
        </Fade>
        <Box className="reason_choose_us_process">
          {ReasonProcessPayload?.map((data, index) => {
            return (
              <Fade direction="down" key={index}>
                <Box className="reason_choose_us_process_container" key={index}>
                  <img alt="Icon" src={data?.icon} />
                  <Box>
                    <Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>
                      {data?.reason}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#444444",
                        fontSize: "12px",
                        width: "273px",
                        lineHeigth: "10px",
                        marginTop: "5px",
                      }}>
                      {data?.description}
                    </Typography>
                  </Box>
                </Box>
              </Fade>
            );
          })}
        </Box>
      </Box>
      <Box className="reason_choose_us_right">
        <img
          // height={500}
          // style={{ width: "46em" }}
          width={736}
          alt="Reason Image"
          src={AboutUsImages?.ReasonChooseUsImage}
        />
      </Box>
    </Box>
  );
};

export default ReasonChooseUs;
