import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
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
          

            <ul style={{ listStyleType: 'none', padding: '0' }}>
                <li><button style={{ width:'180px', height:'180px',hover: 'true', marginTop:'15px'}}>
                  <Link to="/robot" style={{color:'#FFFFFF', fontWeight:'bold',textDecoration:'none'}}> 
                   <h1>ROBOT</h1>
                  </Link> </button> </li>

                <li><button style={{ width:'180px', height:'180px', hover: 'true'}}>
                  <Link to="/pawn" style={{color:'#FFFFFF', fontWeight:'bold',textDecoration:'none'}}> 
                  <h1>PAWN</h1>
                  </Link> </button></li>

                <li><button style={{width:'180px', height:'180px',hover: 'true'}}>
                  <Link to="/expression" style={{color:'#FFFFFF', fontWeight:'bold',textDecoration:'none'}}>
                  <h1>EXPRESSION</h1> 
                  </Link> </button> </li>

                  <li><button style={{ width:'180px', height:'180px',hover: 'true'}}>
                  <Link to="/weather" style={{color:'#FFFFFF', fontWeight:'bold',textDecoration:'none'}}>
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

          <div style={{ flex: 1, padding: '10px' }}>
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

//      <div>
//        <div className="d-flex flex-column">
//        <ButtonToolbar>
//   <Button variant="primary">Weather</Button>
//   <Button variant="secondary">Robot</Button>
//   <Button variant="success">Expression</Button>
//   <Button variant="warning">Pawn</Button>
  
// </ButtonToolbar>
//        </div>
//        </div>
    );
  }
}

export default App;