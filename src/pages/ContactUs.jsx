import { useState,useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  Paper,
  Divider,
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";

const ContactUs = () => {

  useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top when component mounts
    }, []);


  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_mwko8qe", // Replace with your EmailJS Service ID
        "template_gy5yd9b", // Replace with your EmailJS Template ID
        formData,
        "cKsO1eK93OS0xOkt7" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({
            first_name: "",
            last_name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setStatus("Failed to send message. Try again later.");
          console.error(error);
        }
      );
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 1rem",
        background: "linear-gradient(to right, #E3F2FD, #BBDEFB)",
      }}
    >
      <Container maxWidth="md">
        {/* Contact Form Section */}
        <Paper
          elevation={5}
          sx={{
            p: 4,
            borderRadius: 3,
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
            color: "#333",
          }}
        >
          {/* Header */}
          <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
            Get in Touch
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 3 }}>
            Have a project idea or need expert guidance? Fill out the form below,
            and we’ll get back to you soon!
          </Typography>

          <Divider sx={{ background: "rgba(255,255,255,0.5)", mb: 3 }} />

          {/* Form */}
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  fullWidth
                  required
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  fullWidth
                  required
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  required
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  fullWidth
                  required
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  fullWidth
                  required
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12} align="center">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    background: "linear-gradient(90deg, #2563EB, #1E3A8A)",
                    color: "#fff",
                    fontWeight: "bold",
                    ":hover": { background: "#0D47A1" },
                  }}
                  size="large"
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Box>

          {/* Status Message */}
          {status && (
            <Typography align="center" color="success.main" sx={{ mt: 2 }}>
              {status}
            </Typography>
          )}
        </Paper>

        {/* Contact Details Section */}
        <Box sx={{ mt: 6, textAlign: "center", color: "#1E1E1E", fontWeight: "500" }}>
          <Typography variant="h5" gutterBottom>
            Contact Information
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            You can also reach us directly via the details below.
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Email sx={{ color: "#FFD700" }} />
                <Typography variant="body1">contact@waynautic.com</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Phone sx={{ color: "#FFD700" }} />
                <Typography variant="body1">+91 9637611936</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocationOn sx={{ color: "#FFD700" }} />
                <Typography variant="body1">Pune, India</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;
