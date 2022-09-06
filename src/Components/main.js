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
      <Card variant="outlined" className="intro">
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
              Algonquin First Nation Site
            </Typography>
            <Typography sx={{ mb: 2 }} color="text.secondary">
              A redesign concept I did for my First Nation community in Mattawa
              Ontario.
            </Typography>
            <Stack direction="row" sx={{ mb: 2 }} spacing={2}>
              <Chip label="HTML" variant="outlined" />
              <Chip label="CSS" variant="outlined" />
              <Chip label="LIQUID" variant="outlined" />
              <Chip label="UX DESIGN" variant="outlined" />
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
              Elections Canada Login Authentication
            </Typography>
            <Typography sx={{ mb: 2 }} color="text.secondary">
              Concept voting application for elections Canada.
            </Typography>
            <Stack direction="row" sx={{ mb: 2 }} spacing={2}>
              <Chip label="SCSS" variant="outlined" />
              <Chip label="REACT.JS" variant="outlined" />
              <Chip label="API" variant="outlined" />
              <Chip label="UX DESIGN" variant="outlined" />
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
              Crypto Tracker
            </Typography>
            <Typography sx={{ mb: 2 }} color="text.secondary">
              A responsive crypto currency price tracking application.
            </Typography>
            <Stack direction="row" sx={{ mb: 2 }} spacing={2}>
              <Chip label="HTML" variant="outlined" />
              <Chip label="SCSS" variant="outlined" />
              <Chip label="REACT.JS" variant="outlined" />
              <Chip label="API" variant="outlined" />
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
              Western CREVAWC
            </Typography>
            <Typography sx={{ mb: 2 }} color="text.secondary">
              Developed and supported the maintenance of content on 7 different
              sites for departments within the Faculty of Education.
            </Typography>
            <Stack direction="row" sx={{ mb: 2 }} spacing={2}>
              <Chip label="CMS" variant="outlined" />
              <Chip label="HTML" variant="outlined" />
              <Chip label="CSS" variant="outlined" />
              <Chip label="ADOBE SUITE" variant="outlined" />
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
      <Contact />
    </Container>
  );
}
