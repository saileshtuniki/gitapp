import React, { Component } from 'react'
import Second from './Second'

 class First extends Component {
  render() {
    return (
    <div className='card'>
        <div className='card bg-primary text-white'>
        <h4> A Component</h4>

      </div>
      <div className="card-body">
          < Second />
      </div>
    </div>
    )
  }
}

export default First
