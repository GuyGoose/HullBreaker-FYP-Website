import React, { useState } from 'react';
import { Container, Typography, Grid, Box, Card, CardMedia } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#ffffff',
  ...theme.typography.body2,
  margin: theme.spacing(2),
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#1F282D',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#1F282D',
      paper: '#1F282D',
    },
    text: {
      primary: '#ffffff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={ darkTheme }>
      <Box sx={{ flexGrow: 0.5 }}>
        <Grid container>
          <Grid item xs={8}>
            <Item>
              <Card>
                <Typography variant="h2" component="div" gutterBottom>
                  HullBreaker
                </Typography>
                <Typography variant="h5" component="div" gutterBottom>
                  A Roguelike RPG Inspired Game
                </Typography>
              </Card>
            </Item>
            <Item>
              <Card>
              <Typography variant="h5" component="div" gutterBottom paddingTop={'1em'}>
                About
              </Typography>
              <Typography variant="body1" component="div" gutterBottom padding={'1em'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Card sx={{ flexGrow: 1, padding: '1em' }}>
                <CardMedia
                  component="img"
                  height="auto"
                  image="https://media1.tenor.com/m/X1c9C-pHRQsAAAAC/pikmin-bulborb.gif"
                  alt="HullBreaker"
                />
                <Typography variant="h6" component="div" gutterBottom paddingTop={'0.2em'}>
                  Anthony O'Keeffe
                </Typography>
                <Typography variant="body1" component="div" gutterBottom>
                  20093999
                </Typography>
              </Card>
            </Item>
            <Item>
              <Card>
              <Typography variant="h5" component="div" gutterBottom paddingTop={'1em'}>
                Links
              </Typography>
              <Typography variant="body1" component="div" gutterBottom>
                <a href="https://github.com/GuyGoose/FYP_Material" target="_blank" rel="noopener noreferrer">Github</a>
              </Typography>
              <Typography variant="body1" component="div" gutterBottom>
                <a href="" target="_blank" rel="noopener noreferrer">Demo Video</a>
              </Typography>
              <Typography variant="body1" component="div" gutterBottom paddingBottom={'1em'}>
                <a href="" target="_blank" rel="noopener noreferrer">Poster</a>
              </Typography>
              </Card>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
