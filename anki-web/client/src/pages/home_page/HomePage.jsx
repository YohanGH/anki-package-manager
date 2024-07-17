import { Container, CssBaseline, Grid } from "@mui/material";

// import img
import Zen from "../../../assets/images/Zen.jpg";


// Import components
import MainFeaturedPost from "../../components/main_featured_post/MainFeaturedPost";
import FeaturedPost from "../../components/featured_post/FeaturedPost";

const mainFeaturePost = {
    title: "Welcome to Anki deck manager",
    description: "The Customised Anki Package Manager project offers an innovative solution for storing, managing and customising Anki learning packages.",
    image: Zen, // TODO : Change images
    imageText: "representation of person", // TODO : Change image text
}

/* TODO Deporting in database */
const featuredPosts = [
  {
    title: "New decks available !", // TODO : Change text
    date: "Juillet 2024",
    description: "We have just received several decks on different themes, see the deck page.", // TODO : Change text
    image: Zen, // TODO : Change images
    imageLabel: "thinking", // TODO : Change text
  },
  {
    title: "Quote : Albert Einstein", // TODO : Change text
    date: "Juillet 2024",
    description: "Knowledge is acquired through experience, everything else is just information.", // TODO : CHange text
    image: Zen, // TODO : Change images
    imageLabel: "thinking", // TODO : Change text
  },
];

function HomePage() {
    return (
      <>
        <CssBaseline />
        <Container disableGutters maxWidth={false}>
          <Container maxWidth="xl">
            <main>
              <MainFeaturedPost post={mainFeaturePost} />
              <Grid container spacing={4}>
                {featuredPosts.map((post) => (
                  <FeaturedPost key={post.title} post={post} />
                ))}
              </Grid>
            </main>
          </Container>
        </Container>
      </>
    );
}

export default HomePage;