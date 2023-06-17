import React from 'react'

 function Search() {
  return (
    
      <div className ="card">
        <div className="card-header bg-dark text-white">
            <h2>Github</h2>
        </div>

        <div className='card-body' >
            <div className="row">
              <div className="col-8">
              <input type='text' placeholder='Enter some text ' className='form-control'></input>

              </div>
              <div className="col-4">
              <button className='btn btn-primary'>Search</button>
              </div>
            </div>
        </div>
      </div>
    
  )
}
export default Search