import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My app
        </Typography>
        <Button color="inherit">
          <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Home
          </NavLink>
        </Button>
        <Button color="inherit" component={NavLink} to="/form">
          Form
        </Button>
        <Button color="inherit" component={NavLink} to="/extra">
          Extra
        </Button>
        <Button color="inherit" component={NavLink} to="/contact">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
