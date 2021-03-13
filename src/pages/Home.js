import { Col, Row } from 'react-bootstrap';
import Header from '../components/Header'
import LeftNav from '../components/Left-navbar-menu';
import Statistics from '../components/Statistics';
import Chart from '../components/Chart';
import Footer from '../components/Footer';

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