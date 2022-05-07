import "./App.css";
import Contact from "./components/ContactForm";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SignupFormUser from "./pages/SignupFormUser";
import SignupFormSitter from "./pages/SignupFormSitter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/signup-user" element={<SignupFormUser />}></Route>
        <Route path="/signup-sitter" element={<SignupFormSitter />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
