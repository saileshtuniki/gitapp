import React, { useState } from 'react'
import Ccopmponent from './Ccomponent'

function Bcopmponent() {


    return (

        <div className="card">
            <div className="card-header bg-dark text-white">
                <h4>B Component</h4>
            </div>
            <div className="card-body">
                < Ccopmponent />
            </div>
        </div>

    )
}
export default Bcopmponent