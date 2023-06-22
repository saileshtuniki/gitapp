import React, { Component } from 'react'
import Childcontext from './Childcontext'

 class Third extends Component {
  render() {
    return (
        <div className='card'>
        <div className='card bg-primary text-white'>
        <h4> C Component</h4>

      </div>
      <div className="card-body">
          < Childcontext />
      </div>
    </div>
        
      
    )
  }
}

export default Third