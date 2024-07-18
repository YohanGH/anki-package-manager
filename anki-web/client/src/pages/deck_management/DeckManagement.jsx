import { Typography, Box,  Container } from "@mui/material";
import { useState } from "react";

// Import components
import DeckList from "../../components/deck_list/DeckList";
import CategorieFilter from "../../components/categorie_filter/CategorieFilter";

// Import Hook
import useFetchData from "../../hook/useFetchData";

function DeckManagement() {
    const URL = import.meta.env.VITE_API_URL;
    const [filter, setFilter] = useState('');

    // Hook param for use `useFecthData`
    const { data: decks } = useFetchData(`${URL}/deck`);
    const { data: categories } = useFetchData(`${URL}/categorie`);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    }

    return (
      <Container maxWidth="md">
        <Box sx={{ mt: "2rem", textAlign: "center" }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Manage Decks
          </Typography>
          <CategorieFilter
            categories={categories}
            filter={filter}
            handleFilterChange={handleFilterChange}
          />
          <DeckList decks={decks} />
        </Box>
      </Container>
    );
}

export default DeckManagement;