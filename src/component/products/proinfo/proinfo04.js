import React, { Component } from 'react';
import './proinfo.css';
import img01 from '../../../images/carimg2.JPG';



export default class Proinfo04 extends Component {
    render() {
        return (
            <div>
            <div className='tgt container'>
                    <div className='tht01 '>
                    <h2> Green Tea </h2>
                    <img src={img01} className="img-fluid" alt=""/>
                    <p>High quality green tea leaves of Assamis one of the healthiest drinks with highest amount of antioxidants and less amount of caffeine and Green Tea Contains Bioactive Compounds That Improve Health. </p>
                    <div class="row">
                        <div class="col-sm">
                        <ul>
                        <li> Have cancer reducing properties. </li>
                        <li> Helps in weight loos.</li>
                        <li> Helps to reduce tooth decay.</li>	
                        <li> Reduce depression.</li>
                        <li> Helps in skin care.</li>
                        <li> Improve functions of brain cell.</li>
                        <li> Have anti-viral and anti-bacterial properties.</li>
                        <li> Helps in preventing viral infections such as flue.</li>
                        <li> Prevents diabetics. Reduces the risk of heart attack and stroke.</li>


                        </ul>
                        </div>
                        
                    </div>    
                    </div>
            </div>   
            </div>
        )
    }
}
