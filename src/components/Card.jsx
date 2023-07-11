import React from 'react';
import { useDispatch } from 'react-redux';
import { cartslice } from '../redux/Cartslice';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
const dispatch = useDispatch()
const added = (t)=>{
  t.classList.add('clicked')
}

const navigate = useNavigate()
  return (
    <>
        <div className='col-xl-4 col-md-6 my-3'>
            <div className='card h-100 text-center p-4'>
              <img className="card-img-top" src={props.dataa.image} alt={props.dataa.title} height='250px' />
                <div className='card-body' >
                    <h4 className="card-title fs-3 mb-0">{props.dataa.title.substring(0,12)}...</h4>
                    <p className="card-text fs-4 fw-bolder'">price: {props.dataa.price} L.E</p>
                    <div className=''>
                      <button className="btn btn-primary me-3" onClick={(e)=>{
                        dispatch(cartslice.actions.addtocart(props.dataa))
                        added(e.target)
                        }}>Add to Cart</button>
                      <button className="btn btn-primary" onClick={()=>navigate(`${props.dataa.id}`)}>Show More</button>
                    </div>
                </div>
            </div>
          </div>
    </>
  )
}

export default Card
