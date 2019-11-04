import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Car from './carousel/carousel';
import Firstland from '../firstland/firstland';
import './homeland.css'


export default class Homeland extends Component {
    render() {
        return (
            <div>
                <div className="container firstland">
                    <div className="row" >
                        <Firstland/>
                    </div>
                </div>
            <div className="container carr ">
                <div className="row">
                        <div className="col-sm">
                        <Car/>
                        </div>
                        <div className="col-sm">
                        One of three columns
                        </div>
                </div>
            </div>   
            <div className="container landcard">
                <div className="row">
                   heloo
                </div>  
            </div>

        </div> 

            
        )
    }
}
