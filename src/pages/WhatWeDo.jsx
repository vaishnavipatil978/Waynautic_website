import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import servicesImg from "../assets/ourServices.png";
import productsImg from "../assets/products.jpg";
import enablersImg from "../assets/enablers.jpg";
import Divider from "@mui/material/Divider";

const servicesList = [
  
];

const sections = [
  {
    id: "services",
    title: "Our Services",
    desc: "We offer a comprehensive suite of QA services.",
    details: servicesList,
    img: servicesImg,
  },
  {
    id: "products",
    title: "Our Products",
    desc: "Our industry-leading software products are built for capital markets, addressing critical challenges in testing and optimizing operational efficiency. Our expertise ensures your systems are optimized for reliability, scalability, and peak performance.",
    details: [
      "QA-Gate - AI-enabled test management and governance suite",
      "Exgenix - A tailored testing solution for capital markets"
    ],
    img: productsImg,
  },
  {
    id: "enablers",
    title: "Our Enablers",
    desc: "We design AI-powered tools and utilities that address critical business challenges, with a strong focus on quality assurance. Our bespoke solutions are tailored to meet each client’s unique requirements, enhancing efficiency and precision.",
    details: [
      "Automated Test Script Generator – Reduces manual effort by over 85%, streamlining test creation",
      "AutoPerf Test Analysis Framework – Fully automates the performance testing lifecycle (PTLC), eliminating manual intervention.",
      "Custom Automation Frameworks – Designed for end-to-end functional testing, ensuring comprehensive coverage and reliability."
    ],
    img: enablersImg,
  },
];

const WhatWeDo = () => {
  return (
    <Box id="WhatWeDo" sx={{ width:"auto", minHeight: "100vh", background: "white", py: 6 }}>


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
        <Divider sx={{ width: "80px", mx: "auto", my: 2, backgroundColor: "#1976D2" }} />
        <Typography variant="h4" fontWeight="bold" color="#1565c0">
          What We Do
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, color: "#000000" }}>
            We are a next-gen tech company revolutionizing software testing with AI-driven intelligence. Our smart solutions accelerate time-to-market, enhance reliability, and optimize costs, ensuring superior digital experiences and a competitive edge.
        </Typography>
      </Box> 

            {/* Key Offerings */}
      <Grid container spacing={4} sx={{ mt: 6, px: { xs: 2, md: 6 }, justifyContent: "center" }}>
        {[
          { title: "AI-Powered Software Quality", description: "Auto-generate, optimize, and execute test cases with precision." },
          { title: "Tailored Solutions", description: "Innovative products and enablers to address specific quality challanges." },
          { title: "SDET Engineering", description: "Software services encompassing Performance Engineering, Automation, SRE, DevOps, and all aspects of non-functional testing" },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: "0px 4px 10px rgb(159, 210, 228)", // Blue shadow
    borderRadius: "12px", transition: "transform 0.3s", minHeight:"150px" ,":hover": { transform: "scale(1.05)" } }}>
              <CardContent>
                
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      

      {sections.map(({ id, title, desc, details, img }, index) => (
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
            padding: { xs: "30px 20px", md: "50px 0" },
            width: "90vw", // Ensure full width
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
            <Typography sx={{ marginTop: "10px", color: "#000000" }}>
              {desc}
            </Typography>
            
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
                // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>
        </Box> 

        <Grid container spacing={2} sx={{ px: { xs: 2, md: 6 }, justifyContent: "center" }}>
            {details.map((item, itemIndex) => (
              <Grid item xs={12} sm={6} md={4} key={`${index}-${itemIndex}`}>
                <Card
                  sx={{
                    boxShadow: 2,
                    borderRadius: "10px",
                    transition: "transform 0.3s",
                    ":hover": { transform: "scale(1.05)" },
                    textAlign: "center",
                    // padding: "10px",
                  }}
                >
                  <CardContent>
                    <Typography variant="body1" fontWeight="bold">
                      {item}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid> 


        </Box>
      ))}
    </Box>
  );
};

export default WhatWeDo;