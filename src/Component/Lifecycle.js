import React, { Component } from 'react'

class Lifecycle extends Component {
    constructor(props){
        super(props)
        console.log(" Constructor is called");
        this.state = {
            count:0
        }
    }

    static getDerivedStateFromProps(props, state){
        // console.log(props, state);
        console.log(" getderived state From Props is called");
    }

    componentDidMount(){
        //Used for Asynchronous Operations//
        console.log(" comp did mount is called");
    }

    UpdateCount=()=>{
        this.setState({
            count: this.state.count +1,
        })
    }

        shouldComponentUpdate(nextProps, nextState){
            console.log("Previous state", this.state.count);
            console.log("nextState", nextState.count);
            if(nextState.count === this.state.count){
               return false 
            }
            console.log("Should Component Update is called ");
            return true
            // when we return false the render method is not called and the state is not updated// 
            // return false
        }

        componentDidUpdate(){
            console.log("ComponentDidupdate is called");
        }

        getSnapshotBeforeUpdate(){
            console.log("snap shot before update is called ");
        }

  render() {
    console.log(" Render is called");
    return (
      <div className='container mt-5'>
        <h2 >Count value : {this.state.count}</h2>
        <button className='btn btn-success mt-3' onClick={this.UpdateCount}>UpdateCount</button>
      </div>
    )
  }
}
export default Lifecycle