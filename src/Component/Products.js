import React, { useState } from 'react'
import axios from 'axios'
function Products() {
    let response;
    const [state, setState] = useState({
        productdetails: []
    })

    const Electronicdata = async () => {
        response = await axios.get(`https://fakestoreapi.com/products/category/electronics`)
        console.log(response.data);
        setState({
            productdetails: response.data,
        })
    }

    const jewelerydata = async() =>{
        response = await axios.get(`https://fakestoreapi.com/products/category/jewelery`)
        console.log(response.data);
        setState({
            productdetails: response.data,
        })
    }

    const mensdata = async() =>{
        response = await axios.get(`https://fakestoreapi.com/products/category/men's clothing`)
        console.log(response.data);
        setState({
            productdetails: response.data,
        })
    }
    const womensdata = async() =>{
        response = await axios.get(`https://fakestoreapi.com/products/category/women's clothing`)
        console.log(response.data);
        setState({
            productdetails: response.data,
        })
    }

    return (
        <div className='container'>
            <div className="row">

                <div className="col-4">
                    <div className="row mt-5">
                        <button className='btn btn-danger my-3' onClick={Electronicdata}>Electronics</button>
                    </div>
                    <div className="row">
                        <button className='btn btn-danger my-3' onClick={jewelerydata}>jewelery</button>
                    </div>
                    <div className="row">
                        <button className='btn btn-danger my-3'onClick={mensdata}>Mens Clothing</button>
                    </div>
                    <div className="row">
                        <button className='btn btn-danger my-3'onClick={womensdata}>Women Clothing</button>
                    </div>
                </div>
                <div className="col-8">
                    {
                        state.productdetails.length > 0 ? (
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <h2>{state.productdetails[0].category}</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptatem sit voluptatibus architecto cumque fuga nulla quaerat nesciunt, necessitatibus perferendis?</p>

                                    </div>
                                </div>
                            
                            <div className="container">
                                <div className="row">
                                    {
                                        state.productdetails.map((element) => {
                                            return (
                                                <div className="col-4">
                                                    <div className="card">
                                                        <div className="card-header">
                                                            <img src={element.image} width ="100%" height ="200px"  />
                                                        </div>
                                                        <div className="card-body">
                                                            <p className="text-muted">{element.title}</p>
                                                            <h4>{element.price}</h4>
                                                            <button className='btn btn-primary'>More Details</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                

                                            )
                                        })
                                    }
                                </div>
                            </div>
                            </div>
                        )
                            :
                            (<div className='text-center mt-5'><h3 className='text-danger'> No Data </h3></div>
                            )}
                </div>
                
            </div>
        </div>
        
    )
}
export default Products