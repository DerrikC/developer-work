import { ThemeProvider, createTheme } from "@mui/material/styles";
import BottomNav from "./Components/bottomNav";
import Sidebar from "./Components/sidebar";
import Main from "./Components/main";
// import { left } from "@popperjs/core";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#424242"
    },
    mode: "dark"
  },
  shape: {
    borderRadius: 10
  },
  shadows: "none"
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Sidebar />
        <Main />
      </div>
      <BottomNav />
    </ThemeProvider>
  );
}

export default App;
