
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "../Components/Signup/Signup";
import Login from "../Components/Login/Login";
import Home from "./Home";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        
      </Routes>
    </Router>
  );
};

export default AppRoutes;
