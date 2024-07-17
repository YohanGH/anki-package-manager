import { useMediaQuery, Box, Grid, Paper, Typography} from "@mui/material"
import PropTypes from "prop-types";

function MainFeaturedPost(mainFeaturedPost) {
    const { post } = mainFeaturedPost;
    const isSmallScreen = useMediaQuery("(max-width:428px)");

    return (
      <Paper
        sx={{
          position: "relative",
          backgroundColor: "grey.800",
          color: "#fff",
          mb: 4,
          mt: "3rem",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderRadius: "1rem",
          height: isSmallScreen ? "18rem" : "25rem",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            background: `url("blop")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "1rem",
            backgroundColor: "#0A1E4F",
          }}
        />
        <Grid container sx={{ borderRadius: "1rem" }}>
          <Grid item md={6}>
            <Box
              sx={{ position: "relative", p: { xs: 2, md: 5 }, pr: { md: 0 } }}
            >
              <Box
                sx={{
                  backgroundColor: isSmallScreen
                    ? "rgb(58,112,176,85%)"
                    : "rgb(58,112,176,95%)",
                  height: isSmallScreen ? "15rem" : "20rem",
                  p: "1rem",
                  borderRadius: "0.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                <Typography
                  variant="h1"
                  color="inherit"
                  gutterBottom
                  sx={{ fontSize: isSmallScreen ? "1.7rem" : "2.3rem", m: 0 }}
                >
                  {post.title}
                </Typography>
                <Typography
                  variant="h5"
                  color="inherit"
                  paragraph
                  sx={{
                    fontSize: isSmallScreen ? "1rem" : "1.3rem",
                    textJustify: "auto",
                  }}
                >
                  {post.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    );
}

MainFeaturedPost.propTypes = {
    post: PropTypes.shape({
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      imageText: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  };

export default MainFeaturedPost;