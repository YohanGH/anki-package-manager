import { Card, CardContent, CardActions, Typography, Button } from "@mui/material";
import PropTypes from "prop-types";

function DeckCard({ title, description }) {
    return (
      <Card sx={{ maxWidth: 345, margin: "1rem" }}>
        <CardContent>
          <Typography variant="h6">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Download</Button>
        </CardActions>
      </Card>
    );
}

DeckCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default DeckCard;