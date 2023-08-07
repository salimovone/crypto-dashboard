import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from './components/Sidebar';
import Dashboard from "./views/Home";

function App() {
  return (
    <div className="App">
      <div className="overflow-y-scroll h-[100vh]">
        <SideBar />
      </div>
      <div className="bg-page overflow-y-scroll h-[100vh]">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
