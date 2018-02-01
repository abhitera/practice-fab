import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {assetsPrefix} from '../constants';
import {
    Grid,
    Row,
    Col,
    Nav,
    Navbar,
    Button,
    Image
} from 'react-bootstrap';

const Photo = (props) => {
    const { data } = props;
    const style1 = {
        border: '1px solid black',
        height: 300,
    }
    
const photos = data.map((item, index) => <Col style={style1} xs={2} key={index}>
        <Col>{item.title}</Col>
    
        </Col>
    )
    return (
        <div>
            {photos}
        </div>
    )
}

export default Photo;