import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import WhatWeDo from "./WhatWeDo";
import WhoWeAre from "./WhoWeAre";
import KnowledgeBase from "./KnowledgeBase";

const Home = () => {
  return (
    <Box
      sx={{ width: "100%", minHeight: "100vh", background: "#F4F7FC", py: 5 }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #0A74DA, #1976D2)",
          color: "white",
          textAlign: "center",
          py: 8,
          px: 2,
          borderRadius: "0 0 50px 50px",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Waynautic Technologies
        </Typography>
        <Typography
          variant="h6"
          sx={{ mt: 2, opacity: 0.9, maxWidth: "800px", mx: "auto" }}
        >
          AI-driven software solutions for a smarter, scalable, and resilient
          future.
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

      {/* What We Do Section */}
      <WhatWeDo />
      <WhoWeAre />
      <KnowledgeBase />
    </Box>
  );
};

export default Home;
