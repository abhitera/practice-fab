import React from 'react';
import { Col, Row, Grid, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const LoginForm = (props) => {
    const { user, onChange, onSubmit } = props;
    return (
        <div className="container-fluid">
            <Row>
                <Col xs={12} smOffset={3} mdOffset={3} sm={6} md={6} className="text-center"><h1>Login</h1></Col>
            </Row>
            <Row>
                <form onSubmit={onSubmit}>
                    <FormGroup controlId="formBasicText">
                        <Col xs={12} smOffset={4} mdOffset={4} sm={4} md={4} className="text-center">
                            <input type="text" name="email" id="email" hidden />
                            <input type="password" name="password" id="password" hidden />
                            <FormControl type="email" value={user.email_id} placeholder="Email" onChange={onChange.bind(this, 'email_id')} required />
                        </Col>
                        <Col xs={12} smOffset={4} mdOffset={4} sm={4} md={4} className="text-center" style={{ paddingTop: 20 }}>
                            <FormControl type="password" value={user.password} placeholder="Password" onChange={onChange.bind(this, 'password')} required />
                        </Col>
                        <Col xs={12} smOffset={4} mdOffset={4} sm={4} md={4} className="text-center" style={{ paddingTop: 20 }}>
                            <Button bsStyle="success" type="submit">Submit</Button>{' '}
                            <Button bsStyle="danger" type="reset">Cancel</Button>
                        </Col>
                        <Col xs={12} smOffset={4} mdOffset={4} sm={4} md={4} className="text-center" style={{ paddingTop: 20 }}>
                            <p>Not Registered yet? <Link to="/signup">Sign Up</Link> now.</p>

                        </Col>
                    </FormGroup>
                </form>
            </Row>
        </div>
    )
}

export default LoginForm;