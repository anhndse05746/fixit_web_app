import './Left-navbar-menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav } from "react-bootstrap";

function LeftNav() {
    return (
        <Nav variant="pills" className="flex-column sideNav">
            <Nav.Item>
                <Nav.Link eventKey="1" href="#/home">
                    <FontAwesomeIcon icon="chart-line" /> Dashboard
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="2" href="#">
                    <FontAwesomeIcon icon="users" /> Customers
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="3" href="#">
                    <FontAwesomeIcon icon="tools" /> Repairers
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="4" href="#">
                    <FontAwesomeIcon icon="clipboard-list" /> Majors
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="5" href="#">
                    <FontAwesomeIcon icon="tasks" /> Services
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="6" href="#">
                    <FontAwesomeIcon icon="pen" /> Issues
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="7" href="#">
                    <FontAwesomeIcon icon="check" /> Request
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="8" href="#">
                    <FontAwesomeIcon icon="ban" /> List users banned
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default LeftNav