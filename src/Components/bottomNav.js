// import * as React from "react";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import BottomNavigation from "@mui/material/BottomNavigation";
// import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";

// export default function SimpleBottomNavigation() {
//   const [value, setValue] = React.useState(0);

//   return (
//     <div className="bottomNav">
//       <div className="outlineNav">
//         <div
//           className="backNav"
//           showLabels
//           value={value}
//           onChange={(event, newValue) => {
//             setValue(newValue);
//           }}
//         >
//           <Stack>
//             <Link to="/">
//               <Button variant="contained" size="large">
//                 Home
//               </Button>
//             </Link>
//             <Link to="/About">
//               <Button variant="contained" size="large">
//                 About
//               </Button>
//             </Link>
//             <Link to="/Art">
//               <Button variant="contained" size="large">
//                 Art
//               </Button>
//             </Link>
//           </Stack>
//         </div>
//       </div>
//     </div>
//   );
// }

import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box className="bottomNav">
      <BottomNavigation
        className="outlineNav"
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          className="pill"
          label="Home"
          component={RouterLink}
          to="/"
        />
        <BottomNavigationAction
          className="pill"
          label="About"
          component={RouterLink}
          to="/About"
        />
        <BottomNavigationAction
          className="pill"
          label="Art"
          component={RouterLink}
          to="/Art"
        />
      </BottomNavigation>
    </Box>
  );
}
