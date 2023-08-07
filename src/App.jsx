import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/Sidebar";
import BuySell from "./views/BuySell";
import Dashboard from "./views/Home";

function App() {
  return (
    <div className="App ">
      <div className="overflow-y-scroll h-screen overflow-x-hidden Scroll">
        <SideBar />
      </div>
      <div className=" overflow-y-scroll h-screen Scroll">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/buySell" element={<BuySell/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
