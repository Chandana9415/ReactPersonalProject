import React, { Component } from 'react';
import axios from 'axios';
import './index.css'
export class Home extends Component{

    render(){
        return(<div>
        <div className="typewriter">
            <h3>Hi, I'm Chandana and I'm so excited to meet you today!</h3>
            <h3>I look forward to your REACT-ion :)</h3>

            </div>
            <div className="typewriter2">
            <h3 className="typewriter2">Go on, click one of the circles.</h3>
            </div>
            
             <div style={{alignContent:'center',textAlign:'center'}}>
             <a href="https://www.linkedin.com/in/chandana-ravichandra"><i class="fa fa-linkedin"></i></a>
             <a href="https://github.com/Chandana9415"><i class="fa fa-github"></i></a>
             <a href="chandanaravichandra15@gmail.com"><i class="fa fa-envelope"></i></a>
             </div>

           
      </div>)
    }

}

export default Home;