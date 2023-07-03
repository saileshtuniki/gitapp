import React from 'react'
import HOCpattern from './HOCpattern'

 function Button(props) {

    // const [state, setState] = useState (0)
    // const updatecount =()=>{
    //     setState(state + 1)
    // }

  return (
    <div className='container mt-5 text-center'>
      <div className="row">
        <div className="col">
            <button className='btn btn-success px-5' onClick={props.updatecount} >Click me Count : {props.state} </button>
        </div>
      </div>
    </div>
  )
}
export default HOCpattern(Button)