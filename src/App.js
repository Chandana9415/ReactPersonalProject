import React,{Component} from 'react';
import './App.css';
// import Contacts from './components/contacts';
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

componentDidMount(agentName) {
  // const response = await
  // const https = require('https');

  // const agent = new https.Agent({
  //     rejectUnauthorized: false
  // });

  this.ios();

}
  
   ios = async() => {
     //let res = await axios.get(`https://www.metaweather.com/api/location/search/?query=dallas`)
 //await axios.get(`https://cors-git.herokuapp.com/http://jsonplaceholder.typicode.com/users`)  
 await axios.get(`https://cors-git.herokuapp.com/https://www.metaweather.com/api/location/search/?query=san`)  
    .then(res => {
      const data = res.data;
      this.setState({data});
    })

 //  let {data1} = res.data;
//      this.setState({ data:data1 });
    //  console.log(data1)
    }



  render () {
    // console.log(this.state.data.name)
    return (
      
      <div>
        {this.state.data.map(function(item,key) {
          return(
            <div class="card">
              <div class="card-body">
            
            {item.title} <br />
          {item.location_type}<br />
            {item.woeid}<br />
          {item.latt_long}<br />
            
            </div>
            </div>
            )
         
        })}
        {/* {this.state.data.title} */}
        {/* {this.state.data.location_type} */}

      </div>
    );
  }
}

export default App;
