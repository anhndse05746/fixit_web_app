import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../actions/user';
import { Redirect } from 'react-router-dom';
import './Login.css';

function LoginPage() {
    const userStatus = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleLogin = () => {
        const action = userLogin(true);
        dispatch(action);
    };

    console.log("login: ", userStatus);

    if (userStatus == true) {
        return <Redirect to="/" />;
    }

    return (
        <>
            <Container className="login">
                <Form onSubmit={handleLogin}>
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
            </Container>
        </>
    )
}

export default LoginPage;