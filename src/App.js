import React,{Component} from 'react';
import './App.css';
import Contacts from './components/contacts';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        visible: false,
        
        data: [],
        data1:[]
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
     //let res = await axios.get(`https://www.metaweather.com/api/location/search/?query=dallas`)
 // let res = await axios.get(`https://cors-anywhere.herokuapp.com/http://jsonplaceholder.typicode.com/users`)  
 let res = await axios.get(`https://cors-git.herokuapp.com/https://www.metaweather.com/api/location/search/?query=dallas`)  
 let {data1} = res.data;
     this.setState({ data : data1 });
     console.log(data1)
    }



  render () {
    return (
      <div>
        {this.state.data.title}
        {this.state.data.location_type}

      </div>
    );
  }
}

export default App;
