import React from 'react';
import { FormGroup, FormControl, Button, Col, Grid, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LoginForm } from '../components'

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user : {
                email_id: '',
                password: ''
            },
            errors: {},
            error: ''
        };
    }


    onChange = (key, val) => {
        let { user } = this.state;
        user[key] = val.target.value;
        this.setState({ user });
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.user)
    }

    render() {
        const { user } = this.state;
        return (
            <div className="container-fluid">
                <LoginForm 
                    user={user}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}