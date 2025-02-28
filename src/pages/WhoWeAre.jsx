import React from "react";
import { Container, Box, Typography, Grid, Card, CardContent, Avatar, Divider } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import InsightsIcon from "@mui/icons-material/Insights";
import EngineeringIcon from "@mui/icons-material/Engineering";
import backgroundImage from "../assets/background.jpg"; // Replace with actual path
import missionImage from "../assets/mission.jpg"; // Replace with actual path
import lifeAtWaynauticImage from "../assets/team.jpg"; // Replace with actual path

// Sample team members (Replace images with actual URLs)
const teamMembers = [
  { name: "Tyler Murphy", position: "Director", image: "path/to/tyler.jpg" },
  { name: "Christina Fuller", position: "Controller", image: "path/to/christina.jpg" },
  { name: "Dylan Robertson", position: "Head of IT", image: "path/to/dylan.jpg" },
  { name: "Juan Martinez", position: "Head of Operations", image: "path/to/juan.jpg" },
  { name: "Joel Garza", position: "Project Manager", image: "path/to/joel.jpg" },
  { name: "Owen McKenzie", position: "Support Manager", image: "path/to/owen.jpg" },
];

const WhoWeAre = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F9FAFC",
        minHeight: "100vh",
        pb: 6,
        overflowX: "hidden",
      }}
    >
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          height: "60vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#FFFFFF",
          paddingTop: "0px", // Make sure there's no extra spacing
          marginTop: "0px",
        }}
      >

      <Box textAlign="center" mt={6} mb={8}>
        <Typography variant="h3" fontWeight={700}>
          Who We Are
        </Typography>
        <Typography padding={5}>
          At Waynautic Technologies, our mission is to provide AI-powered solutions that help businesses <br></br>navigate their technological challenges with precision and innovation.
        </Typography>
      </Box>   



      </Box>

      {/* About Section */}
      <Container>

      <Box sx={{ width: "100%", background: "#F4F7FC", py: 6 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" color="#0A192F">
        Life at Waynautic
      </Typography>

      <Divider sx={{ width: "80px", mx: "auto", my: 2, backgroundColor: "#1976D2" }} />

      <Grid container spacing={4} sx={{ mt: 4, px: { xs: 2, md: 6 }, alignItems: "center" }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3, borderRadius: "12px", background: "white", p: 3 }}>
            <CardContent>
              <Typography variant="body1" color="text.secondary">
                At Waynautic Technologies, we foster an environment of innovation, collaboration, and continuous growth. 
                Our team thrives on solving complex challenges with cutting-edge AI-driven solutions, pushing the boundaries of technology. 
                We believe in work-life balance, ensuring a culture where creativity meets productivity. With a diverse team of passionate professionals, 
                we encourage learning, mentorship, and an open exchange of ideas. Whether working remotely or in-office, every employee at Waynautic enjoys 
                opportunities to excel, grow, and contribute to impactful projects that shape the future of technology.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={lifeAtWaynauticImage}
            alt="Life at Waynautic"
            sx={{
              width: "100%",
              borderRadius: "12px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Grid>
      </Grid>
    </Box>


    <Box sx={{ width: "100%", background: "#F4F7FC", py: 6 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" color="#0A192F">
          About Us
      </Typography>

      <Divider sx={{ width: "80px", mx: "auto", my: 2, backgroundColor: "#1976D2" }} />

      <Grid container spacing={4} sx={{ mt: 4, px: { xs: 2, md: 6 }, alignItems: "center" }}>
        <Grid item xs={12} md={6}>
        <Box
            component="img"
            src={missionImage}
            alt="Life at Waynautic"
            sx={{
              width: "100%",
              borderRadius: "12px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          

<Card sx={{ boxShadow: 3, borderRadius: "12px", background: "white", p: 3 }}>
          <CardContent>
              <Typography variant="body1" color="text.secondary">
              At Waynautic Technologies Private Limited, we are dedicated to delivering excellence by helping businesses navigate their technological challenges with precision and innovation. Our mission is simple: to provide AI-powered, cutting-edge solutions and services that solve our clients’ most complex problems, driving them toward success in an ever-evolving digital landscape.

              With a core focus on Performance Engineering, Quality Assurance, and Custom Solutions, we pride ourselves on offering tailored strategies that empower our clients to achieve their business objectives efficiently and effectively. Whether it’s through our proprietary software products designed for the capital markets or our comprehensive suite of IT services, we consistently strive to deliver value and measurable results.
              </Typography>
            </CardContent>
          </Card>


        </Grid>
      </Grid>
    </Box>


        {/* What We Do Section */}
        <Box textAlign="center" m={8}>
          <Typography variant="h4" fontWeight={600} sx={{ color: "#000000" }}>
            What We Do
          </Typography>
          <Divider sx={{ width: "80px", mx: "auto", my: 2, backgroundColor: "#1976D2" }} />
          <Grid container spacing={4} justifyContent="center">
            {[
              { icon: <EngineeringIcon fontSize="large" />, title: "Engineering Excellence", text: "We create robust, scalable, and innovative solutions." },
              { icon: <InsightsIcon fontSize="large" />, title: "Data-Driven Decisions", text: "Our solutions leverage AI and analytics to drive results." },
              { icon: <PeopleAltIcon fontSize="large" />, title: "Customer-Centric Approach", text: "We prioritize user experience and client needs." },
            ].map((item, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Card
                  sx={{
                    p: 3,
                    textAlign: "center",
                    borderRadius: 3,
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Box sx={{ color: "#1976D2", mb: 2 }}>{item.icon}</Box>
                  <Typography variant="h6" sx={{ color: "#000000", fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray", mt: 1 }}>
                    {item.text}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Team Section */}
        <Box textAlign="center">
          <Typography variant="h4" fontWeight={600} sx={{ color: "#000000", mb: 4 }}>
            Meet Our Team
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    p: 3,
                    textAlign: "center",
                    borderRadius: 3,
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                >
                  <Avatar
                    alt={member.name}
                    src={member.image}
                    sx={{ width: 100, height: 100, mx: "auto", mb: 2 }}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ color: "#000000", fontWeight: 600 }}>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "gray" }}>
                      {member.position}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default WhoWeAre;
