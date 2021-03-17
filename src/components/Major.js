import MajorList from './Major-list';
import Header from './Header'
import LeftNav from './Left-navbar-menu';
import Footer from './Footer';
import { Col, Row } from 'react-bootstrap';

function Major() {
    return (
        <>
            <Header />
            <Row>
                <Col lg={3}>
                    <LeftNav />
                    <Footer />
                </Col>
                <Col lg={9}>
                    <MajorList />
                </Col>
            </Row>
        </>
    )
}

export default Major