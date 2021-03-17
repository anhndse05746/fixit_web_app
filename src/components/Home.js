import { Col, Row } from 'react-bootstrap';
import Header from './Header'
import LeftNav from './Left-navbar-menu';
import Statistics from './Statistics';
import Chart from './Chart';
import Footer from './Footer';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {
    const userStatus = useSelector(state => state.login);

    console.log('home: ',userStatus);

    if (userStatus.isLogin == false) {
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