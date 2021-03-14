import { Col, Row } from 'react-bootstrap';
import Header from '../components/Header'
import LeftNav from '../components/Left-navbar-menu';
import Statistics from '../components/Statistics';
import Chart from '../components/Chart';
import Footer from '../components/Footer';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {
    const userStatus = useSelector(state => state.user);

    console.log('home: ',userStatus);

    if (userStatus.isLogedIn == false) {
        return <Redirect to="/login" />;
    }

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