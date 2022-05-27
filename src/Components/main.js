import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { CardActionArea } from "@mui/material";

export default function MediaCard() {
  return (
    <Container className="main">
      <Card variant="outlined" className="projectsContainer">
        <CardActionArea>
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
            <Typography color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions className="chips">
            <Stack direction="row" spacing={2}>
              <Chip label="Chip Filled" />
              <Chip label="Chip Outlined" variant="outlined" />
            </Stack>
          </CardActions>
        </CardActionArea>
      </Card>
      <Card variant="outlined" className="projectsContainer">
        <CardActionArea>
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
            <Typography color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions className="chips">
            <Stack direction="row" spacing={2}>
              <Chip label="Chip Filled" />
              <Chip label="Chip Outlined" variant="outlined" />
            </Stack>
          </CardActions>
        </CardActionArea>
      </Card>
      <Card variant="outlined" className="projectsContainer">
        <CardActionArea>
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
            <Typography color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions className="chips">
            <Stack direction="row" spacing={2}>
              <Chip label="Chip Filled" />
              <Chip label="Chip Outlined" variant="outlined" />
            </Stack>
          </CardActions>
        </CardActionArea>
      </Card>
    </Container>
  );
}
