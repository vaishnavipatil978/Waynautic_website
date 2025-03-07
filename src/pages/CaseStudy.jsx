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
import MobileAppProfiling from "../assets/MobileAppProfiling.jpg";
import CustomeSolutionIMG from "../assets/CustomeSolutionIMG.png";
import AutoAnalysis from "../assets/AutoAnalysis.jpg";
import Divider from "@mui/material/Divider";
import backgroundImage from "../assets/WhoWeAre.png"; // Replace with actual path

const CaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

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
          title:
            "Automating Performance Test Analysis with Blazemeter Auto-Analysis Tool",
          image: AutoAnalysis,
          link: "/case-study/autoanalysis",
        },
        {
          title: "Mobile App Performance Profiling and Optimization",
          image: MobileAppProfiling,
          link: "/case-study/mobileappprofiling",
        },
        {
          title: "Performance Testing Using Custom Selenium JMeter Integration",
          image: CustomeSolutionIMG,
          link: "/case-study/customesolution",
        },
      ],
    },
  ];

  return (
    <Box id="CaseStudy" paddingTop={3}>
      {/* Keep the rest of the KnowledgeBase page unchanged */}
      {sectionDetails.map((section, index) => (
        <Box>
          {/* <Divider
            sx={{
              width: "80px",
              mx: "auto",
              backgroundColor: "#1976D2",
            }}
          /> */}
          <Box
            sx={{
              minHeight: "260px",
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              textAlign: "center",
              mx: "auto",
              px: 3,
              mt:7,
              // background: "#1976D2",
              padding: "30px 15px",
              borderRadius: "12px",
            }}
          >
            <Typography variant="h3" fontWeight="bold" color="#1565c0">
              Case Studies
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: "#000000" }}>
              Explore our Case Studies to see how Waynautic Technologies
              delivers innovative solutions in Performance Engineering,<br></br>
              Automation, DevOps, AI/ML Testing, and more. Discover real-world
              success stories showcasing our expertise in optimizing
              performance,<br></br> enhancing reliability, and driving business
              growth.
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
                // <CardContent
                //   sx={{
                //     display: "flex",
                //     flexDirection: "column",
                //     alignItems: "center",
                //   }}
                // >
                //   <Typography
                //     variant="h6"
                //     sx={{
                //       fontWeight: "bold",
                //       color: "#333",
                //       textAlign: "center",
                //     }}
                //   >
                //     {item.title}
                //   </Typography>

                //   <Button
                //     component={Link}
                //     to={item.link}
                //     variant="contained"
                //     color="primary"
                //     sx={{ marginTop: 2 }}
                //   >
                //     Read More
                //   </Button>
                // </CardContent>

                <Box
                  key={idx}
                  sx={{
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Card
                    component={Link}
                    to={item.link}
                    sx={{
                      textDecoration: "none",
                      color: "#000",
                      transition:
                        "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                      margin: "0px",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      borderRadius: "15px",
                      "&:hover": {
                        transform: "translateY(-10px) scale(1.05)",
                        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.title}
                      sx={{
                        height: "200px",
                        width: "auto",
                        maxWidth: "100%",
                        objectFit: "cover",
                        display: "block",
                        margin: "0 auto",
                        paddingTop: "15px",
                        borderRadius: "2px",
                      }}
                    />
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        flexGrow: 1,
                        textAlign: "center",
                        minHeight: "180px", // Ensures equal height for all cards
                      }}
                    >
                      <Box>
                        <Typography
                          variant="h7"
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
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          marginTop: "auto",
                        }}
                      >
                        <Button
                          component={Link}
                          to={item.link}
                          variant="contained"
                          color="primary"
                          sx={{ marginTop: "auto", ":hover": { color: "white" } }}
                        >
                          Read More
                        </Button>
                      </Box>
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
