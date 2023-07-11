import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'


const Products = () => {
    const [products,setproducts]= useState()
    useEffect(()=>{
        axios.get ('https://fakestoreapi.com/products').then(json=>setproducts(json.data)).catch((err)=>console.log(err))
    },[])
  return (
      <div className='products-main' >
        <h1>Our Products</h1>
            <div className='container'>
                <div className='row'>
                {
                    products?.map((prod)=>(<Card key={prod.id} dataa={prod} />))
                }
                </div>
            </div>
      </div>
  )
}

export default Products
