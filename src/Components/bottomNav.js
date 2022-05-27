import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box className="bottomNav">
      <Card className="outlineNav">
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" />
          <BottomNavigationAction label="About" />
          <BottomNavigationAction label="Art" />
        </BottomNavigation>
      </Card>
    </Box>
  );
}
