import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from'../components/Card'
import { cartslice } from '../redux/Cartslice'

const Cart = () => {
    const productdata = useSelector((state)=>state?.cart?.items)
    console.log (productdata)
    const arr = productdata.filter((value, index, self)=>
    index === self.findIndex((t) =>
    t.id === value.id
    )
    )
    const dispatch = useDispatch()

  return (
    <>
    <div className='container'>
      <div className='row'>
          {
          productdata.lenght === 0 ? <h1 className="card-text" >Noting Found</h1> : arr?.map((r)=>
        <div className='col-xl-3 col-md-6 my-3 text-center'>
          <div className='card h-30 p-4'>
            <img className="card-img-top" src={r.image} alt={r.title} height='250px'/>
            <h4 className="card-title mb-0">{r.title.substring(0,12)}...</h4>
            <p className="card-text fs-5">price: {r.price} L.E</p>
            <div>
              <button className="btn btn-danger" onClick={()=>dispatch(cartslice.actions.removefromcart(r))}>Remove</button>
            </div>
          </div>
        </div>
          )}
          </div>
        </div>
    </>  
  )
}

export default Cart
