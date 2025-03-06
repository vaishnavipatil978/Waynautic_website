import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import { LinkedIn, Mail, WhatsApp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom"; // ✅ Correct import
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Small screens

  const navLinks = [
    { title: "Home", link: "/" },
    { title: "What We Do", link: "#WhatWeDo" },
    { title: "Who We Serve", link: "#WhoWeServe" },
    { title: "Case Studies", link: "#CaseStudy" },
    { title: "Careers", link: "/careers" },
    { title: "Contact Us", link: "/contact-us" },
  ];

  const navigate = useNavigate();

  const handleNavigation = (event, item) => {
    if (item.link.startsWith("#")) {
      event.preventDefault();

      if (window.location.pathname === "/") {
        document
          .querySelector(item.link)
          ?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          document
            .querySelector(item.link)
            ?.scrollIntoView({ behavior: "smooth" });
        }, 500);
      }
    } else {
      navigate(item.link);
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        background: "rgb(19, 76, 207)",
        color: "#FFFFFF",
        py: 4,
        px: { xs: 2, md: 6 },
        textAlign: "center",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        Waynautic Technologies
      </Typography>
      <Typography
        variant="body2"
        sx={{ opacity: 0.8, maxWidth: 600, mx: "auto" }}
      >
        AI-driven software solutions for a smarter, scalable, and resilient
        future.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row", // Switch layout based on screen size
          gap: 2, // Space between items
          alignItems: "center", // Center align items
          justifyContent: "center", // Center the navigation links
          width: "100%", // Ensure full width
          pt: 3,
        }}
      >
        {navLinks.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            onClick={(e) => handleNavigation(e, item)}
            sx={{
              color: "#FFFFFF",
              textDecoration: "none",
              opacity: 0.7,
              "&:hover": { opacity: 1, color: "#FFFFFF" },
              cursor: "pointer",
            }}
          >
            {item.title}
          </Link>
        ))}
      </Box>

      <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 3 }}>
        <IconButton
          href="mailto:contact@waynautic.com"
          sx={{
            color: "#FFFFFF",
            opacity: 0.7,
            "&:hover": { opacity: 1, color: "white" },
          }}
        >
          <Mail />
        </IconButton>
        <IconButton
          href="https://wa.me/919637611936"
          sx={{
            color: "#FFFFFF",
            opacity: 0.7,
            "&:hover": { opacity: 1, color: "white" },
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsApp />
        </IconButton>

        <IconButton
          href="https://www.linkedin.com/company/waynautic-technologies"
          target="_blank"
          sx={{
            color: "#FFFFFF",
            opacity: 0.7,
            "&:hover": { opacity: 1, color: "white" },
          }}
        >
          <LinkedIn />
        </IconButton>
      </Box>

      <Typography variant="body2" sx={{ opacity: 0.6, mt: 3 }}>
        © {new Date().getFullYear()} Waynautic Technologies. All Rights
        Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
