import { Card, CardContent, CardActions, Typography, Button } from "@mui/material";
import PropTypes from "prop-types";

function DeckCard({ name, description }) {
    return (
      <Card sx={{ maxWidth: 345, margin: "1rem" }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Télécharger</Button>
        </CardActions>
      </Card>
    );
}

DeckCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default DeckCard;