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

        this.setState({ url : 'https://robohash.org/'.concat(temp) })
        this.state.url.concat(temp);
    
         this.render();

    }

    render() {
        return (<div style={{ alignContent:'left',paddingTop:'10%',paddingRight:'50%'}}>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="What robot are you?" id="name" onChange={this.handleChange} style={{ border: '2px solid black', fontSize: '80%', width: '100%',height:'100%' }} />
                <input type="submit" value="Submit" style={{ fontSize: '100%', height: '100%',width:'100%', background: 'pink' }} />
            </form>
           
            <img src={this.state.url} style={{width : '100%', height:'100%', border: '20px solid black'}}/>
            
            
        </div>);
    }


}

export default Robot;