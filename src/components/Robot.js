import React, { Component } from 'react';
import axios from 'axios';
import base64 from 'base-64'

export class Robot extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            data: [],
            id: 10,
            url:'',//'https://robohash.org/'
        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {



    }
    async handleSubmit(event) {
        event.preventDefault();
        var temp = document.getElementById('name').value;

        //console.log(temp);
        //console.log(this.state.url)
        this.setState({ url : 'https://robohash.org/'.concat(temp) })
        this.state.url.concat(temp);
        //console.log(this.state.url);
        // axios.get(`https://robohash.org/`+temp)
        // .then(res => {
        //   const data = res.data;
        //   this.setState({ data : data });
        //   console.log(base64.encode(res.data));

        // })

         this.render();

    }

    render() {
        // console.log(this.state.data);
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="ex:San Fransisco" id="name" onChange={this.handleChange} style={{ border: '2px solid black', fontSize: '80%', width: '300px' }} />

                {/* <input type="button" id="name" placeholder="Enter name" size="100" /> */}
                <input type="submit" value="Submit" style={{ fontSize: '100%', height: '50%', background: "linear-gradient(to right bottom, #800000, #174c83)" }} />
            </form>
            {/* {this.state.url} */}

            <img src={this.state.url} />
            {/* <img src="https://robohash.org/".ap/> */}


            {/* <img src="https://robohash.org/a"/> */}


            {/* {this.state.data.map(function(item){
                    return(<div>
                        <img src={item}/>
                        </div>)
            })} */}
        </div>);
    }


}

export default Robot;