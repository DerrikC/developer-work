import { ThemeProvider, createTheme } from "@mui/material/styles";
import Main from "./Components/intro";
import Projects from "./Components/projects";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#424242"
    },
    mode: "dark"
  },
  shape: {
    borderRadius: 6
  }
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Main />
        <Projects />
      </div>
    </ThemeProvider>
  );
}

export default App;
