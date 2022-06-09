import About from "./AboutUs/About";
import { transitions, positions, Provider as AlertProvider } from "react-alert";

import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import login from "./LoginPage/login";
import Home from "./Home/Home";
import Register from "./Registration/Register";
import bgImage from "./Video/Background-img.mp4";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./LoginPage/login";
import TeacherDashboard from "./TeacherDashboard/TeacherDashboard";
import StudentDashboard from "./StudentDashboard/StudentDashboard";
import AlertTemplate from "react-alert-template-basic";

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

const App = () => {
  const style = {
    fontSize: "22px",
    FontFamily: "Courier New",
  };
  return (
    <>
      <AlertProvider template={AlertTemplate} {...options}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<About />} />
          <Route path="/Registration" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/StudentDashboard" element={<StudentDashboard />} />
          <Route path="/TeacherDashboard" element={<TeacherDashboard />} />
        </Routes>
        <Footer />
      </AlertProvider>
    </>
  );
};

export default App;
