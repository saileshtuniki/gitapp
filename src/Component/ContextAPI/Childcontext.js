import React, { Component } from 'react'
import myContext from './Context'

 class Childcontext extends Component {
  render() {
    return (
      <div className='card'>
        <div className="card-header bg-secondary text-white">
          <h2>Child Componet</h2>

        </div>
        <div className="card-body">
          <dl>
            <dt>USER NAME</dt>
            <dd>
              <myContext.Consumer>
                {
                  (userdata) =>{
                    //userdata === this.state
                    return userdata
                  }
                }
              </myContext.Consumer>
            </dd>
          </dl>
        </div>
      </div>
    )
  }
}

export default Childcontext
