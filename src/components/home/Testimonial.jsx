import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import "../../styles/Home/Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { TestimonialIcon } from "../../constants/images";

const Testimonial = () => {
  const [slidesPerView, setSlidesPerView] = React.useState(2);

  React.useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth <= 1000 ? 1 : 2);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize the state on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const ClientPayload = [
    {
      name: "James Thomas",
      location: "Sydney, Australia",
      work_done: "Software Engineer Placement",
      comment:
        "I had an excellent experience with Dream Sailor Consulting Group. They were professional and efficient in finding the perfect software engineering role for me.",
      image: TestimonialIcon?.People1,
    },
    {
      name: "Sarah Johnson",
      location: "Toronto, Canada",
      work_done: "Marketing Specialist Placement",
      comment:
        "Dream Sailor Consulting Group made my transition into a new marketing role seamless. Their expertise and support were invaluable.",
      image: TestimonialIcon?.People2,
    },
    {
      name: "David Lee",
      location: "London, UK",
      work_done: "Data Analyst Placement",
      comment:
        "Thanks to Dream Sailor Consulting Group, I secured a data analyst position without any hassle. Highly recommended!",
      image: TestimonialIcon?.People3,
    },
    {
      name: "Maria Gonzalez",
      location: "Madrid, Spain",
      work_done: "Finance Manager Placement",
      comment:
        "The team at Dream Sailor Consulting Group guided me through the entire process of securing a finance manager role. Truly exceptional service!",
      image: TestimonialIcon?.People4,
    },
    {
      name: "Chen Wei",
      location: "Beijing, China",
      work_done: "Project Manager Placement",
      comment:
        "I am very satisfied with the services provided by Dream Sailor Consulting Group. They helped me find a project manager position quickly and efficiently.",
      image: TestimonialIcon?.People5,
    },
    {
      name: "Emma Müller",
      location: "Berlin, Germany",
      work_done: "Mechanical Engineer Placement",
      comment:
        "Dream Sailor Consulting Group provided excellent support in finding a mechanical engineering role. Their knowledge and professionalism are unmatched.",
      image: TestimonialIcon?.People6,
    },
  ];
  return (
    <>
      <Box className="testimonial_container">
        <Box className="testimonial_head_section">
          <Box className="light_info">CLIENT TESTIMONIAL</Box>
          <Box className="testimonial_head_title">
            What Customers Saying About Dream Sailor Conuslting Group
          </Box>
        </Box>
        <Box className="testimonial_content">
          <Swiper
            pagination={{ clickable: true }}
            style={
              {
                height: "280px",
                "--swiper-pagination-color": "#092E69",
                "--swiper-pagination-bullet-size": "12px",
              }
            }
            spaceBetween={10}
            slidesPerView={slidesPerView}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper">
            {ClientPayload?.map((data, index) => {
              return (
                <SwiperSlide key={index}>
                  <Box className="testimonial_reviews" sx={{ width: 500 }}>
                    <Card
                      variant="outlined"
                      sx={{ padding: "10px", height: " 12em" }}
                      className='testimonial_review_card'
                      >
                      <CardContent>
                        <Box className="testimonial_client_info">
                          <Box
                          className='testimonial_review_head'
                            sx={{
                              display: "flex",
                              textAlign: "center",
                              justifyContent: "center",
                              flexDirection: "column",
                              width: "26em",
                              alignItems: "center",
                            }}>
                            <CardMedia>
                              <img
                                width={80}
                                style={{ borderRadius: "20px" }}
                                alt="People"
                                src={data?.image}
                              />
                            </CardMedia>
                            <Box
                              className="testimonial_review_name"
                              sx={{
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}>
                              {data?.name}
                            </Box>
                            <Typography sx={{ fontSize: "10px" }}>
                              {data?.location}
                            </Typography>
                          </Box>
                          <Box>
                            <Box display={"flex"} gap={"10px"}>
                              <Typography color="#092E69" fontWeight={"bold"}>
                                {data?.work_done}
                              </Typography>
                              <Rating name="read-only" value={5} readOnly />
                            </Box>
                            <Typography
                              width={"19em"}
                              marginTop={"5px"}
                              color={"#5F5F5F"}>
                              {data?.comment}
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </Box>
    </>
  );
};

export default Testimonial;
