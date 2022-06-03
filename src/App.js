import About from './AboutUs/About';
import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import login from './LoginPage/login';
import SignUp from './SignUpPage/SignUp';
import Home from './Home/Home';
import Register from './Registration/Register';
import bgImage from './Video/Background-img.mp4';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './LoginPage/login';
import TeacherDashboard from './TeacherDashboard/TeacherDashboard';
import StudentDashboard from './StudentDashboard/StudentDashboard';

const App = () => {
  const style={
    fontSize : "22px",
    FontFamily : "Courier New",
  }
  return (
     <>
       <NavBar/>
       
       <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Contact" element={<About />}/>
          <Route path="/Registration" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/StudentDashboard" element={< StudentDashboard/>}/>
          <Route path="/TeacherDashboard" element={< TeacherDashboard/>}/>
        </Routes>
       <Footer/> 
     </>
  );
}

export default App;
