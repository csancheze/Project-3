import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Contact from "./pages/ContactForm";
import SignupFormUser from "./pages/SignupFormUser";
import SignupFormSitter from "./pages/SignupFormSitter";
import LoginUser from "./pages/LoginUser";
import Profile from "./pages/Profile";
import LandingPage from "./pages/LandingPage";
import Catalog from "./pages/Catalog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import ProfilePetOwner from "./pages/Profile_PetOwner";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/signup-user" element={<SignupFormUser />}></Route>
          <Route path="/signup-sitter" element={<SignupFormSitter />}></Route>
          <Route path="/login-user" element={<LoginUser />}></Route>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/profile-petowner" element={<ProfilePetOwner />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
