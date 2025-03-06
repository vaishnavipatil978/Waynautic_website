import React, { useEffect } from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import servicesImg from "../assets/ourServices.png";
import productsImg from "../assets/products.jpg";
import enablersImg from "../assets/enablers.jpg";
import Divider from "@mui/material/Divider";
import backgroundImage from "../assets/WhoWeAre.png"; // Replace with actual path
import { Engineering, Settings, AutoAwesome } from "@mui/icons-material";

const servicesList = [];

const cardData = [
  {
    title: "AI-Powered Software Quality",
    icon: <AutoAwesome fontSize="large" />,
  },
  { title: "Tailored Solutions", icon: <Settings fontSize="large" /> },
  { title: "SDET Engineering", icon: <Engineering fontSize="large" /> },
];

const sections = [
  {
    id: "services",
    title: "Our Services",
    desc: "We offer a comprehensive suite of QA services.",
    details: [{
      title: "Managed Services",
      description: "Expertly managed QA solutions to ensure seamless performance and consistent quality across all your projects.",
    },{
      title: "Tailored Solutions",
      description: "Custom QA strategies designed to meet your unique business needs and drive efficiency.",
    },{
      title: "Intelligent AI",
      description: "Leveraging advanced AI technologies to enhance testing accuracy, speed, and automation.",
    },
  ],
    List: [],
    img: servicesImg,
  },
  {
    id: "products",
    title: "Our Products",
    desc: "Our industry-leading software products are built for capital markets, addressing critical challenges in testing and optimizing operational efficiency. Our expertise ensures your systems are optimized for reliability, scalability, and peak performance.",
    details: [
      {
        title: "QA-Gate",
        description: "AI-enabled test management and governance suite",
      },
      {
        title: "Exgenix",
        description: "A tailored testing solution for capital markets",
      },
    ],
    List: [],
    img: productsImg,
  },
  {
    id: "enablers",
    title: "Our Enablers",
    desc: "We design AI-powered tools and utilities that address critical business challenges, with a strong focus on quality assurance. Our bespoke solutions are tailored to meet each client’s unique requirements, enhancing efficiency and precision.",
    details: [
      {
        title: "Automated Test Script Generator",
        description:
          "Reduces manual effort by over 85%, streamlining test creation",
      },
      {
        title: "AutoPerf Test Analysis Framework",
        description:
          "Fully automates the performance testing lifecycle (PTLC), eliminating manual intervention.",
      },
      {
        title: "Custom Automation Frameworks",
        description:
          "Designed for end-to-end functional testing, ensuring comprehensive coverage and reliability.",
      },
    ],
    List: [],
    img: enablersImg,
  },
];

