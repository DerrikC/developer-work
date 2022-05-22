import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Main from './Components/intro';
import Projects from './Components/projects';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      
    <div className="App">
    <Main/>
    <Projects/>
    </div>

    </ThemeProvider>
  );
}

export default App;