import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <div className="bottomNav">
      <div className="outlineNav">
        <div
          className="backNav"
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Stack spacing={2} sx={{ width: "100%" }} direction="row">
            <Link to="/">
              <Button variant="contained" size="large">
                Home
              </Button>
            </Link>
            <Link to="/About">
              <Button variant="contained" size="large">
                About
              </Button>
            </Link>
            <Link to="/Art">
              <Button variant="contained" size="large">
                Art
              </Button>
            </Link>
          </Stack>
        </div>
      </div>
    </div>
  );
}
