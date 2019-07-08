import React, { Component } from 'react';
import './index.css'
export class Home extends Component{

    render(){
        return(<div>
        <div className="typewriter">
            <h3>Hi, I'm Chandana and I'm excited to meet you!</h3>
            <h3>I look forward to your REACT-ion :)</h3>

            </div>
            <div className="typewriter2">
            <h3>Go on, click on one of the circles for me.</h3>
            </div>
            
             <div style={{alignContent:'center',textAlign:'center'}}>
             <a href="https://www.linkedin.com/in/chandana-ravichandra"><i className="fa fa-linkedin"></i></a>
             <a href="https://github.com/Chandana9415"><i className="fa fa-github"></i></a>
             <a href="mailto:chandanaravichandra15@gmail.com"><i className="fa fa-envelope"></i></a>

             </div>

           
      </div>)
    }

}

export default Home;