import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { AppBar, Toolbar, Box, Button, Card, CardContent, Typography, CardMedia } from "@mui/material";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import blogImage from "../assets/blog.jpg";
import QAImage from "../assets/QA.jpg";
import CSImage from "../assets/caseStudy.jpg";

const KnowledgeBase = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  const sectionDetails = [
    {
      id: "blogs", // Added id field for consistency
      title: "Blogs",
      path: "/blogs",
      items: [
        { title: "Tech Trends 2025", description: "Latest innovations shaping the future.", image: blogImage, link: "/blogs/tech-trends" },
        { title: "AI in Business", description: "How AI is transforming industries.", image: blogImage, link: "/blogs/ai-business" },
        { title: "Cloud Security", description: "Best practices for secure cloud storage.", image: blogImage, link: "/blogs/cloud-security" },
        { title: "Tech Trends 2025", description: "Latest innovations shaping the future.", image: blogImage, link: "/blogs/tech-trends" },
        { title: "AI in Business", description: "How AI is transforming industries.", image: blogImage, link: "/blogs/ai-business" },
        { title: "Cloud Security", description: "Best practices for secure cloud storage.", image: blogImage, link: "/blogs/cloud-security" },
      ],
    },
    {
      id: "qna",
      title: "Q & A",
      path: "/qna",
      items: [
        { title: "What is Kubernetes?", description: "A deep dive into container orchestration.", image: QAImage, link: "/qna/kubernetes" },
        { title: "REST vs GraphQL", description: "Which API style is better?", image: QAImage, link: "/qna/rest-graphql" },
        { title: "What is Spring Boot?", description: "A deep dive into container orchestration.", image: QAImage, link: "/qna/kubernetes" },
        { title: "Python Roadmap", description: "Which API style is better?", image: QAImage, link: "/qna/rest-graphql" },
      ],
    },
    {
      id: "case-studies",
      title: "Case Studies",
      path: "/case-studies",
      items: [
        { title: "E-Commerce Growth", description: "Scaling an online store to millions.", image: CSImage, link: "/case-studies/ecommerce" },
        { title: "Banking Security", description: "How banks fight cyber threats.", image: CSImage, link: "/case-studies/banking" },
        { title: "Mobile App Profiling", description: "Scaling an online store to millions.", image: CSImage, link: "/case-studies/ecommerce" },
        { title: "Frames per second", description: "How banks fight cyber threats.", image: CSImage, link: "/case-studies/banking" },
      ],
    },
  ];


  const [activeSection, setActiveSection] = useState("blogs");
  
    // Function to detect the current section while scrolling
    const handleScroll = () => {
      const sections = ["blogs", "qna", "case-studies"];
      let currentSection = "blogs";
  
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
          }
        }
      });
  
      setActiveSection(currentSection);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);


  return (
    <Box>
      {/* Sticky Navigation Bar */}
            <Box
              sx={{
                position: "sticky",
                // top: 64, // Adjust for navbar height
                // zIndex: 10,
                top: 0, // Ensures it stays at the very top
                zIndex: 1000, // Ensures it stays above other elements
                background: "rgba(255, 255, 255, 0.8)",
                padding: "10px 0",
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                width: "100%",
              }}
            >
              {["blogs", "qna", "case-studies"].map((section) => (
                <Button
                  key={section}
                  onClick={() =>
                    document
                      .getElementById(section)
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  sx={{
                    fontWeight: activeSection === section ? "bold" : "normal",
                    color: activeSection === section ? "#1976D2" : "#555",
                    borderBottom:
                      activeSection === section ? "3px solid #1976D2" : "none",
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Button>
              ))}
            </Box>

      {/* Keep the rest of the KnowledgeBase page unchanged */}
      {sectionDetails.map((section, index) => (

        <Box>
        <Box key={section.id}
        id={section.id} sx={{height:"50px"}}>
        </Box>

        <Box key={index} sx={{ padding: "40px 5%", margin: "20px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
          <Typography variant="h5"  sx={{ fontWeight: "bold", marginBottom: "20px", color: "#1976D2" }}>
            {section.title}
          </Typography>

          <Slider {...sliderSettings}>
            {section.items.map((item, idx) => (
              <Box key={idx} sx={{ padding: "20px" }}>
                <Card
                    component={Link}
                    to={item.link}
                    sx={{
                        background: "linear-gradient(135deg,rgb(255, 255, 255), #f9f9f9)",
                        textDecoration: "none",
                        color: "#000",
                        borderRadius: "15px",
                        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // Improved shadow around the card
                        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                        margin: "0px",
                        overflow: "hidden",
                        border: "2px solid transparent",
                        "&:hover": {
                            transform: "translateY(-10px) scale(1.05)", // Moves card up slightly
                            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)", // Stronger and surrounding shadow
                        },
                    }}
                >

                  <CardMedia component="img" image={item.image} alt={item.title} sx={{
                    height: "150px",
                    width: "auto",
                    maxWidth: "100%",
                    objectFit: "contain",
                    display: "block",
                    margin: "0 auto"
                  }} />
                  <CardContent sx={{ }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333", textAlign: "center" }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#555", textAlign: "center", paddingTop: "10px" }}>
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>

        </Box>
        </Box>


      ))}
    </Box>

    
  );
};

export default KnowledgeBase;
