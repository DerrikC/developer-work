import BottomNav from "../Components/bottomNav";
import Sidebar from "../Components/sidebar";
import About from "../Components/mainAbout";

function pageAbout() {
  return (
    <div className="App">
      <Sidebar />
      <About />
      <BottomNav />
    </div>
  );
}

export default pageAbout;
