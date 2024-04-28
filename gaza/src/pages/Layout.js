import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { Outlet } from 'react-router-dom';
import '../App.css';

function Layout({ children }) {
    return (
        <>
            <header className="header">
                <div className="header-content">
                    <div>
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h1>gaza guide.</h1>
                        </Link>
                        <h6>current as of april 27, 2024</h6>
                    </div>
                </div>
            </header>
            <Nav fill variant="tabs" defaultActiveKey="/">
                <Nav.Item>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/OctoberSeventhEvent">October 7th Event</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/CurrentState">Current State of Conflict</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/Timeline">Timeline</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/Actors">Actors at Play</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/Resources">Resources</Nav.Link>
                </Nav.Item>
            </Nav>
            <Outlet /> {/* This div will contain the routed components */}
        </>
    );
}

export default Layout;