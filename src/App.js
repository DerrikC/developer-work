import { ThemeProvider, createTheme } from "@mui/material/styles";
import BottomNav from "./Components/bottomNav";
import Sidebar from "./Components/sidebar";
import Main from "./Components/main";
import Container from "@mui/material/Container";

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
    <ThemeProvider theme={darkTheme}>
      <Container>
        <div className="App">
          <Sidebar />
          <Main />
        </div>
        <BottomNav />
      </Container>
    </ThemeProvider>
  );
}

export default App;
