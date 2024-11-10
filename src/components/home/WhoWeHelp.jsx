import { Box, Card, CardActions } from "@mui/material";
import React from "react";
import "../../styles/Home/QuickLinks.css";
import Typography from "@mui/material/Typography";
import { FaArrowCircleRight } from "react-icons/fa";

const WhoWeHelp = () => {
  const QuickLinkData = [
    {
      name: "Migration & Visa",
      description: "Meet Our Professional Lawyers & Agents",
      // icon: QuickLinkIcon.MigrationIcon,
      href: "Services/Migration&Visa",
    },
    {
      name: "Education & Counseling",
      description: "View Our Best QAEC Certified Counsellor",
      // icon: QuickLinkIcon.VisaIcon,
      href: "Services/Education&Counseling",
    },
    {
      name: "Lands & Home",
      description: "View the Best House According to your Budget",
      // icon: QuickLinkIcon.LandIcon,
      href: "Services/Lands&Home",
    },
    {
      name: "Business & Events",
      description: "We ensure seamless planning and execution",
      // icon: QuickLinkIcon.ManagementIcon,
      href: "Services/Business&Events",
    },
    {
      name: "Recruitment & Placement",
      description: "Expert recruitment and placement for the perfect job match",
      // icon: QuickLinkIcon.RecruitmentIcon,
      href: "Services/Recruitment&Placement",
    },
  ];
  return (
    // <Fade cascade triggerOnce direction="left">
      <Box className="quick_links">
        {QuickLinkData.map((data, index) => {
          return (
            <Card className="quick_links_card" key={index}>
              {/* <img width={50} src={data?.icon} alt="Icon" /> */}
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "#092E69",
                }}
                component="div">
                {data?.name}
              </Typography>
              <Typography
                fontSize={"12px"}
                variant="body2"
                color={"#949494"}
                textAlign={"center"}>
                {data?.description}
              </Typography>
              {/* <CardActions>
                <a href={data?.href}>
                  <FaArrowCircleRight color="#092E69" size={30} />
                </a>
              </CardActions> */}
            </Card>
          );
        })}
      </Box>
    // </Fade>
  );
};

export default WhoWeHelp;
