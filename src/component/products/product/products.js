import React, { Component } from 'react';
import Img01 from '../../../images/carimg2.JPG';
import { Card, Button } from 'antd';
import './products.css';

const { Meta } = Card;

export default class Products extends Component {
    constructor(){
        super();
    
        this.onHover = this.onHover.bind(this);
    }

    // componentDidMount(){
    //     var x =  document.getElementsByClassName("cardsize").css.height;
    //   if(x !== 272){
    //       console.log("here wyyw")
    //   }
    // }

        onHover(e){
           
            var x =  document.getElementsByClassName("cardsize");
              console.log(x);
              console.log(e.id);
        }

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
                            cover={<img className="cardsize" onMouseOver={this.onHover} alt="example" src={Img01} />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                            <Button type="primary" onClick={this.clickHandler}>click here</Button>
                        </Card>
                </div>
                <div class="col-sm">
                <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img className="cardsize" onMouseOver={this.onHover} alt="example" src={Img01} />}
                        >
                            <Meta title="Tulsi Green Tea" description="click to read its benifits" />
                            <Button type="primary" onClick={this.clickHandler}>click here</Button>
                        </Card>
                </div>
                <div class="col-sm">
                <Card 
                            hoverable
                            style={{ width: 240 }}
                            cover={<img className="cardsize" onMouseOver={this.onHover} alt="example" src={Img01} />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                            <Button type="primary" onClick={this.clickHandler}>click here</Button>
                        </Card>
                </div>
                <div class="col-sm ">
                <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img className="cardsize" onMouseOver={this.onHover} alt="example" src={Img01} />}
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
