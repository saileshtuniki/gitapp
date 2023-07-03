import React  from 'react'
import HOCpattern from './HOCpattern'

 function Hover(props) {
    // const [state, setState] = useState (0)
    // const hovercount =()=>{
    //     setState(state + 1)
    // }
  return (
    <div className='container mt-5 text-center'>
      <div className="row">
        <div className="col">
            <button className='btn btn-primary px-5'onMouseOver={props.updatecount}>Hover on me Count increases:{props.state}</button>
        </div>
      </div>
    </div>
  )
}
export default HOCpattern(Hover)