import React, {Component} from 'react'

 class Search extends Component{
    constructor(props){
      super(props)
      this.inputref = React.createRef()
       this.state = {
        userdetails:{ },
       }
    }
    getuserdetails = () =>{
      fetch(`https://api.github.com/users/${this.inputref.current.value}`)
      .then((response)=>{
        return response.json()
      })
      .then((actualdata)=>{
        console.log(actualdata);
        this.props.updatehomestate(actualdata)
      })
    }

  render(){
  return (
    
      <div className ="card">
        <div className="card-header bg-dark text-white">
            <h2>Github</h2>
        </div>

        <div className='card-body' >
            <div className="row">
              <div className="col-8">
              <input type='text' ref ={this.inputref} placeholder='Enter some text ' className='form-control'></input>

              </div>
              <div className="col-4">
              <button className='btn btn-primary' onClick={this.getuserdetails}>Search</button>
              </div>
            </div>
        </div>
      </div>
    
  )
}
 }
export default Search