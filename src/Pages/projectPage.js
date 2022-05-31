import BottomNav from "../Components/bottomNav";
import Page from "../Components/mainProject";
import Container from "@mui/material/Container";

function projectPage() {
  return (
    <Container>
      <div className="projectPage">
        <Page />
      </div>
      <BottomNav />
    </Container>
  );
}

export default projectPage;
