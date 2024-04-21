import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Layout({ children }) {
    return (
        <>
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
            <div>{children}</div>  {/* This div will contain the routed components */}
        </>
    );
}

export default Layout;
