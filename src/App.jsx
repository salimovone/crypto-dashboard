import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/Sidebar";
import Dashboard from "./views/Home";

function App() {
  return (
    <div className="App ">
      <div className="overflow-y-scroll h-screen overflow-x-hidden Scroll bg-[#fff5]">
        <SideBar />
      </div>
      <div className=" overflow-y-scroll h-screen">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
