import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Contact from "../Components/contact";

export default function MediaCard() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <Container className="main">
      <Card variant="outlined" className="projectsContainer">
        <CardContent className="description">
          <Typography sx={{ pt: 2 }} gutterBottom variant="h5" component="div">
            Art
          </Typography>
          <Typography sx={{ pb: 2 }} color="text.secondary">
            In my spare time, I create sketches, acrylic paintings, and digital
            paintings. I am constantly learning new techniques and trying to
            apply my illustrations to practical design.
          </Typography>
        </CardContent>
      </Card>

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
        <CardMedia
          className="image"
          component="img"
          height="auto"
          image="/images/placeholder.png"
          alt="placeholder"
        />
      </Card>
      <Contact />
    </Container>
  );
}
