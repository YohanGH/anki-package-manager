import { Box, Container, Typography, TextField, Button, Alert } from "@mui/material";

// import components 
import CategorieFilter from "../../components/categorie_filter/CategorieFilter";

// Import Hook
import useDeckCreation from "../../hook/useDeckCreation";
import useFetchData from "../../hook/useFetchData";

function DeckCreation() {
    const URL = import.meta.env.VITE_API_URL;
    
    // Hook useDeckCreation
    const {
      filter,
      fileName,
      handleFilterChange,
      handleFileChange,
      handleSubmit,
    } = useDeckCreation(URL);

    // Hook param for use `useFecthData`
    const { data: categories } = useFetchData(`${URL}/categorie`);

    return (
      <Container maxWidth="sm">
        <Box sx={{ mt: "2rem", textAlign: "center" }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Create a Deck
          </Typography>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { mb: "1rem", width: "100%" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField resource label="Title" variant="outlined" name="title" />
            <TextField
              resource
              label="Description"
              variant="outlined"
              name="description"
              multiline
              rows={4}
            />
            <CategorieFilter
              categories={categories}
              filter={filter}
              handleFilterChange={handleFilterChange}
            />
            <Button variant="contained" component="label" fullWidth>
              Download
              <input
                type="file"
                hidden
                name="file"
                onChange={handleFileChange}
              />
            </Button>
            {fileName && (
              <Alert severity="info" sx={{ mt: "1rem " }}>
                Selected file : {fileName}
              </Alert>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: "1rem" }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Container>
    );
}

export default DeckCreation;