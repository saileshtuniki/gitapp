import React, {useState} from "react";


        //Here, Reactcomponent is nothing but button component, its taking like an argument
 function HOCpattern(Reactcomponent) {
    
    function Newcomponent(){
        //Multiple Functionalities
        //data, states, etc..

        const [state, setState] = useState (0)
         const updatecount =()=>{
             setState(state + 1)
         }
         //Here, we are passing two "props" i.e state & updatecount
        return <Reactcomponent state = {state} updatecount ={updatecount} />
    }

    return Newcomponent
 
}
export default HOCpattern