import React, { Component } from 'react';
import './index.css'
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
        if (temp.includes("#") || temp.includes("?") || temp.includes("%")) {
            alert('Don\'t hash or question me please! Try again.')

        }
        this.setState({
            url: temp,
            url2: temp + '/?set=set2',
            url3: temp + '/?set=set3',
            url4: temp + '/?set=set4'
        })



    }

    render() {
        return (<div style={{ textAlign: "center" }}>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="What's your robot name?" id="name" className="name" onChange={this.handleChange} autoFocus />
                <br />
                <input type="submit" value="SUBMIT" className="submit" />
                <br />
            </form>
            <br />
            <section style={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',

            }}>
                <img src={this.state.url} className='img' alt="" />
                <img src={this.state.url2} className='img' alt="" />
                <img src={this.state.url3} className='img'alt="" />
                <img src={this.state.url4} className='img' alt="" />

            </section>
        </div>);
    }


}

export default Robot;