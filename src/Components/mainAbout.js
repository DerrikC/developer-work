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
          <Typography sx={{ pt: 2 }} gutterBottom variant="h5" component="div">
            Greetings I'm Derrik 👽
          </Typography>
          <Typography sx={{ pb: 2 }} color="text.secondary">
            I'm a Front-End Developer and Digital Product Designer who's highly
            driven to create forward-thinking designs. I was recently a Graphic
            Designer and Web Developer for Western University. I'm now currently
            looking for opportunities to work with a creative team full-time!
          </Typography>
          <Typography sx={{ pb: 2 }} color="text.secondary">
            Lately, I've been itching to jump back on a skateboard so I'll
            probably be riding around this year so I'm not completely glued to a
            screen.
          </Typography>
          <Typography sx={{ pb: 2 }} color="text.secondary">
            Thanks for checking out my portfolio!
          </Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" className="projectsContainer">
        <CardContent className="description">
          <Typography sx={{ pt: 2 }} gutterBottom variant="h5" component="div">
            Work Experience
          </Typography>
          <Typography
            sx={{ pt: 2 }}
            gutterBottom
            variant="h6"
            component="div"
            color="#00bb99"
          >
            Western University
          </Typography>
          <Typography sx={{ pb: 2 }} color="text.secondary">
            Graphic Designer and Web Developer - Dec 2021
          </Typography>
          <Typography
            sx={{ pt: 2 }}
            gutterBottom
            variant="h6"
            component="div"
            color="#00bb99"
          >
            Western University
          </Typography>
          <Typography sx={{ pb: 2 }} color="text.secondary">
            Digital Media Design Assistant - Sep 2020 - Jul 2021
          </Typography>
          <Typography sx={{ pt: 2 }} gutterBottom variant="h5" component="div">
            Education
          </Typography>

          <Typography
            sx={{ pt: 2 }}
            gutterBottom
            variant="h6"
            component="div"
            color="#00bb99"
          >
            Sheridan College
          </Typography>
          <Typography sx={{ pb: 2 }} color="text.secondary">
            Postgraduate, Digital Product Design - Apr 2022
          </Typography>
          <Typography
            sx={{ pt: 2 }}
            gutterBottom
            variant="h6"
            component="div"
            color="#00bb99"
          >
            Fanshawe College
          </Typography>
          <Typography sx={{ pb: 2 }} color="text.secondary">
            Diploma, Interactive Media Design - Apr 2020
          </Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" className="projectsContainer">
        <CardContent className="description">
          <Typography sx={{ pt: 2 }} gutterBottom variant="h5" component="div">
            Process
          </Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" className="projectsContainer">
        <CardContent className="description">
          <Typography sx={{ pt: 2 }} gutterBottom variant="h5" component="div">
            Tools
          </Typography>
        </CardContent>
      </Card>
      <Contact />
    </Container>
  );
}
