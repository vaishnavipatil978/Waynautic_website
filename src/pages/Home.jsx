import React from "react";
import { Box, Typography, Grid, Button, Card, CardContent } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ width: "100%", minHeight: "100vh", background: "#F4F7FC", py: 5 }}>
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
        <Typography variant="h6" sx={{ mt: 2, opacity: 0.9, maxWidth: "800px", mx: "auto" }}>
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
      
      {/* What We Do Section */}
      <Box sx={{ textAlign: "center", maxWidth: "1000px", mx: "auto", mt: 6, px: 3 }}>
        <Typography variant="h4" fontWeight="bold" color="#0A192F">
          What We Do
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, color: "#555" }}>
          We help businesses excel with cutting-edge AI-enhanced technology solutions and software QA engineering. Our specialized SaaS products and services empower you to ensure the robustness of your critical systems.
        </Typography>
      </Box>

      {/* Key Offerings */}
      <Grid container spacing={4} sx={{ mt: 6, px: { xs: 2, md: 6 }, justifyContent: "center" }}>
        {[
          { title: "Tailored Solutions", description: "AI-powered tools addressing critical business challenges." },
          { title: "Proprietary Products", description: "Industry-leading software for capital markets and automation." },
          { title: "Software Services", description: "Comprehensive QA services, DevOps, and scalable development." },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 3, borderRadius: "12px", transition: "transform 0.3s", ":hover": { transform: "scale(1.05)" } }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
