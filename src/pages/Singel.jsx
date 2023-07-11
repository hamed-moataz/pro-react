import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from './Products'

const Singel = () => {

    const[product,setproduct] = useState()
    const params = useParams()
    const pid = params.id

    useEffect(()=>{
      axios.get(`https://fakestoreapi.com/products/${pid}`).then((resp)=>setproduct(resp.data)).catch((err)=>console.log(err))
    }, [])

  return (
    <div className='container '>
      <div className='col-xl-5 col-md-6 row my-2'>
        <div className='text-center'>
          <img className="card-img-top my-4" src={product?.image} alt={product?.title} height='500px' />
          <h4 className='fw-bolder my-2'> {product?.title} </h4>
          <h5 className='fw-bold'>{product?.description}</h5>
          <p className="card-text fs-3">price : {product?.price} L.E</p>
        <a href='http://localhost:3000/Products'><button className="btn btn-danger">Go Back</button></a>
        </div>
      </div>
    </div>
  )
}

export default Singel
