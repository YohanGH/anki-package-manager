import { Typography, Box,  Container, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

// Import components
import DeckCard from "../../components/deck_card/DeckCard";

function DeckManagement() {
    const [filter, setFilter] = useState('');

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    }

    return (
      <Container maxWidth="md">
        <Box sx={{ mt: "2rem", textAlign: "center" }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Gérer les Decks
          </Typography>
          <FormControl fullWidth sx={{ mb: "1rem" }}>
            <InputLabel>Filtrer</InputLabel>
            <Select
              value={filter}
              onChange={handleFilterChange}
              label="Filtrer"
            >
              <MenuItem value="filter1">Filtre 1</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ mb: "1rem" }}>{/* Display selected filters here */}</Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <DeckCard name="Deck1" description="Description 1" />
          </Box>
        </Box>
      </Container>
    );
}

export default DeckManagement;