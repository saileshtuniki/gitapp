import React, { Component } from 'react'
import Third from './Third'

class Second extends Component {
  render() {
    return (
        <div className='card'>
        <div className='card bg-success text-white'>
        <h4> B Component</h4>

      </div>
      <div className="card-body">
          < Third />
      </div>
    </div>
    )
  }
}

export default Second
