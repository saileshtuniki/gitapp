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
                    <li className="list-group-item">Login: <b> {this.props.userdata.login} </b></li>
                    <li className="list-group-item">Blog: <b> {this.props.userdata.blog} </b></li>
                    <li className="list-group-item">Location: <b> {this.props.userdata.location}</b></li>
                    <li className="list-group-item">ID: <b> {this.props.userdata.id}</b></li>
                </ul>
            </div>
        </div>
    )
}
}

export default Details