import React from "react";
import { Box, Breadcrumbs, Divider, Typography } from "@mui/material";
import "../styles/PageHeader.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";

const PageHeader = ({
  from,
  to,
  MainName,
  backgroundImage,
}) => {
  const breadcrumbs = [
    <a
      key="1"
      color="inherit"
      href="/"
      style={{ display: "flex", alignItems: "center" }}>
      <IoHomeOutline style={{ marginRight: "5px" }} />
      {from}
    </a>,
    <Typography key="3" color="white">
      {to}
    </Typography>,
  ];

  return (
    <>
      <Box className="page_header">
        <Box
          className="page_image_overlay"
          sx={{ backgroundImage: `url("${backgroundImage}")` }}></Box>
        <Box
          className="container"
          sx={{ marginLeft: "auto", marginRight: "auto" }}>
          <Box className="page_header_content">
            <Typography className="page_header_main_name">
              {MainName}
            </Typography>
            <Divider
              sx={{
                borderWidth: "2px",
                borderColor: "white",
                width: "140px",
                margin: "10px 0 20px 0",
              }}
            />
            <Box
              sx={{
                color: "white",
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}>
              <Breadcrumbs
                separator={<FaArrowRightLong />}
                aria-label="breadcrumb"
                sx={{ color: "white" }}>
                {breadcrumbs}
              </Breadcrumbs>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PageHeader;
