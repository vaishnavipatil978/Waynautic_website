import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import careerImage from "../assets/career.jpg"; // Use an appropriate image from your assets

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  const jobListings = [
    {
      title: "Java Deveoper (3 to 5 years of experience)",
      location: "Remote",
      description:
        "Develop, test, and maintain scalable Java applications using Spring Boot, Hibernate, and microservices architecture. Work on RESTful APIs, databases, and cloud-based deployments while ensuring clean, efficient, and secure code.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScaYCpB_xqs_LwEOSFPgJDjpstRxosucUVXJD0RB1iaWortig/viewform",
    },
    {
      title: "Performance Engineer (3 to 5 years of experience)",
      location: "Remote",
      description:
        "Plan, execute, and analyze performance tests using tools like JMeter, LoadRunner, or Neoload. Identify performance bottlenecks, optimize system performance, and collaborate with development teams to ensure scalable and high-performing applications.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdaf1HXvUe7b5kpa7G6f1JY7aNxmaGPGJauATFZ8rvaWsOtKQ/viewform",
    },
    {
      title: "Automation Engineer (3 to 5 years of experience)",
      location: "Remote",
      description:
        "Design, develop, and maintain automated test scripts for web, mobile, and API testing. Work with Selenium, Appium, or similar tools to enhance test coverage, improve efficiency, and integrate automation into CI/CD pipelines.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdtFwBLpWjoVL3DHgZv7fBkZ0jrrHFIc3_ldb9iOlBM8Wlnxg/viewform",
    },
  ];

  return (
    <Box sx={{ background: "#F4F7FC", minHeight: "100vh", pb: 5 }}>
      <Box
        sx={{
          position: "relative",
          background: `url(${careerImage}) center/cover no-repeat`,
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#1976D2",
          textAlign: "center",
          padding: "20px",
          mt: 0,
        }}
      >
        <Typography variant="h3" fontWeight="bold" color="#1976D2">
          Join Our Team
        </Typography>
      </Box>

      <Box
        sx={{
          textAlign: "center",
          maxWidth: "800px",
          mx: "auto",
          mt: 4,
          px: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold" color="#1976D2">
          Why Work With Us?
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, color: "#555" }}>
          At Waynautic Technologies, we believe in innovation, collaboration,
          and personal growth. We offer an exciting environment where you can
          thrive and build impactful solutions.
        </Typography>
      </Box>

      <Grid
        container
        spacing={3}
        sx={{ mt: 5, px: 4, justifyContent: "center" }}
      >
        {jobListings.map((job, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            sx={{
              background: "#FFFFFF",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              padding: "11px",
              borderRadius: "8px",
              minHeight: "330px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}> 
              <Typography variant="h6" fontWeight="bold">
                {job.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {job.location}
              </Typography>
              <Typography variant="body2" sx={{ mt: 2 }}>
                {job.description}
              </Typography>
            </CardContent>
        
            {/* Button stays at the bottom */}
            <Box sx={{ textAlign: "center", pb: 2 }}> 
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(45deg, #1976D2, #0A74DA)",
                  color: "#fff",
                  width: "90%",
                }}
              >
                <Link
                  to={job.link}
                  target="_blank"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Apply Now
                </Link>
              </Button>
            </Box>
          </Card>
        </Grid>
        
        ))}
      </Grid>

      <Link to="/contact-us" style={{ textDecoration: "none" }}>
        <Card
          variant="outlined"
          elevation={3}
          sx={{
            maxWidth: 400,
            mx: "auto",
            mt: 3,
            p: 2,
            textAlign: "center",
            cursor: "pointer",
            borderColor: "grey.400",
            "&:hover": { boxShadow: 3 },
          }}
        >
          <Typography fontWeight="bold" fontSize="16px" color="#1565c0">
            🚀 Kickstart your career with us! Apply for an internship.
          </Typography>
        </Card>
      </Link>
    </Box>
  );
};

export default Careers;
