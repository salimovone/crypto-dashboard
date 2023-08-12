import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/Sidebar";
import BuySell from "./views/BuySell";
import Dashboard from "./views/Home";
import Marketcap from "./views/Marketcap";
import Actives from "./views/Actives";
import View from "./views/Transactions/View-Transaction";
import Trading from "./views/Trading/";

function App() {
  return (
    <div className="App ">
      <div className="overflow-y-scroll h-screen overflow-x-hidden Scroll hidden lg:block">
        <SideBar />
      </div>
      <div className=" overflow-y-scroll h-screen">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/buySell" element={<BuySell />} />
          <Route path="/trading" element={<Trading />} />
          <Route path="/marketcap" element={<Marketcap />} />
          <Route path="/activities" element={<Actives />} />
          <Route path="/viewTransaction" element={<View />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
