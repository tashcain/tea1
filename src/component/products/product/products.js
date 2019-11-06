import React, { Component } from 'react';
import Img01 from '../../../images/carimg2.JPG';
import { Card, Button } from 'antd';
import './products.css';
import {Link} from 'react-router-dom';

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
                            <Meta title="Tulsi Green Tea"  />
                            <Link to="/prod/01"><Button type="primary" onClick={this.clickHandler}>click here</Button></Link> 
                           <br/> <Link to="/buyprod/01"><Button type="primary" onClick={this.clickHandler}>Buy Now</Button></Link> 
                        </Card>
                </div>
                <div class="col-sm">
                <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img className="cardsize" onMouseOver={this.onHover} alt="example" src={Img01} />}
                        >
                            <Meta title="Blue Tea" description="" />
                            <Link to="/prod/02"><Button type="primary" onClick={this.clickHandler}>click here</Button></Link>
                          <br/><Link to="/buyprod/02"><Button type="primary" onClick={this.clickHandler}>Buy Now</Button></Link>
                        </Card>
                </div>
                <div class="col-sm">
                <Card 
                            hoverable
                            style={{ width: 240 }}
                            cover={<img className="cardsize" onMouseOver={this.onHover} alt="example" src={Img01} />}
                        >
                            <Meta title="Black Tea" description="" />
                            <Link to="/prod/03"><Button type="primary" onClick={this.clickHandler}>click here</Button></Link>
                           <br/><Link to="/buyprod/03"><Button type="primary" onClick={this.clickHandler}>Buy Now</Button></Link>
                        </Card>
                </div>
                <div class="col-sm ">
                <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img className="cardsize" onMouseOver={this.onHover} alt="example" src={Img01} />}
                        >
                            <Meta title="Green Tea" description="" />
                            <Link to="/prod/04"><Button type="primary" onClick={this.clickHandler}>click here</Button></Link>
                            <br/><Link to="buyprod/04"><Button type="primary" onClick={this.clickHandler}>Buy Now</Button></Link>
                        </Card>
                </div>
            </div>
            </div> 
                </div>
           
                    
            </div>
        )
    }
}
