import React, { Component } from 'react';
import {
	Row, 
	Col,
	Grid,
	Button,
	Image,
	ButtonGroup
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {assetsPrefix} from '../constants';
import {push} from 'react-router-redux';
import { Photo } from '../components';
import {connect} from 'react-redux';
import actions from '../actions';
import axios from 'axios';
import APP_ID from '../constants'

@connect((state) => state)
export default class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}
	
	render() {
		return(
			<Col className="">
			</Col>
		);
	}
}