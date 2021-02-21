import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Button, Form } from 'react-bootstrap';
import loginImage from '../assets/images/loginImage.jpg';
import './Login.css';

function LoginPage() {
    return (
        <>
            <Row>
                <Col><img src={loginImage} alt="Logo" /></Col>
                <Col>
                    <Form>
                        <Form.Label className="text-muted">
                            Welcome back
                        </Form.Label>
                        <h2 className="form-label">Login to your account</h2>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" className="textInput" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" className="textInput" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember password" />
                            <Form.Text className="text-muted">
                                <a href="/" className="forgot-password">Forgot password?</a>
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="center-btn">
                            Login now
                        </Button>
                        <Form.Text className="text-muted register">
                            Don't have an account? <a href="/">Register here</a>
                        </Form.Text>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default LoginPage;