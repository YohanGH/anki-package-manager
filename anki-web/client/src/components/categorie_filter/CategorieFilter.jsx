import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import PropTypes from "prop-types";

function CategorieFilter({ categories, filter, handleFilterChange }) {
    return (
      <FormControl fullWidth sx={{ mb: "1rem" }}>
        <InputLabel>Filter</InputLabel>
        <Select value={filter} onChange={handleFilterChange} label="Filtrer">
          {categories.map((categorie) => (
            <MenuItem key={categorie.id} value={categorie.title}>
              {categorie.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
}

CategorieFilter.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            title: PropTypes.string.isRequired
        })
    ).isRequired,
    filter: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    handleFilterChange: PropTypes.func.isRequired
};

export default CategorieFilter;