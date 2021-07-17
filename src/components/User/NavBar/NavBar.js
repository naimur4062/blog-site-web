import React, { useContext, useEffect, useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AdminContext, UserContext } from '../../../App';
import Login from '../Login/Login';
import './NavBar.css';
import jwt_decode from 'jwt-decode';

const NavBar = () => {
    const [isAdmin, setIsAdmin] = useContext(AdminContext);
    const [adminLogin, setAdminLogin] = useState(false);
    const [user, setUser] = useContext(UserContext);
    // const decodedName = jwt_decode(sessionStorage.getItem('token')).name;
    // const decodedEmail = jwt_decode(sessionStorage.getItem('token')).email;

    useEffect(() => {
        fetch('https://evening-plains-64607.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data);
            })
    }, [user]);

    useEffect(() => {
        fetch('https://evening-plains-64607.herokuapp.com/admins')
            .then(res => res.json())
            .then(data => {
                data.forEach(admin => {
                    // if (admin.email === decodedEmail) {
                    //     setAdminLogin(true);
                    // };
                });
            })
    }, [])
    return (
        <Navbar sticky="top" bg="color" expand="lg" collapseOnSelect>
            <Navbar.Toggle id="toggle" />
            <Navbar.Collapse id="collapse" className="text-center">
                <Nav className="me-auto">
                    <Nav.Link href="/home"><span className="navLink">HOME</span></Nav.Link>
                    <Nav.Link href="/about"><span className="navLink">ABOUT</span></Nav.Link>
                    {/* <p>admin</p> */}
                    {isAdmin === true ? <NavDropdown title="ADMIN" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                            <Link to="/make admin"><span className="navLink">Make Admin</span></Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/post blog"><span className="navLink">Post Blog</span></Link>
                        </NavDropdown.Item>
                        {/* delete bangladesh */}
                        <NavDropdown.Item>
                            <Link to="/delete politics"><span className="navLink">Delete Politics</span></Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/delete society"><span className="navLink">Delete Society</span></Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/delete policy issue"><span className="navLink">Delete Policy Issue</span></Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/delete governance"><span className="navLink">Delete Governance</span></Link>
                        </NavDropdown.Item>
                        {/* international */}
                        <NavDropdown.Item>
                            <Link to="/delete global governance"><span className="navLink">Delete Global Governance</span></Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/delete europe"><span className="navLink">Delete Europe</span></Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/delete north america"><span className="navLink">Delete North America</span></Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/delete asia"><span className="navLink">Delete Asia</span></Link>
                        </NavDropdown.Item>
                        {/* public administration */}
                        <NavDropdown.Item>
                            <Link to="/delete management"><span className="navLink">Delete Management</span></Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/delete public policy"><span className="navLink">Delete Public Policy</span></Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/delete contemporary governance"><span className="navLink">Delete Contemporary Governance</span></Link>
                        </NavDropdown.Item>
                        {/* others */}
                        <NavDropdown.Item>
                            <Link to="/delete knowledge sharing"><span className="navLink">Delete Knowledge Sharing</span></Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/delete idea"><span className="navLink">Delete Idea</span></Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/delete problem solution"><span className="navLink">Delete Problem Solution</span></Link>
                        </NavDropdown.Item>
                    </NavDropdown> : null}
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
                            <Link to="/global governance"><span className="navLink">Global Governance</span></Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/europe"><span className="navLink">Europe</span></Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/north america"><span className="navLink">North America</span></Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/asia"><span className="navLink">Asia</span></Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    {/* <p>public administration</p> */}
                    <NavDropdown title="PUBLIC ADMINISTRATION" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                            <Link to="/management"><span className="navLink">Management</span></Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/public policy"><span className="navLink">Public Policy</span></Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/contemporary governance"><span className="navLink">Contemporary Governance</span></Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    {/* <p>others</p> */}
                    <NavDropdown title="OTHERS" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                            <Link to="/knowledge sharing"><span className="navLink">Knowledge Sharing</span></Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/idea"><span className="navLink">Idea</span></Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/problem solution"><span className="navLink">Problem Solution</span></Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <span className="navLink"><Login /></span>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;