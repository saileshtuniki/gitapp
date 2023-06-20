import React, { Component } from 'react'

class Profile extends Component {
    render(){
    return (
        <div className='card'>
            <div className="card-header">
            <img  src={this.props.userdata.avatar_url} width="150 %" height="150 px " />
            </div>
            <div className="card-body">
                <h2>{this.props.userdata.name}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ipsa.</p>
                <button className='btn btn-success' >Profile</button>
            </div>

        </div>
    )
}
}
export default Profile

