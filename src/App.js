import React, { Component } from 'react'
import axios from 'axios';

    export class App extends Component {
     
      constructor(props) {
        super(props);
        this.state = {
            visible: false,
            
            data: []
        }
        
    }

      componentDidMount() {
        const https = require('https');
        const agent = new https.Agent({
          rejectUnauthorized: false
      });

      axios.get(`http://jsonplaceholder.typicode.com/users`,{ httpsAgent: agent })
      .then(res => {
        const data = res.data;
        this.setState({ data });
      })
      }

      render() {
        return(
          <div>
        {this.state.data.map(function (item, key) {
          return (
          <div>
              {item}
          </div>  )})}
          </div>)}
      }
    export default App;