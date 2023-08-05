import { Routes } from "react-router-dom";
import "./App.css";
// import SideBar from ;

function App() {
  return (
    <div className="App flex">
      <div className="">
        <SideBar />
      </div>
      <div className="">
        <Routes></Routes>
      </div>
    </div>
  );
}

export default App;
