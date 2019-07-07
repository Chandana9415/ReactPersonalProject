import React, { Component } from 'react';
import axios from 'axios';


export class Pawn extends Component{

    constructor(props) {
        super(props);
        this.state = {
          visible: false,
            data:[],
        }
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      

      async handleSubmit(event) {
        event.preventDefault();
    
        await Promise.all([axios.get(`https://cors-git.herokuapp.com/https://haveibeenpwned.com/api/v2/breachedaccount/` + document.getElementById('emailid').value)
          .then(res => {
            const data = res.data;
            this.setState({data: data })
            console.log(data)
         })
        ]);
    
    }
    

render(){
    return(<div>
        <form onSubmit={this.handleSubmit}>

<input type="text" placeholder="Let's check if you got pawned. Enter your email here!" id="emailid" onChange={this.handleChange} style={{ border: 'none', fontSize: '80%', width: '100%', background:'none' }} autoFocus />
<input type="submit" value="Submit" style={{ fontSize: '100%', height: '50%',width:'100%', background: "lightblue" }} />

</form>
<div style={{height:'400px',width:'100%',overflow:'auto'}}>
<table border="2px solid">
<tbody>
    
    <tr>
    <th style={{width:'30%'}}>Domain</th>
    <th style={{width:'70%'}}>Description</th>
    </tr>
            {this.state.data.map(function(item,key){
                    return(
                     <tr style={{fontSize:'50%'}}>
                     <td style={{width:'10%'}}> {item.Domain} </td> 
                     <td>{item.Description}</td>
                     </tr>
                     
                   
                        )
            })}
    </tbody> </table></div> </div>);
        }

}

export default Pawn;