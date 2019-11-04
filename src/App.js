import React from 'react';
import './App.css';
import Example from './component/navigations/navbar';
import Homeland from './component/Home/homeland';
import Footer from './component/navigations/footer/footer';
import About from './component/About/about';
import Test from './component/test';
import Products from './component/products/product/products';
import {Link,BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Example/>
     <div >
     <BrowserRouter> 
    
      <Switch>
        <Route exact path = '/' component={Homeland}/>
      <Route exact path = '/aboutus' component={About}/>
      <Route exact path = '/products' component={Products}/>
      </Switch> 
       
     </BrowserRouter>

       
       
     </div>
     {/* <div>
       <Footer/>
     </div> */}

    </div>
  );
}

export default App;
