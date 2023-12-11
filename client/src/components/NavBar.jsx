import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import logo from "../assets/images/logo.svg"

const NavBar = () => {
    return (
        <div>

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand><img className="nav-logo" src={logo}/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link><NavLink to="/">Product List</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/create">Create Product</NavLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </div>
    );
};

export default NavBar;