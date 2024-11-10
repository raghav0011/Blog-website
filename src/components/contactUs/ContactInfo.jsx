import React from "react";
import "../../styles/ContactUs/ContactInfo.css";
import { Box, Typography } from "@mui/material";
import { MdOutlinePushPin } from "react-icons/md";
import { MdPhoneInTalk } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";

const ContactInfo = () => {
  const contactInfoPayload = [
    {
      icon: <MdOutlinePushPin size={"80"} color="#0A2F69" />,
      name: "Office Address",
      desc: "Glenfield, Sydney, NSW, Australia, 2167",
    },
    {
      icon: <MdPhoneInTalk size={"80"} color="#0A2F69" />,
      name: "Phone Us",
      desc: "+61 406 204 071",
    },
    {
      icon: <MdMailOutline size={"80"} color="#0A2F69" />,
      name: "Send Message",
      desc: "recruitment@dsailorgroup.com.au",
    },
  ];
  return (
    <>
      <Box className="contact_info">
        {contactInfoPayload?.map((data, index) => {
          return (
            <Box key={index} sx={{display:"flex",justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
              {data?.icon}
              <Typography sx={{ fontSize: "30px", fontWeight:"bold" }}>{data?.name}</Typography>
              <Typography sx={{ fontSize: "20px", color: "#757575" }}>
                {data?.desc}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default ContactInfo;
