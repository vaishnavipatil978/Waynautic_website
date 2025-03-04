import React, {useEffect} from "react";
import { Container, Typography, Box, Divider, List, ListItem } from "@mui/material";

const BlogPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component mounts
      }, []);


  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: "#1976d2", fontWeight: "bold" }}>
        Mobile App Performance Profiling and Optimization
      </Typography>
      
      <Section title="Background">
        Our client, a social media application, was designed for users to post content and interact through messaging. The platform featured a dynamic home feed that continuously updated with new posts, similar to short video or image-based feeds found in modern social apps. While the application offered rich features, it struggled with performance issues that significantly impacted user experience.
        
        Users frequently reported laggy interactions, frame drops, and slow loading times, making navigation frustrating. Additionally, the app consumed excessive data and battery, further driving dissatisfaction. These challenges posed a serious threat to user retention and engagement.
      </Section>
      
      <Section title="Challenges Identified">
        The application's performance issues were linked to multiple bottlenecks:
        <List sx={{ pl: 2, listStyleType: 'disc' }}>
          <ListItem sx={{ display: 'list-item' }}><strong>Janky UI & Frame Drops:</strong> Scrolling through the home feed was not smooth, with noticeable frame janks affecting fluidity.</ListItem>
          <ListItem sx={{ display: 'list-item' }}><strong>Lagging Network Calls:</strong> Slow response times for fetching posts and sending messages made the app feel sluggish.</ListItem>
          <ListItem sx={{ display: 'list-item' }}><strong>High Data Usage:</strong> Unoptimized media handling led to unnecessary data consumption.</ListItem>
          <ListItem sx={{ display: 'list-item' }}><strong>Excessive CPU & Memory Usage:</strong> Resource-heavy processes were running inefficiently, affecting overall app stability.</ListItem>
          <ListItem sx={{ display: 'list-item' }}><strong>Battery Drain:</strong> Continuous background processes caused rapid battery depletion.</ListItem>
        </List>
      </Section>

      <Section title="What We Did">
        To address these issues, we conducted a comprehensive profiling and optimization process, targeting all key performance areas.
        
        <Typography variant="body2" sx={{ color: "#333", mt: 2 }}>
          Our team analyzed frame rendering performance and identified major causes of frame drops. By optimizing rendering logic and reducing unnecessary UI re-draws, we significantly improved scrolling smoothness and interactions. In addition, we performed an in-depth review of network requests, identifying redundant API calls and inefficient data fetching. By implementing better caching mechanisms and reducing background network activity, we minimized data usage while improving response times.
        </Typography>
        
        <List sx={{ pl: 2, listStyleType: 'disc' }}>
          <ListItem sx={{ display: 'list-item' }}><strong>UI Optimization:</strong> Reduced frame drops and improved fluidity.</ListItem>
          <ListItem sx={{ display: 'list-item' }}><strong>Network Optimization:</strong> Minimized API calls and optimized data fetching.</ListItem>
          <ListItem sx={{ display: 'list-item' }}><strong>Data Usage Reduction:</strong> Compressed media and minimized payloads.</ListItem>
          <ListItem sx={{ display: 'list-item' }}><strong>CPU & Memory Efficiency:</strong> Fixed memory leaks and optimized background tasks.</ListItem>
          <ListItem sx={{ display: 'list-item' }}><strong>Battery Optimization:</strong> Limited unnecessary background activity.</ListItem>
        </List>
      </Section>

      <Section title="Results & Impact">
        After implementing these optimizations, the app saw significant improvements across all performance metrics. The user experience was dramatically enhanced, ensuring faster interactions and smoother navigation. These improvements resulted in a more efficient platform, ultimately leading to better engagement and retention rates.
        
        <List sx={{ pl: 2, listStyleType: 'disc' }}>
          <ListItem sx={{ display: 'list-item' }}><strong>Smoother UI & Faster Load Times:</strong> Frame janks reduced by 80%.</ListItem>
          <ListItem sx={{ display: 'list-item' }}><strong>Optimized Network Performance:</strong> More efficient API calls led to 70% less network usage.</ListItem>
          <ListItem sx={{ display: 'list-item' }}><strong>Reduced Lag & Faster Responses:</strong> Improved network handling resulted in faster message delivery and content loading.</ListItem>
          <ListItem sx={{ display: 'list-item' }}><strong>Better Battery Efficiency:</strong> Reduced background activity led to longer battery life.</ListItem>
        </List>
      </Section>

      <Section title="Conclusion">
        By focusing on key performance optimizations, our team successfully transformed the social media application into a high-performance platform. The optimizations not only improved user satisfaction but also had a direct impact on engagement and retention. With further enhancements planned, including predictive performance analytics, the platform is now better positioned for future growth and scalability.
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

export default BlogPage;