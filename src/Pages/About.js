import BottomNav from "../Components/bottomNav";
import Sidebar from "../Components/sidebar";
import About from "../Components/mainAbout";
import Container from "@mui/material/Container";

function pageAbout() {
  return (
    <Container>
      <div className="App">
        <Sidebar />
        <About />
      </div>
      <BottomNav />
    </Container>
  );
}

export default pageAbout;
