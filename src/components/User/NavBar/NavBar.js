import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <Navbar sticky="top" expand="lg" collapseOnSelect>
                <Navbar.Brand>
                    <h1 className="brand">Web.blogs</h1>
                </Navbar.Brand>
                <Navbar.Toggle id="toggle" />
                <Navbar.Collapse className="text-center">
                    <Nav className="ml-auto">
                        <Nav.Link>
                            <Link to="/home"><span className="navLink">HOME</span></Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/about"><span className="navLink">ABOUT</span></Link>
                        </Nav.Link>
                        {/* <p>bangladesh</p> */}
                        <NavDropdown title="BANGLADESH" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to="/politics"><span className="navLink">Politics</span></Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/society"><span className="navLink">Society</span></Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/policy issue"><span className="navLink">Policy Issue</span></Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/governance"><span className="navLink">Governance</span></Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        {/* <p>international</p> */}
                        <NavDropdown title="INTERNATIONAL" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to="/"><span className="navLink">Global Governance</span></Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/"><span className="navLink">Europe</span></Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/"><span className="navLink">North America</span></Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/"><span className="navLink">Asia</span></Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        {/* <p>public administration</p> */}
                        <NavDropdown title="PUBLIC ADMINISTRATION" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to="/"><span className="navLink">Management</span></Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/"><span className="navLink">Public Policy</span></Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/"><span className="navLink">Contemporary Governance</span></Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        {/* <p>others</p> */}
                        <NavDropdown title="OTHERS" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to="/"><span className="navLink">Knowledge Sharing</span></Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/"><span className="navLink">Idea</span></Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/"><span className="navLink">Problem Solution</span></Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link>
                            <Link to="/admin"><span className="navLink">ADMIN</span></Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/login"><span className="navLink">LOGIN</span></Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;