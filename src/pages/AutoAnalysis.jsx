import React, {useEffect} from "react";
import { Container, Typography, Box, Divider, List, ListItem } from "@mui/material";

const AutoAnalysis = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);


  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: "#1976d2", fontWeight: "bold" }}>
        Automating Performance Test Analysis with Blazemeter Auto-Analysis Tool
      </Typography>
      
      <Section title="Overview">
        In today's fast-paced software development environment, performance testing plays a crucial role in ensuring application stability and efficiency. However, manual performance analysis is time-consuming and prone to human error. This case study explores how automating performance test analysis with the Blazemeter Auto-Analysis Tool revolutionized the testing process, reducing delays and improving accuracy.
      </Section>
      
      <Section title="Challenge">
        The client faced significant challenges in performance testing:
        <List sx={{ pl: 2, listStyleType: 'disc' }}>
          <ListItem sx={{ display: 'list-item' }}>Engineers spent considerable time manually reviewing performance test results from Blazemeter, leading to delays in identifying bottlenecks.</ListItem>
          <ListItem sx={{ display: 'list-item' }}>The lack of historical benchmarking made it difficult to compare test results against previous runs or baseline SLAs.</ListItem>
          <ListItem sx={{ display: 'list-item' }}>System performance metrics such as CPU and memory usage, monitored via Datadog, were analyzed separately, making correlation with test results cumbersome.</ListItem>
          <ListItem sx={{ display: 'list-item' }}>These inefficiencies slowed down the release cycle and increased the risk of deploying performance issues to production.</ListItem>
        </List>
      </Section>

      <Section title="Solution Provided">
        To tackle these challenges, the Blazemeter Auto-Analysis Tool was integrated into the ADO release pipeline. The solution was designed to automate performance result analysis, providing deep insights with minimal human intervention. Key capabilities included:
        <List sx={{ pl: 2, listStyleType: 'disc' }}>
          <ListItem sx={{ display: 'list-item' }}>Automated triggering of the tool when a new build was deployed.</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Fetching performance test results from Blazemeter and retrieving historical test data and baseline SLAs from the database.</ListItem>
          <ListItem sx={{ display: 'list-item' }}>AI-driven analysis to identify trends, anomalies, and potential performance regressions.</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Correlation of Datadog's CPU and memory usage statistics with performance test execution.</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Comprehensive reports with AI-generated insights and performance trends, shared automatically with stakeholders.</ListItem>
        </List>
      </Section>

      <Section title="Results & Benefits">
        The integration of the Blazemeter Auto-Analysis Tool brought immediate and measurable benefits:
        <List sx={{ pl: 2, listStyleType: 'disc' }}>
          <ListItem sx={{ display: 'list-item' }}>Reduced test analysis time from hours to minutes, accelerating the release process.</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Early detection of performance issues, allowing developers to resolve bottlenecks before deployment.</ListItem>
          <ListItem sx={{ display: 'list-item' }}>AI-driven insights that improved test result interpretation and reduced manual debugging.</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Historical benchmarking that prevented performance regressions before production release.</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Automated reporting, ensuring timely communication with all stakeholders.</ListItem>
        </List>
      </Section>

      <Section title="Conclusion">
        Automating performance test analysis with AI-driven tools like the Blazemeter Auto-Analysis Tool proved to be a game-changer for the client. The implementation not only improved testing efficiency but also provided deeper insights into system performance, leading to better decision-making. With further enhancements such as predictive analytics and anomaly detection through machine learning, the future of performance testing is set to become even more intelligent and proactive. By embracing automation, organizations can significantly enhance the quality and stability of their software releases, ensuring a seamless user experience.
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

export default AutoAnalysis;
