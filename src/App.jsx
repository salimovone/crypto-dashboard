import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/Sidebar";
import Dashboard from "./views/Home";

function App() {
  return (
    <div className="App relative">
      <div className="overflow-y-scroll h-[100vh] overflow-x-hidden Scroll">
        <SideBar />
      </div>
      <div className={`w-[250px]`}></div>
      <div className=" overflow-y-scroll Scroll">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
