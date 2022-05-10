import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Contact from "./pages/ContactForm";
import SignupFormUser from "./pages/SignupFormUser";
import SignupFormSitter from "./pages/SignupFormSitter";
import LoginUser from "./pages/LoginUser";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});


function App() {
  return (
<<<<<<< HEAD
    <ApolloProvider client={client}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/signup-user" element={<SignupFormUser />}></Route>
          <Route path="/signup-sitter" element={<SignupFormSitter />}></Route>
          <Route path="/login-user" element={<LoginUser />}></Route>
          <Route path="/" element={<LandingPage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
=======
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/signup-user" element={<SignupFormUser />}></Route>
        <Route path="/signup-sitter" element={<SignupFormSitter />}></Route>
        <Route path="/login-user" element={<LoginUser />}></Route>
      </Routes>
      <Footer />
    </Router>
>>>>>>> 0ebb2ba45e6c826027d280f43bddfb22b478d85d
  );
}

export default App;
