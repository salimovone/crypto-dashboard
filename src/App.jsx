import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/Sidebar";
import BuySell from "./views/BuySell";
import Dashboard from "./views/Home";
import Marketcap from "./views/Marketcap";
import Actives from "./views/Actives";
import View from "./views/Transactions/ViewTransaction";
import Trading from "./views/Trading";
import Search from "./views/Transactions/SearchTransaction";
import SingleTransaction from "./views/Transactions/SingleTransaction";
import Wallet from "./views/Wallet";
import Settings from "./views/Settings";
import Email from "./views/Email";
import Chats from "./views/Chats";

function App() {
  return (
    <div className="App">
      <div className="overflow-y-scroll h-screen overflow-x-hidden Scroll hidden lg:block">
        <SideBar />
      </div>
      <div className="overflow-y-scroll h-screen">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/buySell" element={<BuySell />} />
          <Route path="/trading" element={<Trading />} />
          <Route path="/marketcap" element={<Marketcap />} />
          <Route path="/buySell" element={<BuySell />} />
          <Route path="/activities" element={<Actives />} />
          <Route path="/viewTransaction" element={<View />} />
          <Route path="/transactionSearch" element={<Search />} />
          <Route path="/singleTransaction" element={<SingleTransaction />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/email" element={<Email />} />
          <Route path="/chat" element={<Chats />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
