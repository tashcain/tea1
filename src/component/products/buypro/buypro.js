import React, { Component } from 'react';
import {Icon} from 'antd';
import './buypro.css';

export default class Buypro extends Component {

    constructor(){
        super();

        this.state = {
            tea: null
        }
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        console.log(id);
        if(id === '01'){
            this.setState({
                tea: "Tulsi Green Tea"
            })
        }
        else if( id === '02'){
            this.setState({
                tea: "Blue Tea"
            })
        }
        else if( id === '03'){
            this.setState({
                tea: "Black Tea"
            })
        } 
        else if( id === '04'){
            this.setState({
                tea: "Green Tea"
            })
        }   
    }
    render() {
        return (
            <div>
                <div className="tgt container">
                    <div className="emailcard">
                        <div className="cont">
                            <h1>LMAssamTea</h1>
                            <h2>Contact Us</h2>
                            <p><Icon type="contacts" theme='filled' /> 999 999 9999</p>
                            <p> <Icon type="mail" theme="filled" />  email@email.com</p>
                        </div>
                        <div className="email">
                        <form>
                        <div class="form-group">
                            <label for="formGroupExampleInput">Name</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name"/>
                        </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">Tea Name</label>
                                <input type="text" className="form-control" id="formGroupExampleInput" value={this.state.tea} placeholder={this.state.tea}/>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">quantity</label>
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="quantity"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary mb-2">Send</button>

                           </form>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
