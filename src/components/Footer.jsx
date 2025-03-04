import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, LinkedIn, Mail, Phone } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "rgb(19, 76, 207)", // Dark blue minimalist background
        color: "#FFFFFF",
        py: 4,
        px: { xs: 2, md: 6 },
        textAlign: "center",
      }}
    >
      {/* Company Info */}
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        Waynautic Technologies
      </Typography>
      <Typography
        variant="body2"
        sx={{ opacity: 0.8, maxWidth: 600, mx: "auto" }}
      >
        AI-driven software solutions for a smarter, scalable, and resilient future.
      </Typography>

      {/* Quick Links */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mt: 2 }}>
        {["Home", "What We Do", "Who We Are", "Knowledge Base", "Careers"].map(
          (text, index) => (
            <Link
              key={index}
              href={text.toLowerCase().replace(/ /g, "-")}
              sx={{
                color: "#FFFFFF",
                textDecoration: "none",
                opacity: 0.7,
                "&:hover": { opacity: 1 },
              }}
            >
              {text}
            </Link>
          )
        )}
      </Box>

      {/* Contact & Social Media */}
      <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 3 }}>
        <IconButton
          href="mailto:contact@waynautic.com"
          sx={{ color: "#FFFFFF", opacity: 0.7, "&:hover": { opacity: 1, color: "white" } }}
        >
          <Mail />
        </IconButton>
        <IconButton
          href="tel:+919637611936"
          sx={{ color: "#FFFFFF", opacity: 0.7, "&:hover": { opacity: 1, color: "white"  } }}
        >
          <Phone />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/company/waynautic-technologies"
          sx={{ color: "#FFFFFF", opacity: 0.7, "&:hover": { opacity: 1, color: "white"  } }}
        >
          <LinkedIn />
        </IconButton>
      </Box>

      {/* Copyright */}
      <Typography variant="body2" sx={{ opacity: 0.6, mt: 3 }}>
        © {new Date().getFullYear()} Waynautic Technologies. All Rights
        Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
