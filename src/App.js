import React,{Component} from 'react';
import './App.css';
import Contacts from './components/contacts';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        visible: false,
        
        data: []
    }
    
}

componentWillMount(agentName) {
  // const response = await
  // const https = require('https');

  // const agent = new https.Agent({
  //     rejectUnauthorized: false
  // });

  this.ios();

}
  
   ios = async() => {
     let res = await axios.get(`https://www.metaweather.com/api/location/search/?query=dallas`)
  //axios.get(`http://jsonplaceholder.typicode.com/users`)  
     let {data1} = res.data;
     this.setState({ data : data1 });
     console.log(data1)
    }



  render () {
    return (
      <div>
        {this.state.data}
      </div>
    );
  }
}

export default App;
