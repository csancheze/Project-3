import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Contact from './pages/ContactForm';
import SignupFormUser from './pages/SignupFormUser';
import SignupFormSitter from './pages/SignupFormSitter';
import LoginUser from './pages/LoginUser';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/signup-user" element={<SignupFormUser />}></Route>
        <Route path="/signup-sitter" element={<SignupFormSitter />}></Route>
        <Route path="/login-user" element={<LoginUser />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
