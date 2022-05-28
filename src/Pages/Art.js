import { ThemeProvider, createTheme } from "@mui/material/styles";
import BottomNav from "../Components/bottomNav";
import Sidebar from "../Components/sidebar";
import Art from "../Components/mainArt";

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

function pageArt() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Sidebar />
        <Art />
      </div>
      <BottomNav />
    </ThemeProvider>
  );
}

export default pageArt;
