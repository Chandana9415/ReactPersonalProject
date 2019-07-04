import React, { Component } from 'react';
import axios from 'axios';



export class Expression extends Component{


    constructor(props) {
        super(props);
        this.state = {
          visible: false,
            list:["simplify","factor","derive","integrate","zeroes","tangent","area","cos","sin","tan","arccos","arcsin","arctan","abs","log"],
            data:[]
        }
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    
    async handleSubmit(event) {
        event.preventDefault();
    
        await Promise.all([axios.get(`https://newton.now.sh/` + document.getElementById('select').value+'/'+document.getElementById('exp').value)
          .then(res => {
            const data = res.data;
            this.setState({data: data })
            console.log(data)
         })
          
        ]);
    }

render(){
    let listItems = this.state.list.map((entry)=>
    <option key={entry} > {entry} </option>
    );
    return(<div>
       
        
        <div style={{width:'200px',height:'200px'}}>  
        <select id="select" >{listItems}</select> </div> 
 
        <form onSubmit={this.handleSubmit}>

<input type="text" placeholder="" id="exp" onChange={this.handleChange} style={{ border: '2px solid black', fontSize: '80%', width: '100px',height:'100px' }} />

<input type="submit" value="Submit" style={{ fontSize: '100%', height: '50%', background: "pink" }} />

</form>
Operation:{this.state.data.operation}<br />
Expression:{this.state.data.expression}<br />
Result:{this.state.data.result}<br />
    </div>)
}

}

export default Expression;