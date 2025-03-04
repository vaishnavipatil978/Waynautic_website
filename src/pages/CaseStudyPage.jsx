const CaseStudyPage = () => {
    const { id } = useParams();
    const study = caseStudies[id];
  
    if (!study) return <Typography variant="h6">Case Study Not Found</Typography>;
  
    return (
      <Container>
        <div className="header-image" style={{ backgroundImage: `url(${study.image})` }}>
          <Typography variant="h3" className="header-text">{study.title}</Typography>
        </div>
        <Card style={{ marginTop: 20, padding: 20 }}>
          {study.overview && (
            <>
              <Typography variant="h5">Overview</Typography>
              <Typography variant="body1">{study.overview}</Typography>
            </>
          )}
  
          {study.challenge && (
            <>
              <Typography variant="h5" style={{ marginTop: 20 }}>Challenge</Typography>
              <Typography variant="body1">{study.challenge}</Typography>
            </>
          )}
  
          {study.solution && (
            <>
              <Typography variant="h5" style={{ marginTop: 20 }}>Solutions Provided</Typography>
              <Typography variant="body1">{study.solution}</Typography>
            </>
          )}
  
          {study.results && (
            <>
              <Typography variant="h5" style={{ marginTop: 20 }}>Results & Benefits</Typography>
              <Typography variant="body1">{study.results}</Typography>
            </>
          )}
  
          {study.conclusion && (
            <>
              <Typography variant="h5" style={{ marginTop: 20 }}>Conclusion</Typography>
              <Typography variant="body1">{study.conclusion}</Typography>
            </>
          )}
        </Card>
      </Container>
    );
  };
  
  export default CaseStudyPage;