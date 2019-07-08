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


           
                <select id="select" style={{ width: '100%', textAlign: 'center', maxWidth: '100%',textAlign:'center',alignContent:'content' }}>{listItems}</select> 

            <form onSubmit={this.handleSubmit}>

                <input type="text" placeholder="Let's do some math! Enter your expression here." id="exp" onChange={this.handleChange} style={{ border: 'none', fontSize: '80%', width: '100%', height: '100px', background:'none',alignContent:'center',textAlign:'center' }} autoFocus />

                <input type="submit" value="SUBMIT" style={{ fontSize: '100%', height: '50%', width: '100%', background: "none", textAlign:'center',fontFamily: 'Arial rounded'}} />

            </form>

            <div style={{ alignContent: 'center', width: '100%',textAlign:'center' }}>
    <table border="1px border" style={{marginLeft:'250px'}}>
        <tr>
            <th>Operation</th>
            <th>Expression</th>
            <th>Result</th>
            </tr>
                <tr>
                    <td>{this.state.data.operation}<br /></td>
             <td> {this.state.data.expression}<br /></td> 
              <td> {this.state.data.result}<br /></td>
                </tr>  </table>   </div>
        </div>)
    }

}

export default Expression;