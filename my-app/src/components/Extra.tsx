import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Extra = () => {
  const [name, setName] = useState("");
  const [interests, setInterests] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Täida oma andmed
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box mb={3}>
          <TextField
            fullWidth
            label="Sinu nimi"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Box>

        <Box mb={3}>
          <TextField
            fullWidth
            label="Sinu huvid"
            variant="outlined"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            multiline
            rows={4}
            required
          />
        </Box>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Saada
        </Button>
      </form>

      {submitted && (
        <Box mt={4} textAlign="center">
          <Typography variant="h6">Aitäh, {name}!</Typography>
          <Typography>Huvide kirjeldus: {interests}</Typography>

          {/* Call-to-action nupp */}
          <Box mt={3}>
            <Button
              variant="outlined"
              color="secondary"
              component={Link}
              to="/contact"
            >
              Võta meiega ühendust
            </Button>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default Extra;