const WhatWeDo = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <Box
      id="WhatWeDo"
      sx={{
        width: "auto",
        minHeight: "100vh",
        background: "white",
        paddingTop: 6,
      }}
    >
      <Box
        sx={{
          minHeight: "260px",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          textAlign: "center",
          mx: "auto",
          mt: 2,
          px: 3,
          // background: "#1976D2",
          padding: "30px 15px",
          borderRadius: "12px",
        }}
      >
        {/* <Divider
          sx={{ width: "80px", mx: "auto", my: 2, backgroundColor: "#1976D2" }}
        /> */}
        <Typography variant="h3" fontWeight="bold" color="#1565c0">
          What We Do
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, color: "#000000" }}>
          We are a next-gen tech company revolutionizing software testing with
          AI-driven intelligence.<br></br> Our smart solutions accelerate
          time-to-market, enhance reliability, and <br></br> optimize costs,
          ensuring superior digital experiences and a competitive edge.
        </Typography>
      </Box>
      {/* Key Offerings */}
      {/* <Grid
        container
        spacing={4}
        sx={{
          mt: 6,
          px: { xs: 2, md: 6 },
          justifyContent: "center",
          marginBottom: "60px",
        }}
      >
        {[
          { title: "AI-Powered Software Quality" },
          { title: "Tailored Solutions" },
          { title: "SDET Engineering" },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                boxShadow: "0px 4px 10px rgb(159, 210, 228)", // Blue shadow
                borderRadius: "12px",
                transition: "transform 0.3s",
                minHeight: "50px", // Ensures enough height for proper centering
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                ":hover": { transform: "scale(1.05)" },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%", // Full height for vertical centering
                  width: "100%", // Full width for alignment
                  textAlign: "center",
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid> */}
      <Grid
        container
        spacing={4}
        sx={{
          mt: 6,
          px: { xs: 2, md: 6 },
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        {cardData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
            <Card
              sx={{
                boxShadow: "0px 4px 10px rgb(159, 210, 228)", // Blue shadow
                borderRadius: "12px",
                transition: "transform 0.3s",
                minHeight: "70px", // Ensure uniform height
                display: "flex",
                flexDirection: "row", // Keep icon & text side by side
                alignItems: "center", // Align items in the center
                padding: "16px",
                width: "100%", // Ensure it fills the grid space
                ":hover": { transform: "scale(1.05)" },
              }}
            >
              {/* Icon Box */}
              <Box
                sx={{
                  color: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "50px", // Ensure space for the icon
                  marginRight: "12px", // Space between icon and text
                  fontSize: "2rem", // Adjust icon size if needed
                }}
              >
                {item.icon}
              </Box>

              {/* Text */}
              <CardContent sx={{ padding: "0 !important", flex: 1 }}>
                <Typography variant="h6" fontWeight="bold">
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      ;
      {sections.map(({ id, title, desc, details, img, List }, index) => (
        <Box key={id} id={id}>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: index % 2 === 0 ? "row" : "row-reverse",
              },
              alignItems: "center",
              justifyContent: "center",
              padding: { xs: "30px 20px", md: "25px 0" },
              width: "100%", // Ensure full width
            }}
          >
            {/* Text Section */}
            <Box
              sx={{
                flex: 1,
                maxWidth: "700px",
                padding: { xs: "20px", md: "40px" },
                textAlign: { xs: "center", md: "left" },
                paddingLeft: { xs: "25px", md: "50px" },
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", color: "#1976D2" }}
              >
                {title}
              </Typography>

              <Typography sx={{ marginTop: "15px", color: "#000000" }}>
                {desc}
              </Typography>

              {/* Show list only for the first section */}
              {List && List.length > 0 && (
                <Box sx={{ marginTop: "15px" }}>
                  <ul
                    style={{
                      paddingLeft: "20px",
                      listStyleType: "disc", // Ensures bullet points
                      color: "black", // Makes bullet points black
                    }}
                  >
                    {List.map((Listitem, ListitemIndex) => (
                      <li
                        key={ListitemIndex}
                        style={{
                          marginBottom: "8px",
                          fontWeight: "bold", // Bold text
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{ color: "black", fontWeight: "bold" }}
                        >
                          {Listitem}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
              )}

              {/* Cards for all sections */}
              <Grid
                container
                spacing={2}
                sx={{ py: { xs: 3, md: 5 }, justifyContent: "center" }}
                direction="column"
              >
                {details.map((item, itemIndex) => (
                  <Grid item xs={12} key={`${index}-${itemIndex}`}>
                    <Card
                      sx={{
                        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
                        border: "1px solid #1565c0",
                        borderRadius: "10px",
                        transition: "transform 0.3s",
                        ":hover": { transform: "scale(1.05)" },
                        textAlign: "center",
                        color: "black",
                        fontWeight: "normal",
                      }}
                    >
                      <CardContent>
                        <Typography variant="body1" fontWeight="Bold">
                          {item.title}
                        </Typography>
                        <Typography variant="body1" fontSize={14}>
                          {item.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
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
                  maxWidth: "550px",
                  height: "auto",
                  borderRadius: "10px",
                  paddingLeft: "30px",
                }}
              />
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default WhatWeDo;
