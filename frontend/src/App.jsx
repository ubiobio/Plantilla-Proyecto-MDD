// import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppRouter from "./AppRouter";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EditUser from "./pages/EditUser";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
