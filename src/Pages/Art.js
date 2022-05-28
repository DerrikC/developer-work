import { ThemeProvider, createTheme } from "@mui/material/styles";
import BottomNav from "../Components/bottomNav";
import Sidebar from "../Components/sidebar";
import Main from "../Components/main";

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

function Art() {
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

export default Art;
