import BottomNav from "../Components/bottomNav";
import Sidebar from "../Components/sidebar";
import Art from "../Components/mainArt";
import Container from "@mui/material/Container";

function pageArt() {
  return (
    <Container>
      <div className="App">
        <Sidebar />
        <Art />
      </div>
      <BottomNav />
    </Container>
  );
}

export default pageArt;
