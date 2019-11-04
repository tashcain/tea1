import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div>
            <div className="container footer">
                <div className="row">
                        <div className="col-sm">
                        <div className="aboutcont">
                            <h4>About Us</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, magnam voluptatibus. Id tempora dolores quas nemo ratione voluptates! Amet, asperiores.</p>
                        </div>
                        </div>
                        <div className="col-sm">
                        <div className="aboutcont">
                            <h4>Newsletter</h4>
                            
                        </div>
                                    
                        </div>
                        <div className="col-sm">
                        <h4>Follow Us</h4>
                        <p>Let us be social</p>
                        </div>
                </div>
            </div> 
            </div>
        )
    }
}
