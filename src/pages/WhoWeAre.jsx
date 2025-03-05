import React,{useEffect} from "react";
import { Container, Box, Typography, Grid, Card, CardContent, Avatar, Divider } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import InsightsIcon from "@mui/icons-material/Insights";
import EngineeringIcon from "@mui/icons-material/Engineering";
// import backgroundImage from "../assets/background.jpg"; // Replace with actual path
import missionImage from "../assets/mission.jpg"; // Replace with actual path
import lifeAtWaynauticImage from "../assets/team.jpg"; // Replace with actual path
import backgroundImage from "../assets/WhoWeAre.png"; // Replace with actual path
import { Business, ShoppingCart, LocalHospital, PrecisionManufacturing, PhoneIphone, SportsEsports } from "@mui/icons-material";
import clientIMG from "../assets/clients.png"; // Replace

const domains = [
  { title: "Banking, Financial Services, and Insurance (BFSI)", icon: <Business fontSize="large" /> },
  { title: "Retail and E-Commerce", icon: <ShoppingCart fontSize="large" /> },
  { title: "Healthcare and Life Sciences", icon: <LocalHospital fontSize="large" /> },
  { title: "Manufacturing", icon: <PrecisionManufacturing fontSize="large" /> },
  { title: "Telecom", icon: <PhoneIphone fontSize="large" /> },
  { title: "Gaming and Entertainment", icon: <SportsEsports fontSize="large" /> },
];

const WhoWeAre = () => {

  useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top when component mounts
    }, []);


  return (
    <Box id="WhoWeAre" 
      sx={{
        backgroundColor: "#F9FAFC",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* Hero Section with Background Image */}
      {/* <span><Divider sx={{ width: "160px", mx: "auto", backgroundColor: "#1976D2", color:"#FFFFFF" }} /></span> */}
      
      <Box
        sx={{
          minHeight: "260px",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#FFFFFF",
          paddingTop: "0px", // Make sure there's no extra spacing
          marginTop: "0px",
        }}
      >

      <Box textAlign="center" mt={6} >
        
        <Typography variant="h4" fontWeight={700} color="#1565c0">
          Who We Are
        </Typography>
        <Typography padding={5} color="#000000" >
        At Waynautic Technologies, our mission is to deliver AI-powered software solutions that streamline testing, optimize performance, and <br></br>enhance software quality. We help businesses navigate complex technological challenges with precision, efficiency, and innovation.
        </Typography>
      </Box>   



      </Box>

      {/* About Section
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


      </Container>*/}

    <Box sx={{ width: "auto", minHeight: "auto", background: "white" }}>
          <Box
            sx={{
              textAlign: "center",
              maxWidth: "800px",
              mx: "auto",
              
              px: 3,
              padding: "30px 15px",
              borderRadius: "12px",
            }}
          >
            <Typography variant="h5" fontWeight="bold" color="#1565c0">
              Serving Clients Across Domains
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: "black" }}>
              We provide AI-driven testing solutions across multiple industries.
            </Typography>
          </Box>

          {/* <Grid container spacing={2} sx={{ px: { xs: 2, md: 6 }, justifyContent: "center", mt: 4 }}>
            {domains.map(({ title, icon }, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    boxShadow: 2,
                    borderRadius: "10px",
                    transition: "transform 0.3s",
                    ":hover": { transform: "scale(1.05)" },
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  <CardContent>
                    {icon}
                    <Typography variant="body1" fontWeight="bold" sx={{ mt: 2 }}>
                      {title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid> */}

          <Box
            sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                marginTop: 4
             }}
            >
             <img
                src={clientIMG}
                alt={clientIMG}
                style={{
                  width: "100%",
                  maxWidth: "1100px",
                  height: "auto",
                  borderRadius: "10px",
                    // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                  />
            </Box> 
        </Box>

    </Box>
  );
};

export default WhoWeAre;
