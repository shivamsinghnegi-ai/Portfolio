import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.png';
import navIcon5 from '../assets/img/nav-icon5.png';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <h2>Shivam Singh Negi</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              <Nav.Link href="#experiences" className={activeLink === 'experiences' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experiences')}>Experience</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#certificates" className={activeLink === 'certificates' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('certificates')}>Certificates</Nav.Link>
              <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('connect')}>Contact</Nav.Link>
            </Nav>
            <div className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/shivam-singh-negi-222853311"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/shivamsinghnegi-ai"><img src={navIcon4} alt="" /></a>
                <a href="shivamsinghnegi2006@gmail.com"><img src={navIcon5} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/seevam_ishere/"><img src={navIcon3} alt="" /></a>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}