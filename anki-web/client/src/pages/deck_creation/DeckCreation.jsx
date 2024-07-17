import { useState } from "react";
import { Box, Container, Typography, TextField, Button, InputLabel, MenuItem, Select, FormControl, Alert } from "@mui/material";
import notify from "../../utils/notify";

function DeckCreation() {
    const URL = import.meta.env.VITE_API_URL;
    const [filters, setFilters] = useState([]);
    const [selectFile, setSelectFile] = useState(null);
    const [fileName, setFileName] = useState("");

    const handleFiltersChange = (event) => {
        setFilters(event.target.value);
    }
    
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectFile(file);
        setFileName(file ? file.name : "");
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Create Object FormData for send in form
        const formData = new FormData();
        formData.append("title", event.target.title.value);
        formData.append("description", event.target.description.value);
        formData.append("filters", filters);
        formData.append("file", selectFile);

        // Send formData in backend with requet fetch
        try {
          // Send formData in backend with request fetch
          const response = await fetch(`${URL}/deck`, {
              method: "POST",
              headers: {"Content-Type": "application/json",},
              body: formData,
              credentials: "include",
          });

          const data = await response.json();

          if (response.status === 201) {
              // Manage response in backend
              notify("Deck created successfully!", "success");
          } else {
              throw new Error(data.error || "An error occurred while creating the deck.");
          }
      } catch (error) {
          console.error("Error: ", error);
          notify(error.message || "An error occurred.", "error");
      }
    };

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
            <FormControl variant="outlined" fullWidth sx={{ mb: "1rem" }}>
              <InputLabel>Filters</InputLabel>
              <Select
                label="Filters"
                name="filters"
                multiple
                value={filters}
                onChange={handleFiltersChange}
                renderValue={(selected) => selected.join(" ")}
              >
                <MenuItem value="filter1">Filtre 1</MenuItem>
                <MenuItem value="filter2">Filtre 2</MenuItem>
                <MenuItem value="filter3">Filtre 3</MenuItem>
              </Select>
            </FormControl>
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