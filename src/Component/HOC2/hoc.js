import { render } from "@testing-library/react";
import React from "react";
import axios from 'axios'

const hoc =(ReactComponent) =>{
    class NewReactComponent extends React.Component{
    res;
    newdata;
    constructor(){
        super()
        this.state ={
            data:[],
            userdata:[],

        }
    }

    filterdata = (value)=>{
         if(value === "male"){
            this.newdata = this.state.userdata.filter(function(element){
                return element.gender === "male"
            })
            this.setState({
                data:this.newdata,
            })
        
         }else if(value === "female"){
            this.newdata = this.state.userdata.filter(function(element){
                return element.gender === "female"
            })
            this.setState({
                data:this.newdata,
            })
         }else {
            this.setState({
                data: this.state.userdata,
            })
         }

    }
    //lifecycle method
    //Here when the component loads the componentdidMount() will send a request to server//
    componentDidMount(){
        this.getdatafromserver()
    }

    getdatafromserver =async()=>{
       this.res = await axios.get("https://randomuser.me/api/?results=10")
      
        console.log(this.res.data.results);

        this.setState({
            data: this.res.data.results,
            userdata: this.res.data.results,
        })
       
    }
    render(){
        return <ReactComponent state = {this.state} filterdata ={this.filterdata} />

    }
    }
    return NewReactComponent
    }


export default hoc;