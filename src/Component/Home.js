import React, { Component } from "react";

import Search from "../Component/Search";
import Profile from "../Component/Profile";
import Details from "../Component/Details";

 class Home extends Component {
  constructor(props){
  super(props)
  this.state= {
    userdata:{ },
  }
  }

  updatehomestate = (newstate)=>{
    this.setState({
      userdata:newstate,    
    })
  }

 render(){
  return (
    <div>
      <div className="container  mt-5">
        <div className="row">
            <div className="col">
                < Search updatehomestate ={this.updatehomestate} />
            </div>
        </div>
        < br />
        <div className="row">
            <div className="col-4">
                <Profile userdata ={this.state.userdata} />
            </div>
            <div className="col-8">
                <Details userdata ={this.state.userdata} />
            </div>
        </div>
      </div>
    </div>
  )
}
 }
export default Home;