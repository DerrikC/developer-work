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
import { Link } from "react-router-dom";

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
            <Link to="/" className="navButton">
              <Button variant="contained" size="large">
                Home
              </Button>
            </Link>
            <Link to="/about" className="navButton">
              <Button variant="contained" size="large">
                About
              </Button>
            </Link>
            <Link to="/art" className="navButton">
              <Button variant="contained" size="large">
                Art
              </Button>
            </Link>
          </Stack>

          <Stack
            direction="row"
            // spacing={1}
            // justifyContent="left"
            justifyContent="space-around"
            className="iconContainer"
          >
            <a href="https://Linkedin.com" target="_blank" rel="noreferrer">
              <Button variant="contained" size="large">
                <FaLinkedin size="1.5rem" />
              </Button>
            </a>
            <a href="https://Github.com" target="_blank" rel="noreferrer">
              <Button variant="contained" size="large">
                <BsGithub size="1.5rem" />
              </Button>
            </a>
            <a href="https://Dribbble.com" target="_blank" rel="noreferrer">
              <Button variant="contained" size="large">
                <FiDribbble size="1.5rem" />
              </Button>
            </a>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}
