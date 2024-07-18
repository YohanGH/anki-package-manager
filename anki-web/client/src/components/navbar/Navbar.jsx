import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Logo
        </Typography>
        <Box>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="create-deck">
            Create Deck
          </Button>
          <Button color="inherit" component={RouterLink} to="manage-decks">
            Decks
          </Button>
          <Button color="inherit" component={RouterLink} to="signin">
            Sign-In
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
