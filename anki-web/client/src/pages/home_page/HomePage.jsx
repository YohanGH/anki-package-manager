import { Container, CssBaseline, Grid } from "@mui/material";

// import img
import Zen from "../../../assets/images/Zen.jpg";


// Import components
import MainFeaturedPost from "../../components/main_featured_post/MainFeaturedPost";
import FeaturedPost from "../../components/featured_post/FeaturedPost";

const mainFeaturePost = {
    title: "Bienvenue sur Anki deck manager",
    description: "Le projet Gestionnaire de Paquets Anki Personnalisés offre une solution innovante pour le stockage, la gestion et la personnalisation de paquets d'apprentissage Anki.",
    image: Zen, // TODO : Change images
    imageText: "LoremIpsum", // TODO : Change image text
    linkText: "Lire la suite...",
}

/* TODO Deporting in database */
const featuredPosts = [
  {
    title: "LoremIpsum", // TODO : Change text
    date: "Juillet 2024",
    description: "LoremIpsum", // TODO : Change text
    image: Zen, // TODO : Change images
    imageLabel: "thinking", // TODO : Change text
  },
  {
    title: "LoremIpsum", // TODO : Change text
    date: "Juillet 2024",
    description: "LoremIpsum", // TODO : CHange text
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
              {/* <Grid container spacing={5} sx={{ mt: 3 }}>
                <MainContent title="From the firehose" />
              </Grid> */}
            </main>
          </Container>
        </Container>
      </>
    );
}

export default HomePage;