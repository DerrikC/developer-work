import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { CardActionArea } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Contact from "../Components/contact";

export default function MediaCard() {
  return (
    <Container className="main">
      <Card sx={{ mt: 5 }} variant="outlined" className="intro">
        <CardContent className="description">
          <Typography sx={{ mt: 2 }} gutterBottom variant="h5" component="div">
            Derrik Campbell
          </Typography>
          <Typography sx={{ mb: 2 }} color="text.secondary">
            Front-End Developer and product designer driven by curiosity.
          </Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" className="projectsContainer">
        <CardActionArea component={RouterLink} to="/projectPage">
          <CardMedia
            className="image"
            component="img"
            height="auto"
            image="/images/placeholder.png"
            alt="placeholder"
          />
          <CardContent className="description">
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography sx={{ mb: 2 }} color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
            <Stack direction="row" sx={{ mb: 2 }} spacing={2}>
              <Chip label="Chip Filled" />
              <Chip label="Chip Outlined" variant="outlined" />
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card variant="outlined" className="projectsContainer">
        <CardActionArea component={RouterLink} to="/projectPage">
          <CardMedia
            className="image"
            component="img"
            height="auto"
            image="/images/placeholder.png"
            alt="placeholder"
          />
          <CardContent className="description">
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography sx={{ mb: 2 }} color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
            <Stack direction="row" sx={{ mb: 2 }} spacing={2}>
              <Chip label="Chip Filled" />
              <Chip label="Chip Outlined" variant="outlined" />
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card variant="outlined" className="projectsContainer">
        <CardActionArea component={RouterLink} to="/projectPage">
          <CardMedia
            className="image"
            component="img"
            height="auto"
            image="/images/placeholder.png"
            alt="placeholder"
          />
          <CardContent className="description">
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography sx={{ mb: 2 }} color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
            <Stack direction="row" sx={{ mb: 2 }} spacing={2}>
              <Chip label="Chip Filled" />
              <Chip label="Chip Outlined" variant="outlined" />
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
      <Contact />
    </Container>
  );
}
