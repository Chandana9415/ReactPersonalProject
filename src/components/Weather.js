import React, { Component } from 'react';
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

  async handleSubmit(event) {
    console.log("Button clicked yay, time to get the woied")
    event.preventDefault();
    var temp = document.getElementById('location').value;

    await Promise.all([axios.get(`https://cors-git.herokuapp.com/https://www.metaweather.com/api/location/search/?query=` + temp)
      .then(res => {
        const data = res.data;
        this.setState({ api1data: data[0].woeid });
      })
    ]);



    await axios.get(`https://cors-git.herokuapp.com/https://www.metaweather.com/api/location/` + this.state.api1data + `/`)

      .then(res => {

        const data2 = res.data;
        this.setState({ api2data: data2.consolidated_weather });
     
      })


  }

  render() {

    
    
   

    
    return (
        
      <div>
        
        <form onSubmit={this.handleSubmit}>

          <input type="text" placeholder="ex:San Fransisco" id="location" onChange={this.handleChange} style={{ border: '2px solid black', fontSize: '80%', width: '300px' }} />
          <input type="submit" value="Submit" style={{ fontSize: '100%', height: '50%', background: "linear-gradient(to right bottom, #800000, #174c83)" }} />

        </form>

    
                
            {this.state.api2data.map(record => (
                    <div>
                    {record.applicable_date} <br />
                    {record.air_pressure}<br />
                    </div>
            ))}  


      </div>
    );
  }
}

export default Weather;
