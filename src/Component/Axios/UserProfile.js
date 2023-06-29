import React, { Component } from 'react'
import axios from 'axios'

class UserProfile extends Component {
    //users is the array//
    constructor(props) {
        super(props)
        this.state = {
            users: [],
        }

    }

    getuserdetails = () => {
        axios.get(`https://randomuser.me/api/?results=10`)
            .then(response => {
                console.log(response.data.results);

                this.setState({
                    users: response.data.results,
                })
            })
            .catch(error => {
                console.error(error);
            })
    }
    render() {
        return (
            <div className='container mt-5'>
                <div className="row">
                    <div className="col">
                        <h4>User Details</h4>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus consequuntur aspernatur sed soluta alias debitis doloribus qui fugiat provident sapiente.
                        </p>
                        <button className='btn btn-primary' onClick={this.getuserdetails}>Get User details</button>
                    </div>
                </div>
                <div className="row mt-5">
                    {/* javascript code */}

                    {
                        this.state.users.length > 0 ?
                            this.state.users.map((element) => {
                                return (
                                    // <div className="col-4">
                                    //     <div className="card">
                                    //         <div className="card-header">
                                    //             <img src={element.picture.medium} width="80%" height="80%" />
                                    //         </div>
                                    //         <div className="card-body">
                                    //             <h2>{element.name.first} {element.name.second}</h2>
                                    //         </div>
                                    //     </div>
                                    // </div>
                                    
                                    <table className='table table-striped'>
                                        <tr className='col'>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>City</th>
                                            <th>Email</th>
                                            <th>Action</th>
                                        </tr>
                                        <tr className='col'>
                                            <td><img src={element.picture.medium} width="70%" height="70%"/></td>
                                            <td><h4>{element.name.first} {element.name.second}</h4></td>
                                            <td><h4>{element.location.city}</h4></td>
                                            <td>{element.email}</td>
                                            <td><button className='btn btn-primary'>Details</button></td>
                                        </tr>
                                    </table>
                                )
                            })
                            : <div className='display-3 text-center text-danger'> No Data </div>
                    }
                </div>
            </div>

        )
    }
}

export default UserProfile
