import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 350 }} className="introContainer">
      <CardContent>
        <Typography sx={{ fontSize: 24 }} color="text.primary" gutterBottom>
          Derrik Campbell
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Front-End Developer and product designer driven by curiosity.
        </Typography>
        <Stack direction="column" spacing={2} className="navContainer">
          <Button variant="contained" size="large">
            Home
          </Button>
          <Button variant="contained" size="large">
            Projects
          </Button>
          <Button variant="contained" size="large">
            Art
          </Button>
        </Stack>
        <Stack direction="row" spacing={2} className="navContainer">
          <Button variant="contained" size="large">
            LinkedIn
          </Button>
          <Button variant="contained" size="large">
            GitHub
          </Button>
          <Button variant="contained" size="large">
            Dribbble
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
