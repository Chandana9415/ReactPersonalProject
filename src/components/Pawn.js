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
        Hello world from Pawn
        <form onSubmit={this.handleSubmit}>

<input type="text" placeholder="ex:Enter email ID" id="emailid" onChange={this.handleChange} style={{ border: '2px solid black', fontSize: '80%', width: '300px' }} />
<input type="submit" value="Submit" style={{ fontSize: '100%', height: '50%', background: "linear-gradient(to right bottom, #800000, #174c83)" }} />

</form>
            {this.state.data.map(function(item,key){
                    return(<table border="2px solid">
                     <tr style={{fontSize:'50%'}}>
                     <td> {item.Domain} </td> <br />
                     <td>{item.Description}</td>
                      </tr>
                     
                    </table>
                        )
            })}
    </div>);
        }

}

export default Pawn;