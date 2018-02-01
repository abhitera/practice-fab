import React from 'react';
import { FormGroup, FormControl, Button, Col, Row, Grid } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.handleuserName = this.handleuserName.bind(this);
        this.handleemail = this.handleemail.bind(this);
        this.handlepassword = this.handlepassword.bind(this);
        this.handleconformpassword = this.handleconformpassword.bind(this);


        this.state = {
            user: {
                first_name:'',
            }
        };
    }



    handleuserName(e) {
        this.setState({ userName: e.target.value });
    }
    handleemail(e) {
        this.setState({ userName: e.target.value });
    }
    handlepassword(e) {
        this.setState({ userName: e.target.value });
    }
    handleconformpassword(e) {
        this.setState({ passWord: e.target.value });
    }
    
    render() {
        return (
 <div className="container-fluid">
                <Row>
                    <Col xs={12} smOffset={3} mdOffset={3} sm={6} md={6} className="text-center"><h1>SignUp Form</h1></Col>
                </Row>
                <Row>
                    <form>
                        <FormGroup controlId="formBasicText">
                            <Col xs={12} smOffset={4} mdOffset={4} sm={4} md={4} className="text-center">
                                <FormControl type="text" value={this.state.userName} placeholder="Enter text" onChange={this.handleChange} />
                            </Col>
                            <Col xs={12} smOffset={4} mdOffset={4} sm={4} md={4} className="text-center" style={{paddingTop: 20}}>
                                <FormControl type="text" value={this.state.passWord} placeholder="Enter text" onChange={this.handleChange} />
                            </Col>
                            <Col xs={12} smOffset={4} mdOffset={4} sm={4} md={4} className="text-center" style={{ paddingTop: 20 }}>
                                <FormControl type="text" value={this.state.userName} placeholder="Enter text" onChange={this.handleChange} />
                            </Col>
                            <Col xs={12} smOffset={4} mdOffset={4} sm={4} md={4} className="text-center" style={{paddingTop: 20}}>
                                <FormControl type="text" value={this.state.passWord} placeholder="Enter text" onChange={this.handleChange} />
                            </Col>
                            <Col xs={12} smOffset={4} mdOffset={4} sm={4} md={4} className="text-center" style={{ paddingTop: 20 }}>
                                <FormControl type="text" value={this.state.userName} placeholder="Enter text" onChange={this.handleChange} />
                            </Col>
                            <Col xs={12} smOffset={4} mdOffset={4} sm={4} md={4} className="text-center" style={{ paddingTop: 20 }}>
                                <Button bsStyle="success" type="submit">SUBMIT</Button>{' '}
                                <Button bsStyle="danger" type="submit">SUBMIT</Button> 
                            </Col>
                            <Col xs={12} smOffset={4} mdOffset={4} sm={4} md={4} className="text-center" style={{ paddingTop: 20 }}>
                                <p>Already have an id? <Link to="/login">Login</Link> now.</p>
                                
                            </Col>
                        </FormGroup>
                    </form>
                </Row>
            </div>
        );
    }
}