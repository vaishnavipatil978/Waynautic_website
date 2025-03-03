import React from "react";
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
import backgroundIMG from "../assets/HomeBackground.png"
import LaunchIMG from "../assets/LaunchIMG.png"

const Home = () => {
  return (
    <Box
      sx={{ width: "100%", minHeight: "100vh"}}
    >
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

<Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: "center",
    justifyContent: "center",
    padding: { xs: "30px 20px", md: "50px 0" },
    width: "90vw",
  }}
>
  {/* Text Section - Takes 2x space */}
  <Box
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
      sx={{
        mt: 3,
        background: "linear-gradient(45deg, #1976D2, #0A74DA)",
        color: "#fff",
        fontSize: "16px",
        padding: "10px 20px",
        borderRadius: "25px",
      }}
    >
      Get Started
    </Button>
  </Box>

  {/* Image Section - Takes 1x space */}
  <Box
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
</Box>

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
