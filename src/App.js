import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar
        bg="myRed"
        variant="dark"
        sticky="top"
        expand="sm"
        collapseOnSelect
      >
        <Navbar.Brand>
          <img src={logo} alt="Avatar" width="40px" height="40px" />
          Avatar
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="about-me">About Me</Nav.Link>
            <Nav.Link href="projects">Projects</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            <Nav.Link href="Resume">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="content">This is content</div>
    </div>
  );
}

export default App;
