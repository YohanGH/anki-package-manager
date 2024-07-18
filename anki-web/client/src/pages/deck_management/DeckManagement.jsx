import { Typography, Box,  Container, FormControl, InputLabel, MenuItem, Select, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import notify from "../../utils/notify";

// Import components
import DeckCard from "../../components/deck_card/DeckCard";

function DeckManagement() {
    const URL = import.meta.env.VITE_API_URL;
    const [filter, setFilter] = useState('');
    const [decks, setDecks] = useState([]);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    }

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `${URL}/deck`
          );
  
          // Check if the response is not OK
          if (response.status !== 200) {
            const errorText = await response.text();
            console.error("Fetch error text: ", errorText);
            throw new Error("Error during data recovery.");
          }
  
          // Parse the response as JSON
          const data = await response.json();
          setDecks(data);
  
        } catch (error) {
          console.error("Fetch error: ", error);
          notify(error.message || "An error occurred.", "error");
        }
      };
      fetchData();
    }, [URL]);

    return (
      <Container maxWidth="md">
        <Box sx={{ mt: "2rem", textAlign: "center" }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Manage Decks
          </Typography>
          <FormControl fullWidth sx={{ mb: "1rem" }}>
            <InputLabel>Filter</InputLabel>
            <Select
              value={filter}
              onChange={handleFilterChange}
              label="Filtrer"
            >
              <MenuItem value="filter1">Filtre 1</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={2}>
              {decks.map((deck) => (
                <Grid item xs={12} sm={6} key={deck.id}>
                  <DeckCard title={deck.title} description={deck.description} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </Container>
    );
}

export default DeckManagement;