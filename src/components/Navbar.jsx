import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import logo from "../assets/Waynautic.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

const handleDrawerToggle = () => {
  setMobileOpen((prev) => !prev);
};

  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const location = useLocation();



  // Scroll to section, navigating to home first if necessary
  
  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        if (id === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          scrollToElement(id);
        }
      }, 100);
    } else {
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        scrollToElement(id);
      }
    }
  };
  

  const scrollToElement = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["WhatWeDo", "WhoWeServe", "CaseStudy"];
      let currentSection = "";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    // Scroll to top only if already on the home page
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
          background: "#FFFFFF",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 16px",
          }}
        >
          <Box
      component={Link}
      to="/"
      onClick={handleClick} // Call the function on click
      sx={{
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
      }}
    >
      <img
        src={logo}
        alt="Waynautic Logo"
        style={{ height: "45px", width: "auto" }}
      />
    </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {[
              { label: "What We Do?", id: "WhatWeDo" },
              { label: "Who We Serve?", id: "WhoWeServe" },
              { label: "Case Studies", id: "CaseStudy" },
            ].map((item) => (
              <Button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                sx={{
                  color: "#1976D2",
                  // color: activeSection === item.id ? "#fff" : "#1976D2",
                  background:
                    activeSection === item.id ? "#E3F2FD" : "transparent",
                  fontWeight: "bold",
                  // ":hover": { border: "none" },
                  ":hover": { background: "#E3F2FD", border: "none" },
                  outline: "none", // Removes the default focus outline
                  border: "none", // Ensures no border appears
                  boxShadow: "none", // Removes any box-shadow effect
                  "&:focus": {
                    outline: "none",
                    border: "none",
                    boxShadow: "none",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button
              component={Link}
              to="/careers"
              sx={{ color: "#1976D2", fontWeight: "bold" }}
            >
              Careers
            </Button>
            <Button
              component={Link}
              to="/contact-us"
              variant="contained"
              sx={{
                background: "#1976D2",
                color: "#fff",
                fontWeight: "bold",
                ":hover": { color: "#fff", background: "#1b61a6" },
              }}
            >
              Contact Us
            </Button>
          </Box>

          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "#1976D2" }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Toolbar />

      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{
            width: 250,
            height: "100vh",
            background: "#FFFFFF",
            color: "#1976D2",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 1,
            position: "relative",
          }}
        >
          <IconButton
            sx={{ color: "#1976D2", position: "absolute", 
              top: 8, 
              right: 8  }}
            onClick={() => setMobileOpen(false)}

          >
            <CloseIcon />
          </IconButton>
          <List>
            {[
              { label: "What We Do?", id: "WhatWeDo" },
              { label: "Who We Serve?", id: "WhoWeServe" },
              { label: "Case Studies", id: "CaseStudy" },
            ].map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton
                  onClick={() => {
                    scrollToSection(item.id);
                    handleDrawerToggle();
                  }}
                  sx={{
                    background:
                      activeSection === item.id ? "#E3F2FD" : "transparent",
                    "&:hover": { background: "#E3F2FD" },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    sx={{
                      textAlign: "center",
                      color: "#1976D2",
                      fontWeight: "bold",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {/* Drawer Menu */}
          <List>
            {[
              { label: "Careers", path: "/careers" },
              { label: "Contact Us", path: "/contact-us" },
            ].map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={handleDrawerToggle} // Missing ">" fixed here
                >
                  <ListItemText
                    primary={item.label}
                    sx={{
                      textAlign: "center",
                      color: "#1976D2",
                      fontWeight: "bold",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
