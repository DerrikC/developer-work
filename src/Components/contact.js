import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { FiCopy } from "react-icons/fi";
import Popover from "@mui/material/Popover";

export default function ContactCard() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card variant="outlined" className="projectsContainer">
      <CardContent sx={{ mt: 2, mb: 2 }} className="description">
        <Typography gutterBottom variant="h5" component="div">
          Get in Touch
        </Typography>
        <Typography color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Stack className="contact" direction="row" spacing={2}>
          <Button variant="contained" size="large">
            Email Me
          </Button>
          {/* <Button
            variant="contained"
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <FiCopy size="1.5rem" />
          </Button> */}
          {/* <Popover
            id="mouse-over-popover"
            sx={{
              pointerEvents: "none"
            }}
            open={open}
            anchorEl={anchorEl}
            anchorPosition={{ top: 600, left: 400 }}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <Typography sx={{ p: 1 }}>Copy Email Address</Typography>
          </Popover> */}
        </Stack>
      </CardContent>
    </Card>
  );
}
