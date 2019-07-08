import React, { Component } from 'react';
import axios from 'axios';


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

        axios.get(`https://newton.now.sh/` + document.getElementById('select').value + '/' + document.getElementById('exp').value)
            .then(res => {
                const data = res.data;
                this.setState({ data: data })
                console.log(data)
            })
            .catch((error) => {
                alert('Invalid Expression. Please try Again!')
                console.log(error)
            })
        
    }

    render() {
        let listItems = this.state.list.map((entry) =>
            <option key={entry} > {entry} </option>
        );
        return (<div>
   <form onSubmit={this.handleSubmit} style={{alignContent:'center', textAlign:'center'}}>
            <select id="select" style={{backgroundColor:'wheat'}}>{listItems}</select>
              <br />
                <input type="text" id="exp" className='name' placeholder="Enter your expression here!" onChange={this.handleChange} autoFocus />
               
                <br />
                <input type="submit" className="submit" value="SUBMIT"/>

            </form>
            <br />
            <div style={{ alignContent: 'center', width: '100%', textAlign: 'center' }}>
                <table border="1px border" style={{ marginLeft: '250px' }}>
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