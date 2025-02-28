import React from "react";
import { Box, Typography, Button, Card, CardContent, Grid } from "@mui/material";
import careerImage from "../assets/career.jpg"; // Use an appropriate image from your assets

const Careers = () => {
  const jobListings = [
    {
      title: "Software Engineer (Backend)",
      location: "Remote",
      description: "Work with cutting-edge technologies to build scalable backend systems.",
    },
    {
      title: "Frontend Developer",
      location: "Bangalore, India",
      description: "Design and develop beautiful user interfaces with React and Material UI.",
    },
    {
      title: "QA Engineer",
      location: "Remote",
      description: "Ensure top-notch quality and performance of our applications.",
    },
  ];

  return (
    <Box sx={{ background: "#F4F7FC", minHeight: "100vh", pb:5 }}>
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
          mt : 0
        }}
      >
        <Typography variant="h3" fontWeight="bold" color="#1976D2">Join Our Team</Typography>
      </Box>
      
      <Box sx={{ textAlign: "center", maxWidth: "800px", mx: "auto", mt: 4, px: 2 }}>
        <Typography variant="h5" fontWeight="bold" color="#1976D2">Why Work With Us?</Typography>
        <Typography variant="body1" sx={{ mt: 2, color: "#555" }}>
          At Waynautic Technologies, we believe in innovation, collaboration, and personal growth. We offer an exciting environment where you can thrive and build impactful solutions.
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mt: 5, px: 4, justifyContent: "center" }}>
        {jobListings.map((job, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ background: "#FFFFFF", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">{job.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {job.location}
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>{job.description}</Typography>
                <Button variant="contained" sx={{ mt: 2, background: "linear-gradient(45deg, #1976D2, #0A74DA)", color: "#fff" }}>
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Careers;

