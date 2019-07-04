import React, { Component } from "react";

import {Robot} from './components/Robot'
import {Weather} from './components/Weather'
import {Expression} from './components/Expression'
import {Pawn} from './components/Pawn'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'


const routes = [
  {
    path: '/robot',
    exact: true,
    sidebar: () => <div></div>,
    main: () => <h2><Robot /></h2>
  },
  {
    path: '/pawn',
    sidebar: () => <div></div>,
    main: () => <h2><Pawn /></h2>
  },
  {
    path: '/expression',
    sidebar: () => <div></div>,
    main: () => <h2><Expression /></h2>
  },
  {
    path: '/weather',
    sidebar: () => <div></div>,
    main: () => <h2><Weather /></h2>
  }
  
]


class App extends Component {
  render() {
    return (

      <Router>
     
        <div style={{ display: 'flex'}}>
          <div style={{ width: '50%'}}>
          

            <ul style={{ listStyleType: 'none', padding: '50' }}>
                <li><button style={{ width:'180px', height:'180px',hover: 'true', marginTop:'15px'}}>
                  <Link to="/robot" style={{color:'black', fontWeight:'bold',textDecoration:'none'}}> 
                   <h1>ROBOT</h1>
                  </Link> </button> </li>

                <li><button style={{ width:'180px', height:'180px', hover: 'true'}}>
                  <Link to="/pawn" style={{color:'black', fontWeight:'bold',textDecoration:'none'}}> 
                  <h1>PAWN</h1>
                  </Link> </button></li>

                <li><button style={{width:'180px', height:'180px',hover: 'true'}}>
                  <Link to="/expression" style={{color:'black', fontWeight:'bold',textDecoration:'none'}}>
                  <h1>EXPRESSION</h1> 
                  </Link> </button> </li>

                  <li><button style={{ width:'180px', height:'180px',hover: 'true'}}>
                  <Link to="/weather" style={{color:'black', fontWeight:'bold',textDecoration:'none'}}>
                  <h1>WEATHER</h1> 
                  </Link> </button> </li>

                   
               
            </ul>
          
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
          </div>

          <div style={{ flex: 1 }}>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>
        </div>

      </Router>

    );
  }
}

export default App;