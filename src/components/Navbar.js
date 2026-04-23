import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";

import {
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        
        {/* Logo */}
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="logo" />
        </Navbar.Brand>

        {/* Toggle Button */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        {/* Navbar Links */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">

            {/* Home */}
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome /> Home
              </Nav.Link>
            </Nav.Item>

            {/* About */}
            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                <AiOutlineUser /> About
              </Nav.Link>
            </Nav.Item>

            {/* Projects */}
            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen /> Projects
              </Nav.Link>
            </Nav.Item>

            {/* Resume */}
            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                <CgFileDocument /> Resume
              </Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavBar;