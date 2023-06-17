import React , {Component} from 'react'
import Child from './Child'

class  Parent extends Component() {
  constructor(props){
    super(props)
    this.state = {
      name : Sailesh,
      city : hyd,
      }
  }
  render(){
  return (
    <div className='Container'>
     <div className="row">
        <div className="col">
            <div className="card">
                <div className="card-header">
                <h2>Parent component</h2>
        
                </div>
                <div className='card-body'>
                    <dl>

                        <dt>User Name</dt>
                        <dd>{this.state.name}</dd>
                        <dt>User city</dt>
                        <dd>{this.state.city}</dd>
                      
                    </dl>
                </div>
                <div className='card-footer'>

                </div>
            </div>
        </div>
     </div>
    </div>
  )
}
}

export default Parent
