import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import "../../styles/AboutUs/OurTeam.css";
import { TeamImage } from "../../constants/images";
import TeamContainer from "../../sharedComponent/TeamContainer";

const OurTeam = () => {
  const TeamData = [
    {
      picture: TeamImage?.TeamImage2,
      name: "SOHIL SHRESTHA",
      title: "GLOBAL BUSINESS DEVELOPMENT DIRECTOR",
      location: "KATHMANDU, NEPAL",
    },
    {
      picture: TeamImage?.TeamImage3,
      name: "SANJAY UDAS",
      title: "MD & HEAD OF DIGITAL BRANDING",
      location: "KATHMANDU, NEPAL",
    },
    {
      picture: TeamImage?.TeamImage4,
      name: "SUJAN MAHARJAN",
      title: "CULINARY INCHARGE & CONSULTANT",
      location: "KATHMANDU, NEPAL",
    },
    {
      picture: TeamImage?.TeamImage5,
      name: "SHIKHAR SJB RANA",
      title: "F&B HEAD",
      location: "KATHMANDU, NEPAL",
    },
    {
      picture: TeamImage?.TeamImage6,
      name: "IBHARIM IMAD",
      title: "ADVISER & HOSPITALITY EXPERTISE",
      location: "MALDIVES",
    },
    {
      picture: TeamImage?.TeamImage7,
      name: "MOHAMED RIYAZ",
      title: "BDH & CULINARY DIRECTOR",
      location: "MALDIVES",
    },
  ];
  return (
    <Box className="our_team">
      <Box className="help_client_top">
        <Box>
          <Typography sx={{ color: "#5C5C5C", fontSize: "15px" }}>
            Our Experts
          </Typography>
          <Typography
            className="help_client_top_desc"
            sx={{
              color: "#3D3D3D",
              fontSize: "50px",
              width: "459px",
              fontWeight: "bold",
            }}>
            DREAM TEAM
          </Typography>
          <Divider
            sx={{
              borderWidth: "2px",
              borderColor: "#5C5C5C",
              width: "110px",
              margin: "10px 0 20px 0",
            }}
          />
        </Box>
        <Box>
          <Typography
            className="help_client_top_desc"
            sx={{ fontSize: "18px", color: "#757575", width: "700px" }}>
            At every step of the journey, our top professionals are here to
            provide personalized guidance, dedicated support, and expert
            insight. We ensure a smooth and successful experience, whether you
            need assistance with recruitment, career counseling, or finding the
            perfect fit for your organization.
          </Typography>
        </Box>
      </Box>
      <Box className="our_team_bottom">
        {TeamData?.map((data, index) => {
          return (
            <Box>
              <TeamContainer
                image={data?.picture}
                name={data?.name}
                title={data?.title}
                location={data?.location}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default OurTeam;
