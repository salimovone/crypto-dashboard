import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/Sidebar";
import BuySell from "./views/BuySell";

function App() {
  return (
    <div className="App">
      <div className="">
        <SideBar />
      </div>
      <div className="">
        <Routes>
          <Route path="/buySell" element={<BuySell/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
