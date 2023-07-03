import React, { Component } from 'react'
// import axios from 'axios'
import hoc from './hoc'
class Emp extends Component {
//     res;
//     constructor(){
//         super()
//         this.state ={
//             data:[]
//         }
//     }

//     filterdata = (value)=>{
//         if(value === "male"){
//            this.newdata = this.state.userdata.filter(function(element){
//                return element.gender === "male"
//            })
//            this.setState({
//                data:this.newdata,
//            })
       
//         }else if(value === "female"){
//            this.newdata = this.state.userdata.filter(function(element){
//                return element.gender === "female"
//            })
//            this.setState({
//                data:this.newdata,
//            })
//         }else {
//            this.setState({
//                data: this.state.userdata,
//            })
//         }

//    }

//     //lifecycle method
//     //Here when the component loads the componentdidMount() will send a request to server//
//     componentDidMount(){
//         this.getdatafromserver()
//     }

//     getdatafromserver =async()=>{
//        this.res = await axios.get("https://randomuser.me/api/?results=10")
      
//         console.log(this.res.data.results);

//         this.setState({
//             data: this.res.data.results,
//             userdata: this.res.data.results, 
//         })
       
//     }

    render() {
        return (
            <div className='container mt-5'>
                <div className="row">
                    <h2>Employee Details</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae voluptas reiciendis odit quibusdam delectus saepe quaerat assumenda ut ea ducimus.</p>

                </div>

                <div className="row">
                    <div className="col-2">
                        <input type="radio" value="all" name="gender" className='mx-1' onChange={()=>{this.props.filterdata("all")}} defaultChecked />
                        ALL
                    </div>
                    <div className="col-2">
                        <input type="radio" value="all" name="gender" className='mx-1' onChange={()=>{this.props.filterdata("male")}} />
                        Male
                    </div>
                    <div className="col-2">
                        <input type="radio" value="all" name="gender" className='mx-1' onChange={()=>{this.props.filterdata("female")}} />
                        Female
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col">
                        <table className='table table-hover'>
                            <thead className='table-dark'>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                </tr>

                            </thead>
                            <tbody>
                                {
                                    this.props.state.data.length > 0 ?(
                                    this.props.state.data.map(function(element){
                                        return(
                                            <tr>
                                                <td><img src={element.picture.medium}  /></td>
                                                <td>{element.name.first}</td>
                                                <td>{element.email}</td>
                                                <td>{element.gender}</td>
                                            </tr>
                                        )

                                    })


                                    
                                    ): <div>No Data</div>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        )
    }
}
export default hoc(Emp)