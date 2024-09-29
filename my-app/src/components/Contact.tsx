import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h2" gutterBottom>
        Meie kontaktid: foo@bar.ee
      </Typography>
      <Typography variant="h6" gutterBottom>
        Kui teil on küsimusi, võtke julgelt ühendust!
      </Typography>

      <Button 
        variant="contained" 
        color="primary" 
        component={Link} 
        to="/"
        sx={{ mt: 2 }}
      >
        Tagasi avalehele
      </Button>
    </Container>
  );
};

export default Contact;
