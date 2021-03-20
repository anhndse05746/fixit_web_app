import MajorList from './Major-list';
import Header from './Header'
import LeftNav from './Left-navbar-menu';
import Footer from './Footer';
import { Col, Row, Button } from 'react-bootstrap';
import "./Major.css";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../store/majors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Major() {
    const listMajor = useSelector(state => state.majors);
    const dispatch = useDispatch();

    const showList = () => {
        if (listMajor.list.length == 0)
            dispatch(actions.getList());
        console.log('list: ', listMajor.list.length);
    }
    return (
        <>
            <Header />
            <Row>
                <Col lg={3}>
                    <LeftNav />
                    <Footer />
                </Col>
                <Col lg={9}>
                    <div className="major">
                        <Button variant="primary" type="submit" className="add-major-button" onClick={showList}>
                            <FontAwesomeIcon icon="plus-circle" className="major-add" /> Add
                        </Button>
                        <MajorList />
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Major