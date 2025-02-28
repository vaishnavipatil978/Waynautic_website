import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import caseStudyImg from "../assets/caseStudy.jpg";
import blogImg from "../assets/blog.jpg";
import qaImg from "../assets/QA.jpg";
import bannerImg from "../assets/banner.jpg"; // Make sure this image is available

const knowledgeBaseSections = [
  {
    title: "Case Studies",
    description:
      "Explore real-world case studies showcasing our innovative solutions and their impact on businesses.",
    image: caseStudyImg,
  },
  {
    title: "Blogs",
    description:
      "Stay updated with the latest industry trends, insights, and expert opinions through our blogs.",
    image: blogImg,
  },
  {
    title: "QA Section",
    description:
      "Find answers to frequently asked questions and expert insights on quality assurance best practices.",
    image: qaImg,
  },
];

const KnowledgeBase = () => {
  return (
    <Box sx={{ width: "100%", minHeight: "100vh", background: "#FFFFFF" }}>
      {/* Banner Section */}
      <Box
        sx={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Knowledge Base
        </Typography>
      </Box>

      {/* Knowledge Base Sections */}
      <Box sx={{ maxWidth: "1200px", margin: "auto", padding: "40px 20px" }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" marginBottom={3} color="black">
          Explore Our Knowledge Base
        </Typography>

        <Grid container spacing={4}>
          {knowledgeBaseSections.map((section, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  boxShadow: 3,
                  borderRadius: "12px",
                  transition: "transform 0.3s",
                  ":hover": { transform: "scale(1.05)" },
                }}
              >
                <CardMedia component="img" height="180" image={section.image} alt={section.title} />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {section.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {section.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default KnowledgeBase;
