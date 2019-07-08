import React, { Component } from 'react';

import { Robot } from './components/Robot'
import { Weather } from './components/Weather'
import { Expression } from './components/Expression'
import { Pawn } from './components/Pawn'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
 import './index.css'
 import {Image} from 'react-bootstrap';
import {Home } from './components/Home';
import { Redirect } from 'react-router-dom'

const routes = [
  {
    path: '/home',
    
    exact: true,
    //sidebar: () => <div></div>,
    main: () => <h2><Home /></h2>,
  
  },
  {
    path: '/robot',
    exact: true,
    //sidebar: () => <div></div>,
    main: () => <h2><Robot /></h2>,
  
  },
  {
    path: '/pawn',
    //sidebar: () => <div></div>,
    main: () => <h2><Pawn /></h2>
  },
  {
    path: '/expression',
    //sidebar: () => <div></div>,
    main: () => <h2><Expression /></h2>
  },
  {
    path: '/weather',
    //sidebar: () => <div>Hello World</div>,
    main: () => <h2><Weather /></h2>
  }

]


class App extends Component {
  render() {

    var background = {backgroundSize : 'cover'};
    var textStyle = {
      position: 'absolute', 
      top: '5%', 
      left: '20%',
      width:'65%'
    };
    return (
 
  <Router>
      <Redirect from="/" to="/home" />

                <Image 
                  style={background} responsive
                  src="https://www.redwallpapers.com/download/original/mesh-triangles-surface-colorful-free-stock-photos-images-hd-wallpaper.jpg">
                </Image>
                <h1 style={textStyle}>
               

        <div className="container" style={{alignContent:'center', alignSelf:'center', height:'100%'}}>
         
          <div className="box" style={{display:'block',borderRadius:'50%'}}>
        
            <Link to="/robot">
              <h1 className="btn-round"><span>ROBOT</span></h1>
            </Link>
          </div>
          <div className="box">
            <Link to="/pawn" style={{ color: 'black', fontWeight: 'bold', textDecoration: 'none'}}>
              <h1 className="btn-round"><span>PAWNED?</span></h1>
            </Link>
          </div>
          <div className="box">
            <Link to="/expression" style={{ color: 'black', textDecoration: 'none'}}>
              <h1 className="btn-round"><span>MATH</span></h1>
            </Link>
          </div>
          <div className="box">
            <Link to="/weather" style={{ color: 'black', fontWeight: 'bold', textDecoration: 'none'}}>
              <h1 className="btn-round"><span>WEATHER</span></h1>
            </Link>
          </div>
        </div>
       
          
        <div style={{ alignContent:'center', alignSelf:'center', width: '100%', height:'100%' }}>
          

          {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
         

      
        </div></h1>

         </Router>
     

      // </section>
    );
  }
}

export default App;