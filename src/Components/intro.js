import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 300 }} className="introContainer">
      <CardContent>
        <Typography sx={{ fontSize: 24 }} color="text.primary" gutterBottom>
          Derrik Campbell
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Front-End Developer and product designer driven by curiosity.
        </Typography>
        <Stack direction="column" spacing={1}>
          <Button variant="contained" size="small">
            Home
          </Button>
          <Button variant="contained" size="small">
            Projects
          </Button>
          <Button variant="contained" size="small">
            Art
          </Button>
        </Stack>
        <Button variant="contained" size="small">
          LinkedIn
        </Button>
        <Button variant="contained" size="small">
          GitHub
        </Button>
        <Button variant="contained" size="small">
          Dribbble
        </Button>
      </CardContent>
    </Card>
  );
}
