import BottomNav from "../Components/bottomNav";
import Sidebar from "../Components/sidebar";
import Main from "../Components/main";
import Container from "@mui/material/Container";

function Home() {
  return (
    <Container>
      <div className="App">
        <Sidebar />
        <Main />
      </div>
      <BottomNav />
    </Container>
  );
}

export default Home;
