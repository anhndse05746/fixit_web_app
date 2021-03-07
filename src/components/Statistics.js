import "./Statistics.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from "react-bootstrap";

function Statistics() {
    return (
        <>
            <Row className="staticRow">
                <p className="header">Statistics</p>
                <Col>
                    <FontAwesomeIcon icon="wrench" className="staticIcon services" />
                    <div className="static">
                        <div>1000</div>
                        Services
                    </div>
                </Col>
                <Col><FontAwesomeIcon icon="users" className="staticIcon users" />
                    <div className="static">
                        <div>1000</div>
                        Users
                    </div>
                </Col>
                <Col><FontAwesomeIcon icon="tools" className="staticIcon workers" />
                    <div className="static">
                        <div>1000</div>
                        Worker
                    </div>
                </Col>
                <Col><FontAwesomeIcon icon="dollar-sign" className="staticIcon revenue" />
                    <div className="static">
                        <div>1000</div>
                        Revenue
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Statistics;
