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

const routes = [
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
    return (

      <Router>

{/* <div class="row">
  <div class="column" style="background-color:#aaa;">
    <h2>Column 1</h2>
    <p>Some text..</p>
  </div>
  <div class="column" style="background-color:#bbb;">
    <h2>Column 2</h2>
    <p>Some text..</p>
  </div>
  <div class="column" style="background-color:#ccc;">
    <h2>Column 3</h2>
    <p>Some text..</p>
  </div>
  <div class="column" style="background-color:#ddd;">
    <h2>Column 4</h2>
    <p>Some text..</p>
  </div>
</div> */}

        <div class="container">
          <div class="box">
            <Link to="/robot" style={{ color: 'black', fontWeight: 'bold', textDecoration: 'none' }}>
              <h1>ROBOT</h1>
            </Link>
          </div>
          <div class="box">
            <Link to="/pawn" style={{ color: 'black', fontWeight: 'bold', textDecoration: 'none' }}>
              <h1>PAWNED?</h1>
            </Link>
          </div>
          <div class="box">
            <Link to="/expression" style={{ color: 'black', textDecoration: 'none' }}>
              <h1>MATH</h1>
            </Link>
          </div>
          <div class="box">
            <Link to="/weather" style={{ color: 'black', fontWeight: 'bold', textDecoration: 'none' }}>
              <h1>WEATHER</h1>
            </Link>
          </div>
        </div>


        <div style={{ display: 'flex' }}>
          <div style={{ width: '50%' }}>

          {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>

          {/* <div style={{ flex: 2 }}>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
          </div> */}
        </div>

      </Router>

    );
  }
}

export default App;