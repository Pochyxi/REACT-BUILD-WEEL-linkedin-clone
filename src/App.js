import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import LinkedinNavbar from "./components/LinkedinNavBar";
import MyFooter from "./components/footer/Footer";
import Profile from "./components/profilo/Profile";
import ModifyComponent from "./components/ModifyComponent";
import HomeComponent from "./components/Home/HomeComponent";

function App() {
  return (
    <BrowserRouter>
      <LinkedinNavbar />
      <Container fluid className="p-0">
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/modify" element={<ModifyComponent />} />
          <Route path="/home" element={<HomeComponent />} />
        </Routes>
      </Container>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
