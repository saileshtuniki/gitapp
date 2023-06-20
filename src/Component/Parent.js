import React , { Component } from 'react'
import Child from './Child'

class  Parent extends Component {
  constructor(props){
    super(props)
    this.state = {
      name : "Sailesh",
      
      }
  }

  updateparentstate = (newname) =>{
    this.setState({
      name: newname,
    })
  }
  render(){
  return (
    <div className='container mt-5'>
     <div className="row">
        <div className="col">
          <div className='col'>
            <div className="card">
                <div className="card-header bg-primary text White">
                <h2>Parent Component</h2>
        
                </div>
                <div className='card-body'>
                    <dl>

                        <dt>User Name</dt>
                        <dd>{this.state.name}</dd>
                        
                      
                    </dl>
                </div>
                <br />
                <div className='card-footer'>
                  < Child updatestate ={this.updateparentstate} />
                </div>
            </div>
          </div>
         </div>
      </div>
     </div>
  )
}
}

export default Parent
