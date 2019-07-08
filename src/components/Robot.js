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
        if(temp.includes("#")){
            alert('Don\'t hash me please!')
            
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
                <input type="text" placeholder="What's your robot name?" id="name" onChange={this.handleChange} style={{ fontSize: '80%', width: '100%', height: '100%', background:'none', border:'none', alignContent:'center', textAlign:'center'}} autoFocus />
                <input type="submit" value="SUBMIT" style={{ height: '100%', width: '100%', background: 'none', alignContent: 'center',fontFamily: 'Arial rounded' }} />
            </form>
            <section style={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',

            }}>
                <img src={this.state.url} style={{ width: '25%', height: '50%', border: '10px solid black' }} alt="" />
                <img src={this.state.url2} style={{ width: '25%', height: '50%', border: '10px solid black' }} alt="" />
                <img src={this.state.url3} style={{ width: '25%', height: '50%', border: '10px solid black' }} alt="" />
                <img src={this.state.url4} style={{ width: '25%', height: '50%', border: '10px solid black' }} alt="" />
                
            </section>
        </div>);
    }


}

export default Robot;