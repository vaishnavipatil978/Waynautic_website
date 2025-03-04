import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blogImage from "../assets/blog.jpg";
import QAImage from "../assets/QA.jpg";
import CSImage from "../assets/caseStudy.jpg";
import Divider from "@mui/material/Divider";

const CaseStudy = () => {
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
      id: "case-studies",
      title: "Case Studies",
      path: "/case-studies",
      items: [
        {
          title: "E-Commerce Growth",
          description: "Scaling an online store to millions.",
          image: CSImage,
          link: "/case-studies/ecommerce",
        },
        {
          title: "Banking Security",
          description: "How banks fight cyber threats.",
          image: CSImage,
          link: "/case-studies/banking",
        },
        {
          title: "Mobile App Profiling",
          description: "Scaling an online store to millions.",
          image: CSImage,
          link: "/case-studies/ecommerce",
        },
        {
          title: "Frames per second",
          description: "How banks fight cyber threats.",
          image: CSImage,
          link: "/case-studies/banking",
        },
      ],
    },
  ];

  return (
    <Box id="CaseStudy">
      {/* Keep the rest of the KnowledgeBase page unchanged */}
      {sectionDetails.map((section, index) => (
        <Box>
          <Box
            sx={{
              textAlign: "center",
              maxWidth: "800px",
              mx: "auto",
              mt: 6,
              px: 3,
              // background: "#1976D2",
              padding: "30px 15px",
              borderRadius: "12px",
            }}
          >
            <Divider
              sx={{
                width: "80px",
                mx: "auto",
                my: 2,
                backgroundColor: "#1976D2",
              }}
            />
            <Typography variant="h4" fontWeight="bold" color="#1565c0">
              Case Studies
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: "#000000" }}>
              Explore our Case Studies to see how Waynautic Technologies
              delivers innovative solutions in Performance Engineering,
              Automation, DevOps, AI/ML Testing, and more. Discover real-world
              success stories showcasing our expertise in optimizing
              performance, enhancing reliability, and driving business growth.
            </Typography>
          </Box>

          <Box
            key={index}
            sx={{
              padding: "40px 5%",
              margin: "20px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* <Typography variant="h5"  sx={{ fontWeight: "bold", marginBottom: "20px", color: "#1976D2" }}>
            {section.title}
          </Typography> */}

            <Slider {...sliderSettings}>
              {section.items.map((item, idx) => (
                <Box key={idx} sx={{ padding: "20px" }}>
                  <Card
                    component={Link}
                    to={item.link}
                    sx={{
                      // background:
                      //   "linear-gradient(135deg,rgb(255, 255, 255), #f9f9f9)",
                      textDecoration: "none",
                      color: "#000",
                      // borderRadius: "15px",
                      // boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // Improved shadow around the card
                      transition:
                        "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                      margin: "0px",
                      overflow: "hidden",
                      // border: "2px solid transparent",
                      "&:hover": {
                        transform: "translateY(-10px) scale(1.05)", // Moves card up slightly
                        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)", // Stronger and surrounding shadow
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.title}
                      sx={{
                        height: "150px",
                        width: "auto",
                        maxWidth: "100%",
                        objectFit: "contain",
                        display: "block",
                        margin: "0 auto",
                      }}
                    />
                    <CardContent sx={{}}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          color: "#333",
                          textAlign: "center",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#555",
                          textAlign: "center",
                          paddingTop: "10px",
                        }}
                      >
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

export default CaseStudy;
