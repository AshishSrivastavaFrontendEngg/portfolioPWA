// components/Header.tsx

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Ashish Srivastava
        </Typography>
        <Button component={Link} to="/" color="inherit">
          Home
        </Button>
        <Button component={Link} to="/about" color="inherit">
          About
        </Button>
        <Button component={Link} to="/projects" color="inherit">
          Projects
        </Button>
        <Button component={Link} to="/contact" color="inherit">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
