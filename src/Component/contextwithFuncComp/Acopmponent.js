import React, {useState} from 'react'
import Bcopmponent from './Bcomponent'
import Context from "./functionalcontext"

 function Acopmponent() {
    const [state, setState] = useState("Innnomatics")

    const UpdatecomponentC = () =>{
        setState("Sailesh")
    }

    
  return (
    <div className='card'>
        <div className="card-header bg-dark text-white">
            <h3>A component</h3>

        </div>

        <div className="card-body">
            <button className='btn btn-primary mx-5 my-2' onClick={UpdatecomponentC}>Send data to C</button>
            <Context.Provider value ={state} >
                < Bcopmponent />
            </Context.Provider >

        </div>

    </div>
  )
}
export default Acopmponent