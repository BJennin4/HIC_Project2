import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { Outlet } from 'react-router-dom';
import '../App.css';
import logo from './../images/GazaGuideWhite.png';

function Layout({ children }) {
    return (
        <>
            <header className="header">
                <div className="header-content">
                    <img src={logo} alt="Logo" style={{ width: '120px', height: 'auto' }} />
                    <div>
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h1>gaza guide.</h1>
                        </Link>
                        <h6>current as of april 27, 2024</h6>
                    </div>
                </div>
            </header>
            <div className="navigation">
            <Nav expand="leg" defaultActiveKey="/">
                <Nav.Item>
                <Nav.Link as={Link} to="/" className="nav-link">home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/OctoberSeventhEvent">october seventh event</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/CurrentState">current state of conflict</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/Timeline">timeline</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/Actors">actors at play</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/Resources">resources</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    <Outlet /> {/* This div will contain the routed components */}
</>
    );
}

export default Layout;