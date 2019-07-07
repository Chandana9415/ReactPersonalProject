import React, { Component } from 'react';
import axios from 'axios';
//import './index.css'


export class Expression extends Component {


    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            list: ["simplify",
                "factor",
                "derive", "integrate", "zeroes", "tangent", "area", "cos", "sin", "tan", "arccos", "arcsin", "arctan", "abs", "log"],
            data: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    async handleSubmit(event) {
        event.preventDefault();

        await Promise.all([axios.get(`https://newton.now.sh/` + document.getElementById('select').value + '/' + document.getElementById('exp').value)
            .then(res => {
                const data = res.data;
                this.setState({ data: data })
                console.log(data)
            })
            .catch((error)=>{
                alert('Invalid Expression. Please try Again!')
                console.log(error)
              })
        ]);
    }

    render() {
        let listItems = this.state.list.map((entry) =>
            <option key={entry} > {entry} </option>
        );
        return (<div style={{ width: '100%' }}>


           
                <select id="select" style={{ width: '100%', textAlign: 'center', maxWidth: '100%', }}>{listItems}</select> 

            <form onSubmit={this.handleSubmit}>

                <input type="text" placeholder="Let's do some math! Enter your expression here." id="exp" onChange={this.handleChange} style={{ border: '2px solid black', fontSize: '80%', width: '100%', height: '100px' }} />

                <input type="submit" value="Submit" style={{ fontSize: '100%', height: '50%', width: '100%', background: "lightblue", textAlign:'center' }} />

            </form>

            <div style={{ alignContent: 'center', width: '100%',textAlign:'center' }}>

                Operation:{this.state.data.operation}<br />
                Expression:{this.state.data.expression}<br />
                Result:{this.state.data.result}<br />
            </div>
        </div>)
    }

}

export default Expression;