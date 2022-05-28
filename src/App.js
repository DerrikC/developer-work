import { ThemeProvider, createTheme } from "@mui/material/styles";
import BottomNav from "./Components/bottomNav";
import Sidebar from "./Components/sidebar";
import Main from "./Components/main";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#424242"
    },
    mode: "dark"
  },
  shape: {
    borderRadius: 12
  },
  shadows: "none"
});

function App() {
  return (
    // <Router>
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Sidebar />
        <Main />
      </div>
      <BottomNav />
    </ThemeProvider>
    // </Router>
  );
}

export default App;
