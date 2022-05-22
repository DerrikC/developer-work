import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 874 }} className="projectsContainer">
      <CardMedia
        className="image"
        component="img"
        height="auto"
        image="/images/placeholder.png"
        alt="placeholder"
      />
      <CardContent sx={{ padding: 0, marginTop: 2 }}>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: 0, marginTop: 2 }}>
        <Stack direction="row" spacing={1}>
          <Chip label="Chip Filled" />
          <Chip label="Chip Outlined" variant="outlined" />
        </Stack>
      </CardActions>
    </Card>
  );
}
