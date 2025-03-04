import React, {useEffect} from "react";
import { Container, Typography, Box, Divider, List, ListItem } from "@mui/material";

const CustomeSolution = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component mounts
      }, []);


  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: "#1976d2", fontWeight: "bold" }}>
        Performance Testing Using Custom Selenium JMeter Integration
      </Typography>
      
      <Section title="Client Overview">
        In a recent performance testing project, we faced an interesting challenge. The client, a highly technical individual, sought to move beyond traditional API response times and gain deeper insights into the real user experience of their web application. Since the application was heavily dependent on front-end rendering, understanding UI performance was crucial for overall user satisfaction.
      </Section>
      
      <Section title="Challenges Faced">
        Traditional performance testing with JMeter primarily focuses on API response times. However, in this case, the client needed to measure actual UI rendering times—the delay users experience while interacting with the application. Given the complexity of front-end rendering, measuring API times alone was insufficient. A robust solution was required to capture performance metrics directly from the browser.
      </Section>

      <Section title="Solution Implemented">
        To overcome these challenges, we integrated Selenium with JMeter to create a custom performance testing framework. This approach enabled us to bridge the gap between backend response times and actual UI performance.
        
        <Typography variant="body2" sx={{ color: "#333", mt: 2 }}>
          Our implementation involved automating UI actions, such as navigating between pages, clicking interactive elements, and waiting for specific content to load. By capturing the time taken for elements to fully render, we ensured a comprehensive analysis of the user experience.
        </Typography>
        
        <List sx={{ pl: 2, listStyleType: 'disc' }}>
          <ListItem sx={{ display: 'list-item' }}><strong>JMeter-Selenium Integration:</strong> Implemented a JMeter script with Selenium to replicate real user interactions.</ListItem>
          <ListItem sx={{ display: 'list-item' }}><strong>UI Action Automation:</strong> Simulated end-user actions to track front-end rendering delays.</ListItem>
          <ListItem sx={{ display: 'list-item' }}><strong>Data Collection & Processing:</strong> Logged UI response times into a structured format for analysis.</ListItem>
          <ListItem sx={{ display: 'list-item' }}><strong>Custom Python Analysis:</strong> Used a Python script to compute performance metrics such as min, max, average, and 90th percentile response times.</ListItem>
        </List>
      </Section>

      <Section title="Results & Key Benefits">
        The integration of Selenium with JMeter enabled precise measurement of front-end performance, yielding several benefits:
        
        <Typography variant="body2" sx={{ color: "#333", mt: 2 }}>
          The ability to capture real-world UI performance metrics provided invaluable insights into the application’s usability. By reducing reliance on API-only performance tests, we gained a deeper understanding of how users interact with the application.
        </Typography>
        
        <List sx={{ pl: 2, listStyleType: 'disc' }}>
          <ListItem sx={{ display: 'list-item' }}><strong>Real User Experience Metrics:</strong> Measured front-end load times directly from the browser, improving accuracy.</ListItem>
          <ListItem sx={{ display: 'list-item' }}><strong>Automated API Calls:</strong> Ensured backend services were triggered naturally via UI interactions, reflecting actual user workflows.</ListItem>
          <ListItem sx={{ display: 'list-item' }}><strong>Cost-Effective Solution:</strong> Leveraged open-source tools instead of costly commercial software, reducing project expenses.</ListItem>
        </List>
      </Section>
      
      <Section title="Conclusion">
        By integrating JMeter with Selenium, we successfully measured UI performance without using expensive commercial tools. This approach enabled the client to optimize both front-end and back-end performance efficiently. Open-source solutions continue to serve as powerful alternatives to enterprise-grade testing tools, proving that high-quality results can be achieved without high costs.
      </Section>
    </Container>
  );
};

const Section = ({ title, children }) => (
  <Box sx={{ my: 3 }}>
    <Typography variant="h6" sx={{ color: "#1976d2", fontWeight: "bold" }}>
      {title}
    </Typography>
    <Divider sx={{ my: 1 }} />
    <Typography variant="body2" sx={{ color: "#333" }}>
      {children}
    </Typography>
  </Box>
);

export default CustomeSolution;
