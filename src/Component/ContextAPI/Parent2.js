import React, {Component} from "react";

import First from "./First"
import  myContext from './Context'

class Parent2 extends Component {
  constructor(props){
    super(props)
    this.state={
      data:'',
    }
    this.inputRef = React.createRef()
  }

  updateState = () => {
    this.setState({
      data:this.inputRef.current.value
    })
  }

  render() {
    return (
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h4>Parent Component</h4>
                </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-8">
                        <input ref={this.inputRef} type="text" className="form-control" />
                      </div>
                      <div className="col-4">
                        <button className="btn btn-primary" onClick={this.updateState}>Send</button>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <myContext.Provider value={this.state.data}>
                    <First />
                    </myContext.Provider>
                  </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
export default Parent2