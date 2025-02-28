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
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
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
      ],
    },
    {
      id: "qna",
      title: "Q & A",
      path: "/qna",
      items: [
        { title: "What is Kubernetes?", description: "A deep dive into container orchestration.", image: QAImage, link: "/qna/kubernetes" },
        { title: "REST vs GraphQL", description: "Which API style is better?", image: QAImage, link: "/qna/rest-graphql" },
      ],
    },
    {
      id: "case-studies",
      title: "Case Studies",
      path: "/case-studies",
      items: [
        { title: "E-Commerce Growth", description: "Scaling an online store to millions.", image: CSImage, link: "/case-studies/ecommerce" },
        { title: "Banking Security", description: "How banks fight cyber threats.", image: CSImage, link: "/case-studies/banking" },
      ],
    },
  ];

  const [activeSection, setActiveSection] = useState("blogs");

  const sections = [
    { id: "blogs", title: "Blogs" },
    { id: "qna", title: "Q & A" },
    { id: "case-studies", title: "Case Studies" },
  ];

  // Scroll detection for active section highlighting
  const handleScroll = () => {
    let currentSection = "blogs";
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          currentSection = id;
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
      {/* Updated Sticky Navbar */}
      <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "rgba(255, 255, 255, 0.8)",
        padding: "10px 0",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        width: "100%",
      }}
    >
      {sections.map(({ id, title }) => (
        <Button
          key={id}
          onClick={() => document.getElementById(id).scrollIntoView({ behavior: "smooth" })}
          sx={{
            fontWeight: activeSection === id ? "bold" : "normal",
            color: activeSection === id ? "#1976D2" : "#555",
            borderBottom: activeSection === id ? "3px solid #1976D2" : "none",
            transition: "border-bottom 0.2s ease-in-out",
          }}
        >
          {title}
        </Button>
      ))}
    </Box>

      {/* Keep the rest of the KnowledgeBase page unchanged */}
      {sectionDetails.map((section, index) => (
        <Box key={index} sx={{ padding: "40px 5%", margin: "20px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
          <Typography variant="h5" id={section.id} sx={{ fontWeight: "bold", marginBottom: "20px", color: "#1976D2" }}>
            {section.title}
          </Typography>

          <Slider {...sliderSettings}>
            {section.items.map((item, idx) => (
              <Box key={idx} sx={{ padding: "20px" }}>
                <Card component={Link} to={item.link} sx={{
                  background: "linear-gradient(135deg, #ffffff, #f9f9f9)",
                  textDecoration: "none",
                  color: "#000",
                  borderRadius: "15px",
                  boxShadow: "0px 6px 14px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease-in-out",
                  margin: "10px",
                  overflow: "visible",
                  border: "2px solid transparent",
                  ":hover": { transform: "scale(1.05)", boxShadow: "0px 8px 18px rgba(0,0,0,0.2)" },
                }}>
                  <CardMedia component="img" image={item.image} alt={item.title} sx={{
                    height: "150px",
                    width: "auto",
                    maxWidth: "100%",
                    objectFit: "contain",
                    display: "block",
                    margin: "0 auto"
                  }} />
                  <CardContent>
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
      ))}
    </Box>
  );
};

export default KnowledgeBase;
