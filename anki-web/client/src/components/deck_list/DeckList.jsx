import { Grid } from "@mui/material";
import PropTypes from "prop-types";

// import components
import DeckCard from "../deck_card/DeckCard";

function DeckList({ decks }) {
    return (
      <Grid container spacing={2}>
        {decks.map((deck) => (
          <Grid item xs={12} sm={6} key={deck.id}>
            <DeckCard title={deck.title} description={deck.description} />
          </Grid>
        ))}
      </Grid>
    );
  };

  DeckList.propTypes = {
    decks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string
        })
    ).isRequired
};
  
  export default DeckList;