import React, { useRef } from "react";
import "../../styles/ContactUs/ContactForm.css";
import { FaRegComment } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FaMobileScreenButton } from "react-icons/fa6";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Divider,
  //   Snackbar,
  Typography,
} from "@mui/material";
// import "../../Styles/AboutUs/HelpClient.css";
// import instance from "@/pages/api/axiosInstance";

const ContactForm = () => {
  //   const form = useRef < HTMLFormElement > null;
  //   const [loading, setLoading] = React.useState(false);
  //   const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  //   const [snackbarMessage, setSnackbarMessage] = React.useState("");
  //   const [snackbarSeverity, setSnackbarSeverity] =
  //     (React.useState < "success") | ("error" > "success");

  //   const handleFormSubmit = async (e) => {
  //     e.preventDefault();
  //     setLoading(true);

  //     if (form.current) {
  //       const formData = new FormData(form.current);

  //       try {
  //         // Send form data to the backend
  //         const response = await instance.post("/upload/form", formData, {
  //           // headers: {
  //           //   "Content-Type": "multipart/form-data", // Required for file upload
  //           // },
  //         });

  //         setSnackbarSeverity("success");
  //         setSnackbarMessage(
  //           "We have received your query. Our Admin Team will Contact you Soon!"
  //         );
  //         setSnackbarOpen(true);
  //       } catch (error) {
  //         console.error("Error submitting form:", error);
  //         setSnackbarSeverity("error");
  //         setSnackbarMessage("Failed to send your query. Please try again.");
  //         setSnackbarOpen(true);
  //       } finally {
  //         setLoading(false);
  //       }
  //     }
  //   };

  //   const handleSnackbarClose = () => {
  //     setSnackbarOpen(false);
  //   };
  return (
    <Box>
      <section className="message-box">
        <Box
          className="container contact_form_main"
          sx={{
            display: "flex",
            gap: "50px",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Box
            className="contact_form_main_info"
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
              justifyContent: "center",
            }}>
            <Typography sx={{ color: "#5C5C5C", fontSize: "15px" }}>
              Wanna Contact Us?
            </Typography>
            <Typography
              className="help_client_top_desc contact_form_main_head"
              sx={{
                color: "#3D3D3D",
                fontSize: "50px",
                width: "525px",
                fontWeight: "bold",
              }}>
              Let's Start a Conversation Today!
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
          <Box className="message-box__right" width={"45em"}>
            <form
              //   ref={form}
              //   onSubmit={handleFormSubmit}
              className="comment-one__form contact-form-validated">
              <Box className="row">
                <Box className="col-xl-12">
                  <Box className="comment-form__input-box">
                    <input
                      type="text"
                      placeholder="Your name"
                      name="name"
                      required
                    />
                    <Box className="comment-form__icon">
                      <FaRegUserCircle />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="row">
                <Box className="col-xl-6">
                  <Box className="comment-form__input-box">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      name="number"
                      required
                    />
                    <Box className="comment-form__icon">
                      <FaMobileScreenButton />
                    </Box>
                  </Box>
                </Box>
                <Box className="col-xl-6">
                  <Box className="comment-form__input-box">
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      required
                    />
                    <Box className="comment-form__icon">
                      <IoMailOutline />
                      <i className="far fa-envelope"></i>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box className="row">
                <Box className="col-xl-12">
                  <Box className="comment-form__input-box">
                    <textarea
                      name="message"
                      placeholder="Write Message"
                      required></textarea>
                    <Box className="comment-form__icon contact-expert__icon-comment">
                      <FaRegComment />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </form>
          </Box>
          <Button
            sx={{marginTop:"-50px"}}
            type="submit"
            data-action="submit"
            variant="contained"
            // disabled={loading}
            // startIcon={loading ? <CircularProgress size={20} /> : null}>
            // startIcon={<CircularProgress size={20} />}
          >
            {/* {loading ? "Sending..." : "Send"} */}
            {"Submit"}
          </Button>
        </Box>
      </section>
      {/* <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar> */}
    </Box>
  );
};

export default ContactForm;
