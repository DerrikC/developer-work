import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Styles/main.scss";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import About from "./Pages/About";
import Art from "./Pages/Art";
import Page from "./Pages/projectPage";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/art" element={<Art />} />
          <Route path="/projectPage" element={<Page />} />
        </Routes>
      </Router>
    </ThemeProvider>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
