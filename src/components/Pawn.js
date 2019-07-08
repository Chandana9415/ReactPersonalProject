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
    return(<div  style={{ textAlign: "center" }}>
        <form onSubmit={this.handleSubmit}>

<input type="text" className="name" placeholder="Enter your email here!" id="emailid" onChange={this.handleChange} autoFocus />
<br />
<input type="submit" value="SUBMIT" className="submit"  />

</form>
<div style={{height:'400px',width:'100%',overflow:'auto'}}>
<table border="2px solid" align="center" style={{marginLeft:'60px'}}>
<tbody>
    
    <tr>
    <th>Domain</th>
    <th>Description</th>
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