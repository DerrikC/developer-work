import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

export default function ElevateAppBar(props) {
  return (
    <ThemeProvider>
      <React.Fragment>
        <CssBaseline />
        <ElevationScroll {...props}>
          <AppBar className="topNav">
            <Toolbar>
              <Link to="/">
                <IconButton
                  sx={{ mr: 4 }}
                  component={Link}
                  to="/"
                  className="headerBack"
                  aria-label="back to home"
                >
                  <ArrowBackIcon />
                </IconButton>
              </Link>
              <Typography className="title" variant="h6" component="div">
                Project Name
              </Typography>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <Toolbar />
        <Container maxWidth="sm" className="projectMain">
          <CardMedia
            sx={{ mt: 5, mb: 5 }}
            className="image"
            component="img"
            height="auto"
            image="/images/placeholder_2.png"
            alt="placeholder"
          />
          <Card variant="outlined" className="projectsContainer">
            <CardContent className="description">
              <Typography gutterBottom variant="h5" component="div">
                Details
              </Typography>
              <Typography color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
          <Stack spacing={2} sx={{ width: "100%" }}>
            <Button color="secondary" sx={{ mb: 5 }} variant="outlined">
              View Prototype
            </Button>
          </Stack>
          <Box sx={{ mb: 5 }}>
            {[...new Array(12)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join("\n")}
          </Box>
          <Alert sx={{ mb: 5 }} variant="outlined" severity="info">
            Thanks for scanning and please reach out for more details!
          </Alert>
          <Stack
            sx={{ mb: 10 }}
            className="pagination"
            direction="row"
            spacing={2}
          >
            <Button variant="contained" size="large">
              <ArrowBackIcon sx={{ mr: 2 }} />
              Last Project
            </Button>
            <Button variant="contained">
              Next Project <ArrowForwardIcon sx={{ ml: 2 }} />
            </Button>
          </Stack>
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}
