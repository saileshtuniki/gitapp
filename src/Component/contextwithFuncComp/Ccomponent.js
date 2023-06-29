import React, { useContext } from 'react'
import Context from "./functionalcontext"
function Ccopmponent() {

const mydata = useContext(Context)

    return (

        <div className="card">
            <div className="card-header bg-danger text-white">
                <h4>C Component</h4>
            </div>
            <div className="card-body">
                <dl>
                    <dt>Software institue Name</dt>
                    <dd>{mydata}</dd>
                </dl>
            </div>
        </div>

    )
}
export default Ccopmponent