import { useState, useEffect } from "react";
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
  Snackbar,
  Alert,
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_mwko8qe",
        "template_gy5yd9b",
        formData,
        "cKsO1eK93OS0xOkt7"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setOpenSnackbar(true); // Show snackbar
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
          setOpenSnackbar(true); // Show snackbar for failure as well
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
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Get in Touch
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 3 }}>
            Have a project idea or need expert guidance? Fill out the form
            below, and we’ll get back to you soon!
          </Typography>

          <Divider sx={{ background: "rgba(255,255,255,0.5)", mb: 3 }} />

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
        </Paper>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={4000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={() => setOpenSnackbar(false)}
            severity={status.includes("successfully") ? "success" : "error"}
            sx={{ width: "100%" }}
          >
            {status.includes("successfully")
              ? "Your message has been sent. We will connect with you shortly!"
              : "Failed to send message. Try again later."}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default ContactUs;
