import React from "react";
import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import "../../styles/AboutUs/HelpClient.css";
import { LuMoveRight, LuMoveDown } from "react-icons/lu";
import { AboutUsImages, Icons } from "../../constants/images";

const HelpClient = () => {
  const isDownArrow = useMediaQuery("(max-width:770px)");
  const VisaSteps = [
    {
      icon: AboutUsImages?.ReasonIcon2,
      step_name: "Fast Hiring Process",
      description:
        "Dream Sailor offers fast-track hiring programs that deliver top candidates to your company, ensuring a seamless recruiting experience by handling all the screening and simplifying the process.",
    },
    {
      icon: Icons?.submitIcon,
      step_name: "Thorough Profiling & Screening",
      description:
        "Dream Sailor provides extensive talent pools of highly motivated candidates who meet rigorous standards, ensuring only the best professionals join your organization with a commitment to performance, loyalty, and motivation.",
    },
    {
      icon: Icons?.airplaneIcon,
      step_name: "High Quality Candidates/Talent Pool",
      description:
        "Dream Sailor guarantees top candidates in the market, each with industry experience and expertise, making them not only highly qualified but also poised to exceed your expectations.",
    },
    {
      icon: Icons?.airplaneIcon,
      step_name: "Long Lasting Hire",
      description:
        "Dream Sailor is dedicated to ensuring your organization benefits from every new hire, with a screening process designed to identify the best candidates. Our recruitment programs evaluate not only qualifications but also cultural and behavioral fit to align with your organization’s needs.",
    },
  ];

  return (
    <>
      <Box className="help_client">
        <Box className="help_client_top">
          <Box>
            <Typography sx={{ color: "#5C5C5C", fontSize: "15px" }}>
              HOW WE HELP OUR CLIENTS
            </Typography>
            <Typography
              className="help_client_top_desc"
              sx={{
                color: "#3D3D3D",
                fontSize: "50px",
                width: "459px",
                fontWeight: "bold",
              }}>
              Need Help with Recruitment Challenges?
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
              Dream Sailor is your trusted partner in recruiting top talent,
              offering fast-track hiring programs, extensive talent pools, and a
              meticulous screening process to bring only the best candidates to
              your organization. With a focus on industry expertise, motivation,
              and cultural alignment, we ensure every new hire is poised to make
              a meaningful impact on your team. Count on Dream Sailor for a
              streamlined, high-quality recruitment experience that drives
              performance and supports your organization’s success.
            </Typography>
          </Box>
        </Box>
        <Box className="help_client_bottom">
          {VisaSteps?.map((data, index) => {
            return (
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}>
                  <Typography sx={{ color: "#092E69", fontWeight: "bold" }}>
                    Step {index + 1}
                  </Typography>
                  <Box
                    sx={{
                      border: "1px solid",
                      borderStyle: "dashed",
                      borderRadius: "100%",
                      width: "100px",
                      height: "100px",
                      padding: "30px",
                    }}>
                    <img alt="Icon" src={data?.icon} />
                  </Box>
                  <Typography
                    className="help_client_bottom_step"
                    sx={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      width: "180px",
                    }}>
                    {data?.step_name}
                  </Typography>
                  <Typography
                    className="help_client_bottom_desc"
                    sx={{
                      color: "#7D7D7D",
                      width: "224px",
                      fontSize: "10px",
                    }}>
                    {data?.description}
                  </Typography>
                </Box>
                <Box>
                  {index !== VisaSteps?.length - 1 ? (
                    isDownArrow ? (
                      <LuMoveDown style={{ marginLeft: "-50px" }} size={50} />
                    ) : (
                      <LuMoveRight style={{ marginLeft: "-50px" }} size={50} />
                    )
                  ) : (
                    ""
                  )}
                </Box>
              </>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default HelpClient;
