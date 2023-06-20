//THIS is passing data from CHILD Component To PARENT Component// 

import React, { Component } from 'react'

class  Child extends Component {
    constructor(props){
      super(props)
      this.inputref = React.createRef()
    }  
      //Creating Refs//
      //Refs are created using React.createRef() and attached to React elements via the ref attribute. Refs are commonly assigned to an instance property when a component is constructed so they can be referenced throughout the component.//

    // changebgcolor = () =>{
    //   this.inputref.current.style.borderColor = "red"
    
    //   this.inputref.current.placeholder = "value changed"

    //   alert(this.inputref.current.value)
    // }

    takedatafrominput = () =>{
      this.props.updatestate  (this.inputref.current.value)
    }

    
    render(){
    return (
    <div className='container'>
      
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header">
            <h4>Child Component</h4> 
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-5">

                  <input type='text' ref={this.inputref} placeholder='Enter Name'/>
                </div>
                <div className="col-4">
                  <button className='btn btn-success' 
                  onClick={this.takedatafrominput}>Send {" "}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
  }
export default Child
