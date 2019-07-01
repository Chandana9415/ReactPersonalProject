import React, { Component } from 'react';
// import Contacts from './components/contacts';
import axios from 'axios';


export class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,

      api1data: [],
      api2data: [],
      woeid: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillMount() {
  // const response = await
  // const https = require('https');

  // const agent = new https.Agent({
  //     rejectUnauthorized: false
  // });

  // this.ios();




  //let res = await axios.get(`https://www.metaweather.com/api/location/search/?query=dallas`)
  //await axios.get(`https://cors-git.herokuapp.com/http://jsonplaceholder.typicode.com/users`)  
  //  await axios.get(`https://cors-git.herokuapp.com/https://www.metaweather.com/api/location/search/?query=san`)  





  //  let {data1} = res.data;
  //      this.setState({ data:data1 });
  //  console.log(data1)
  // }



  async handleSubmit(event) {
    console.log("Button clicked yay, time to get the woied")
    event.preventDefault();
    var temp = document.getElementById('location').value;

    await Promise.all([axios.get(`https://cors-git.herokuapp.com/https://www.metaweather.com/api/location/search/?query=` + temp)
      .then(res => {
        const data = res.data;
        this.setState({ api1data: data[0].woeid });
        // console.log(this.state.api1data);
      })
    ]);



    await axios.get(`https://cors-git.herokuapp.com/https://www.metaweather.com/api/location/` + this.state.api1data + `/`)

      .then(res => {

        const data2 = res.data;
        this.setState({ api2data: data2.consolidated_weather });
        // console.log(this.state.api2data.consolidated_weather[0].air_pressure)
        // console.log(this.state.api2data.consolidated_weather[0].id)
      })


  }

  render() {

    
    
   

    
    return (
        
      <div>
        
        <form onSubmit={this.handleSubmit}>

          <input type="text" placeholder="ex:San Fransisco" id="location" onChange={this.handleChange} style={{ border: '2px solid black', fontSize: '80%', width: '300px' }} />
          <input type="submit" value="Submit" style={{ fontSize: '100%', height: '50%', background: "linear-gradient(to right bottom, #800000, #174c83)" }} />

        </form>

        {/* {item.title} <br />
                {item.location_type}<br />
                {item.woeid}<br />
                {item.latt_long}<br /> */}
                
            {this.state.api2data.map(record => (
                <div>
                    {record.applicable_date}
                    {record.air_pressure}
                    </div>
            ))}  

        {/* {Object.keys(this.state.api2data).map(key=>(
     
     {myvar}
        
        ))} */}

     {/* {JSON.stringify(this.state.api2data.consolidated_weather)} */}


      </div>
    );
  }
}

export default Weather;
