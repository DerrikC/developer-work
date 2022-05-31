import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Contact from "../Components/contact";

export default function MediaCard() {
  return (
    <Container className="main">
      <Card variant="outlined" className="projectsContainer">
        <CardMedia
          className="image"
          component="img"
          height="auto"
          image="/images/placeholder.png"
          alt="placeholder"
        />
      </Card>
      <Card variant="outlined" className="projectsContainer">
        <CardContent className="description">
          <Typography gutterBottom variant="h5" component="div">
            Greetings I'm Derrik 👽
          </Typography>
          <Typography color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" className="projectsContainer">
        <CardContent className="description">
          <Typography gutterBottom variant="h5" component="div">
            Experience
          </Typography>
          <Typography sx={{ mb: 2 }} color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Education
          </Typography>
          <Typography color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" className="projectsContainer">
        <CardContent className="description">
          <Typography gutterBottom variant="h5" component="div">
            Get in Touch
          </Typography>
          <Typography color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
      <Contact />
    </Container>
  );
}
