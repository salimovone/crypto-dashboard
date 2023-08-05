import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from './components/Sidebar';
import Dashboard from "./views/Home";

function App() {
  return (
    <div className="App">
      <div className="">
        <SideBar />
      </div>
      <div className="bg-page">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
