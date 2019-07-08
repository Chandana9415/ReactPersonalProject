import React, { Component } from 'react';
import axios from 'axios';
import './index.css'

export class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,

      api1data: [],
      api2data: [],
      woeid: [],
      abbr: [],
      api4data: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    var temp = document.getElementById('location').value.replace(' ', '%20');
    var url = "https://cors-git.herokuapp.com/https://www.metaweather.com/api/location/search/?query=" + temp;

    await Promise.all([axios.get(url)
      .then(res => {
        const data = res.data;
        this.setState({ api1data: data[0].woeid, api3data: data.weather_state_abbr,
        });
        
      })
     .catch((error)=>{
       alert('Invalid City. Please try Again!')
       console.log(error)
     })
    ]);



    await axios.get(`https://cors-git.herokuapp.com/https://www.metaweather.com/api/location/` + this.state.api1data + `/`)

      .then(res => {

        const data2 = res.data;
        this.setState({
          api2data: data2.consolidated_weather,
          api4data : data2,
        

        });
      })


  }

  render() {
    return (

      <div style={{ alignContent: 'center', textAlign: 'center', width: '100%' }}>

        <form onSubmit={this.handleSubmit}>

          <input type="text" className="name" placeholder="Where are you at right now?" id="location" onChange={this.handleChange}  autoFocus />
          <input type="submit" className="submit" value="SUBMIT"  />

        </form>
       <h1> CITY : {this.state.api4data.title}(Timezone:{this.state.api4data.timezone})</h1>

        <table align="center" style={{paddingLeft:'50px', marginLeft:'0px'}} border='2px solid'>
          <tr>
            <th style={{ width: '25%' }}>Date</th>
            <th style={{ width: '25%' }}>Min Temp</th>
            <th style={{ width: '25%' }}>Max Temp</th>
            <th style={{ width: '25%' }}>Weather State</th>
          </tr>
          {this.state.api2data.map(record => (

            <tr>
              <td>{record.applicable_date}</td>
              <td>{record.min_temp.toFixed(1)}</td>
              <td>{record.max_temp.toFixed(1)}</td>
              <td> {record.weather_state_name}</td>

              <td><img src={'http://metaweather.com/static/img/weather/png/64/' + record.weather_state_abbr + '.png'} alt='' /></td>
            </tr>
          ))}

        </table>
      </div>
    );
  }
}

export default Weather;
