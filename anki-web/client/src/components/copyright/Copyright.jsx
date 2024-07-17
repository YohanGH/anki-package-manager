import { Typography, Link } from "@mui/material";

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/YohanGH/anki-package-manager">
          Anki package manager
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
    );
  }

  export default Copyright;