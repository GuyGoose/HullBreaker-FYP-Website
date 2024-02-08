import React, { useState } from 'react';
import { Container, Typography, Grid, Box, Card, CardMedia, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import './App.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#ffffff',
  ...theme.typography.body2,
  margin: theme.spacing(2),
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));

const itemData = [
  {
    img: 'https://github.com/GuyGoose/HullBreaker-FYP-Website/blob/main/fyp-web/images/HullBreakerTempLogo.jpg?raw=true',
    title: 'HullBreaker Logo',
  },
  {
    img: 'https://github.com/GuyGoose/HullBreaker-FYP-Website/blob/main/fyp-web/images/map.png?raw=true',
    title: 'HullBreaker Map Example',
  },
];

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
      secondary: '#C6C0BF',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={ darkTheme }>
      <Box sx={{ flexGrow: 0.5 }}>
        <Item>
          <Card>
          <Typography variant="h1" component="div">
            HullBreaker
          </Typography>
          </Card>
        </Item>
        <Grid container>
          <Grid item xs={8}>
            <Item>
              <Card>
                <Typography variant="h4" component="div" gutterBottom paddingTop={'0.5em'}>
                Academic Title
                </Typography>
                <Typography sx={{color : '#C6C0BF'}} variant="h5" component="div" gutterBottom>
                  A 2D, Roguelike, RPG Unity Game with Advanced Faction Based AI, Dynamic Difficulty Adjustment and Procedural Generation
                </Typography>
              </Card>
            </Item>
            <Item>
              <Card>
              <Typography variant="h4" component="div" gutterBottom paddingTop={'1em'}>
                About
              </Typography>
              <Typography sx={{color : '#C6C0BF'}} variant="body1" component="div" gutterBottom padding={'1em'} >
              HullBreaker is a 2D role playing, roguelike game. A roguelike game is a genre of game in which death is permanent and the game is restarted upon dying. The game is set in a war-stricken galaxy called Alpha-13, based in the far future. The player takes up the role of one of several playable characters, each an ex-employee of the mega corporation HullBreakers Incorporated. The player learns at the beginning of the game that HullBreakers Inc. are responsible for the galaxy wide civil war and so they embark on a mission to take revenge on the bosses of the mega corporation. HullBreaker features many complex and engaging mechanics such as procedurally generated solar systems with roaming AI ships that can affect the worlds around them, an RPG inspired combat system with dozens of ships and weapons to be used. The game also features a dynamic enemy difficulty system to guarantee that the player always has a challenge to face on each subsequent playthrough.
              </Typography>
              </Card>
            </Item>
            <Item>
              <Card> 
              <ImageList sx={{ width: 500, height: 450 }}>
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      title={item.title}
                      position="below"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Card sx={{ flexGrow: 1, padding: '1em' }}>
                <CardMedia
                  component="img"
                  height="auto"
                  image="https://github.com/GuyGoose/HullBreaker-FYP-Website/blob/main/fyp-web/images/me.png?raw=true"
                  alt="Anthony O'Keeffe Picture"
                />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      A
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Anthony O'Keeffe" secondary="20093999"  />
                </ListItem>
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
