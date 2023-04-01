import Feed from "./components/Feed";
import LeftSidebar from "./components/LeftSidebar";
import NavBar from "./components/NavBar";
import RightSidebar from "./components/RightSidebar";

function App() {
  return (
    <div className="bg-[#F0F2F5]">
      <NavBar />
      <main className="flex items-start justify-between px-2 pt-3">
        <LeftSidebar />
        <Feed />
        <RightSidebar />
      </main>
    </div>
  );
}

export default App;
