import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import React Router for navigation
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
  Popper,
  Paper,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import logo from "../assets/Waynautic.png"; // Import your logo

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Handle hover for dropdown
  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      {/* Navbar with White Background */}
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
          background: "#FFFFFF",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Adds shadow
          //   borderBottom: "1px solid #ddd",
          // minHeight: "90px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            maxWidth: "100%", // Ensure it does not exceed screen width
            padding: "0 16px", // Prevent content from touching screen edges
            boxSizing: "border-box",
            // minHeight: "70px",
          }}
        >
          {/* Left Section - Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <img
              src={logo}
              alt="Waynautic Logo"
              style={{ height: "45px", width: "auto", padding: "2"}}
            />
          </Box>

          {/* Center Section (Desktop Only) */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {/* Dropdown for "What We Do?" */}
            <Button
              onMouseEnter={handleMouseEnter}
              component={Link}
              to="/what-we-do"
              sx={{
                color: "#1976D2",
                fontWeight: "bold",
                ":hover": { background: "#E3F2FD" },
              }}
            >
              What We Do?
            </Button>

            {/* Other Navigation Links */}
            {[
              { label: "Who are we?", path: "/who-we-are" },
              { label: "Knowledge Base", path: "/knowledge-base" },
            ].map((item, index) => (
              <Button
                key={index}
                component={Link}
                to={item.path}
                sx={{
                  color: "#1976D2",
                  fontWeight: "bold",
                  ":hover": { background: "#E3F2FD" },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Right Section (Desktop Only) */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button
              component={Link}
              to="/careers"
              sx={{
                color: "#1976D2",
                fontWeight: "bold",
                ":hover": { background: "#E3F2FD" },
              }}
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
                fontWeight: "bold", // Set consistent font weight
                ":hover": { background: "#1565C0", color: "#fff" },
              }}
            >
              Contact Us
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "#1976D2" }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Push Content Down (So It Doesn't Overlap) */}
      <Toolbar />

      {/* Sidebar Drawer for Mobile */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{
            width: 250,
            height: "100vh",
            background: "#FFFFFF",
            color: "#1976D2",
          }}
        >
          {/* Close Button */}
          <IconButton
            sx={{ float: "right", margin: 1, color: "#1976D2" }}
            onClick={handleDrawerToggle}
          >
            <CloseIcon />
          </IconButton>

          {/* Drawer Menu */}
          <List>
            {[
              { label: "What We Do?", path: "/what-we-do" },
              { label: "Who are we?", path: "/who-we-are" },
              { label: "Knowledge Base", path: "/knowledge-base" },
              { label: "Careers", path: "/careers" },
              { label: "Contact Us", path: "/contact-us" },
            ].map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={handleDrawerToggle}
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
