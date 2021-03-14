import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Header() {

    return (
        <>
            <Row className="header">
                <Col className="loginCol">
                    <a href='login'>login</a>
                </Col>
                <Col lg={9}>
                    <InputGroup className="mb-3">
                        <FontAwesomeIcon icon="search" />
                        <FormControl
                            placeholder="Quick Search"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
            </Row>
        </>
    )
}

export default Header;