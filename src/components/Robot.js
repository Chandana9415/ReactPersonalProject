import React, { Component } from 'react';

export class Robot extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            data: [],
            id: 10,
            url: '',
            url2: '',
            url3: '',
            url4: '',

        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    async handleSubmit(event) {
        event.preventDefault();

        let temp = 'https://robohash.org/' + document.getElementById('name').value;
        this.setState({
            url: temp,
            url2: temp + '/?set=set2',
            url3: temp + '/?set=set3',
            url4: temp + '/?set=set4'
        })
        
        this.render();

    }

    render() {
        return (<div style={{ textAlign: "center" }}>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="What robot are you?" id="name" onChange={this.handleChange} style={{ border: '2px solid black', fontSize: '80%', width: '100%', height: '100%' }} />
                <input type="submit" value="Submit" style={{ fontSize: '100%', height: '100%', width: '100%', background: 'pink', alignContent: 'center' }} />
            </form>

            <img src={this.state.url} style={{ width: '50%', height: '50%', border: '20px solid black' }} alt="" />
            <img src={this.state.url2} style={{ width: '50%', height: '50%', border: '20px solid black' }} alt="" />
            <img src={this.state.url3} style={{ width: '50%', height: '50%', border: '20px solid black' }} alt="" />
            <img src={this.state.url4} style={{ width: '50%', height: '50%', border: '20px solid black' }} alt="" />


        </div>);
    }


}

export default Robot;