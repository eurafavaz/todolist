// import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../src/views/Home"
import { Routes, Route } from "react-router-dom";
import { CreateTask } from "./components/CreateTask/CreateTask";

function App() {
  return (
    <div className="App">
      <CreateTask/>
      <Navbar />
      <h1>Todolist h1 do App</h1>
      <Home/>
      <Routes>{/* <Route path="/" element={}/> */}</Routes>
    </div>
  );
}

export default App;
