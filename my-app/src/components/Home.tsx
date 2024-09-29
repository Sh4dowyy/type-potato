import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h2" gutterBottom>
        Tere tulemast minu rakendusse!
      </Typography>
      <Typography variant="body1">
        See on lihtne veebirakendus, kus saad tutvuda erinevate lehtedega ja kasutada vormi sisestamiseks.
      </Typography>

      <Typography variant="body1">
        Vaata ringi ja tutvu meie funktsionaalsusega.
      </Typography>

      <Button variant="contained" color="primary" component={Link} to="/form">
        Mine vormi lehele
      </Button>
    </Container>
  );
};

export default Home;
