import React, { Component } from "react";


class  Details extends Component{
    render(){
    return (
        <div className="card">
            <div className="card-header ">
                <h3>User Details</h3>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    <li className="list-group-item">login:  {this.props.userdata.login}</li>
                    <li className="list-group-item">Blog:  {this.props.userdata.blog}</li>
                    <li className="list-group-item">Location:  {this.props.userdata.location}</li>
                    <li className="list-group-item">ID:  {this.props.userdata.id}</li>
                </ul>
            </div>
        </div>
    )
}
}

export default Details