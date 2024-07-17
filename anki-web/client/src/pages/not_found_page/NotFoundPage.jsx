import { Container, Typography, Button } from "@mui/material"
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/");
    }

    return (
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{ fontSize: "5rem", fontWeight: "bold" }}
          color="primary"
        >
          404
        </Typography>
        <Typography
          sx={{
            fontSize: "1.5rem",
            marginBottom: "1rem",
          }}
          color="textsecondary"
        >
          Oops! Page not found.
        </Typography>
        <Button
          variant="contained"
          sx={{ marginTop: "1rem" }}
          color="primary"
          onClick={handleGoBack}
        >
          Go Back Home
        </Button>
      </Container>
    );
}

export default NotFoundPage;