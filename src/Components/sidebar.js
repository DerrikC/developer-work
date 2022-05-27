import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { FiDribbble } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

export default function BasicCard() {
  return (
    <Container className="sideBarContainer">
      <Card
        variant="outlined"
        // sx={{ minWidth: 350, maxWidth: 350 }}
        className="sideBar"
      >
        <CardContent className="introContainer">
          <Typography sx={{ fontSize: 24 }} color="text.primary" gutterBottom>
            Derrik Campbell
          </Typography>
          <Typography color="text.secondary">
            Front-End Developer and product designer driven by curiosity.
          </Typography>
        </CardContent>
        <CardContent className="navContainer">
          <Stack
            direction="column"
            sx={{ mb: 2 }}
            spacing={2}
            className="buttonContainer"
          >
            <Button variant="contained" size="large">
              Home
            </Button>
            <Button variant="contained" size="large">
              About
            </Button>
            <Button variant="contained" size="large">
              Art
            </Button>
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            className="iconContainer"
          >
            <Button variant="contained" size="large">
              <FaLinkedin size="1.8rem" />
            </Button>
            <Button variant="contained" size="large">
              <BsGithub size="1.8rem" />
            </Button>
            <Button variant="contained" size="large">
              <FiDribbble size="1.8rem" />
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}
