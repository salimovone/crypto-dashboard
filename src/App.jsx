import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/Sidebar";
import BuySell from "./views/BuySell";
import Dashboard from "./views/Home";
import Marketcap from "./views/Marketcap";
import Actives from "./views/Actives";
import View from "./views/Transactions/ViewTransaction";
import Search from "./views/Transactions/SearchTransaction";
import SingleTransaction from "./views/Transactions/SingleTransaction";

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
          <Route path="/marketcap" element={<Marketcap/>}/>
          <Route path="/activities" element={<Actives/>}/>
          <Route path="/viewTransaction" element={<View/>}/>
          <Route path="/transactionSearch" element={<Search/>}/>
          <Route path="/singleTransaction" element={<SingleTransaction/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
