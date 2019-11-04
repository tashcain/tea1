import React, { Component } from 'react';
import Img01 from '../../../images/carimg2.JPG';
import { Card, Button } from 'antd';
import './products.css';

const { Meta } = Card;

export default class Products extends Component {
    render() {
        return (
            <div>
                <div className="precont">
                <div class="container">
            <div class="row">
                <div class="col-sm justify-content-center">
                <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img className="cardsize" alt="example" src={Img01} />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                            <Button type="primary" onClick={this.clickHandler}>click here</Button>
                        </Card>
                </div>
                <div class="col-sm">
                <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={Img01} />}
                        >
                            <Meta title="Tulsi Green Tea" description="click to read its benifits" />
                            <Button type="primary" onClick={this.clickHandler}>click here</Button>
                        </Card>
                </div>
                <div class="col-sm">
                <Card 
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={Img01} />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                            <Button type="primary" onClick={this.clickHandler}>click here</Button>
                        </Card>
                </div>
            </div>
            </div> 
                </div>
           
                    
            </div>
        )
    }
}
