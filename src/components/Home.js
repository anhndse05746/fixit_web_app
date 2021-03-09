import { Col, Container, Row } from 'react-bootstrap';
import Header from './Header';
import LeftNav from './Left-navbar-menu';
import Statistics from './Statistics';
import Chart from './Chart';
import Footer from './Footer';

function Home() {
    return (
        <>
            <Header />
            <Row>
                <Col lg={3}>
                    <LeftNav />
                    <Footer/>
                </Col>
                <Col lg={9}>
                    <Statistics />
                    <Chart 
                        name="user"
                    />
                    <Chart />
                </Col>
            </Row>
        </>
    )
}

export default Home;