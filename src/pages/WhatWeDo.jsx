import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import servicesImg from "../assets/services.jpg";
import productsImg from "../assets/products.jpg";
import enablersImg from "../assets/enablers.jpg";

const WhatWeDo = () => {
  const [activeSection, setActiveSection] = useState("services");

  // Function to detect the current section while scrolling
  const handleScroll = () => {
    const sections = ["services", "products", "enablers"];
    let currentSection = "services";

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
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        background: "white",
        paddingBottom: "50px",
      }}
    >
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
        {["services", "products", "enablers"].map((section) => (
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

      {/* Sections */}
      {[
        {
          id: "services",
          title: "Our Services",
          desc: "We offer a comprehensive suite of QA services, including automation testing, performance testing, DevOps, SRE, and development solutions. Our expertise ensures your systems are optimized for reliability, scalability, and peak performance.",
          img: servicesImg,
          link: "/services",
        },
        {
          id: "products",
          title: "Our Products",
          desc: "Our industry-leading software products are built for capital markets, addressing critical challenges in testing and optimizing operational efficiency.",
          img: productsImg,
          link: "/products",
        },
        {
          id: "enablers",
          title: "Our Enablers",
          desc: "We develop AI-powered tools and utilities that tackle critical business challenges, especially in quality assurance, delivering bespoke solutions tailored to each client’s unique needs.",
          img: enablersImg,
          link: "/enablers",
        },
      ].map(({ id, title, desc, img, link }, index) => (
        <Box
          key={id}
          id={id}
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: index % 2 === 0 ? "row" : "row-reverse",
            },
            alignItems: "center",
            justifyContent: "center",
            padding: { xs: "30px 20px", md: "50px 0" },
            width: "100vw", // Ensure full width
          }}
        >
          {/* Text Section */}
          <Box
            sx={{
              flex: 1,
              maxWidth: "600px",
              padding: { xs: "20px", md: "40px" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "#1976D2" }}
            >
              {title}
            </Typography>
            <Typography sx={{ marginTop: "10px", color: "#555" }}>
              {desc}
            </Typography>
            <Button
              component={Link}
              to={link}
              variant="contained"
              sx={{
                marginTop: "20px",
                background: "#1976D2",
                ":hover": { background: "#1565C0" },
              }}
            >
              More Details
            </Button>
          </Box>

          {/* Image Section */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={img}
              alt={title}
              style={{
                width: "100%",
                maxWidth: "600px",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default WhatWeDo;
