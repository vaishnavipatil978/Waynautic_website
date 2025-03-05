import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import WhatWeDo from "./WhatWeDo";
import WhoWeAre from "./WhoWeAre";
import CaseStudy from "./CaseStudy";
import backgroundIMG from "../assets/HomeBackground.png";
import LaunchIMG from "../assets/LaunchIMG.png";
import banner from "../assets/main.jpg";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <Box sx={{ width: "100%", minHeight: "100vh" }}>
      {/* Hero Section */}
      {/* <Box
  sx={{
    // backgroundImage: `url(${backgroundIMG})`,
    // backgroundSize: "contain",
    // backgroundPosition: "center",
    color: "#1565c0",
    textAlign: "left", // Ensures text aligns left
    py: 8,
    px: 4, // Increased padding for spacing from the edge
    height: "400px",
  }}
> */}

      {/* <Box
  sx={{
    background: "linear-gradient(to bottom, #1976D2 5%, #ffffff 5%)",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: "center",
    justifyContent: "center",
    padding: { xs: "30px 20px", md: "50px 0" },
    width: "auto",
  }} 
>*/}
      {/* Text Section - Takes 2x space */}
      {/* <Box
    sx={{
      flex: 5, // Increased flex ratio
      maxWidth: "1000px", // Slightly increased max-width
      padding: { xs: "20px", md: "50px" },
      textAlign: { xs: "center", md: "left" },
    }}
  >
    <Typography variant="h3" sx={{ fontWeight: "bold", color: "#1976D2" }}>
      Waynautic Technologies
    </Typography>
    <Typography sx={{ marginTop: "10px", color: "#000000" }}>
      AI-driven software solutions for a smarter, scalable, and resilient future.
    </Typography>
    <Button
      variant="contained"
      component={Link} to="/contact-us"
      sx={{
        mt: 3,
        background: "linear-gradient(45deg, #1976D2, #0A74DA)",
        color: "#fff",
        fontSize: "16px",
        padding: "10px 20px",
        borderRadius: "25px",
        ":hover": { color: "#fff", background: "linear-gradient(45deg,rgb(19, 77, 136), #0A74DA)"},
      }}
    >
      Get Started
    </Button>
  </Box> */}

      {/* Image Section - Takes 1x space */}
      {/* <Box
    sx={{
      flex: 2, // Reduced flex ratio
      display: "flex",
      justifyContent: "center",
    }}
  >
    <img
      src={LaunchIMG}
      alt={"Launch Image"}
      style={{
        width: "80%", // Reduced size
        maxWidth: "500px", // Capped max width
        height: "auto",
        borderRadius: "10px",
      }}
    />
  </Box>
</Box> */}

      {/* Image only launch pagege */}
      {/* <Box
    sx={{
      display: "flex",
      justifyContent: "center"
    }}
  >
    <img
      src={banner}
      alt={"Launch Image"}
      style={{
        width: "100%", // Reduced size
        height: "auto",
        borderRadius: "10px",
      }}
    />
  </Box> */}

      <Box
        sx={{
          height: "42vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${banner})`, // Replace with your image
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            // backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark overlay for readability
          },
        }}
      >
        <Box
          sx={{
            maxWidth: "1000px", // Slightly increased max-width
            padding: { xs: "20px", md: "50px" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: "#FFFFFF" }}
          >
            Waynautic Technologies
          </Typography>
          <Typography sx={{ marginTop: "20px", color: "#FFFFFF" }}>
            AI-driven software solutions for a smarter, scalable, and resilient
            future.
          </Typography>
          <Button
  variant="contained"
  component={Link}
  to="/contact-us"
  sx={{
    mt: 3,
    background: "#FFFFFF", // Pure white background
    color: "#0A74DA", // Blue text for contrast
    fontSize: "16px",
    padding: "12px 24px",
    borderRadius: "30px",
    textTransform: "uppercase",
    fontWeight: "bold",
    boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.3)", // Soft white glow
    transition: "all 0.3s ease-in-out",
    ":hover": {
      background: "#F0F8FF", // Light blue tint on hover
      boxShadow: "0px 6px 15px rgba(255, 255, 255, 0.5)", // Stronger glow
      transform: "scale(1.05)", // Slight scale-up for interaction
    },
  }}
>
  GET A FREE TRIAL
</Button>

        </Box>
      </Box>

      <Box></Box>

      {/* <Typography variant="h3" fontWeight="bold">
    Waynautic Technologies
  </Typography>
  <Typography
    variant="h6"
    sx={{
      mt: 2,
      opacity: 0.9,
      maxWidth: "800px",
      color: "#000000",
      textAlign: "left",
    }}
  >
    AI-driven software solutions for a smarter, scalable, and resilient future.
  </Typography> */}

      {/* </Box> */}

      {/* What We Do Section */}

      <WhatWeDo />
      <WhoWeAre />
      <CaseStudy />
    </Box>
  );
};

export default Home;
