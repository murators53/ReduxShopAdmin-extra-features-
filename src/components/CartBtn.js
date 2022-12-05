import React from 'react'
import { connect, useSelector } from 'react-redux'

const CartBtn = (props) => {
  /* const state=useSelector((state)=>state.handleCart)
  console.log(state);*/
  let sum=0
  let totalPrice=0
  for (let i = 0; i < props.cartState.length; i++) {
    sum+=props.cartState[i].qty
    
  }
  for (let i = 0; i < props.cartState.length; i++) {
    totalPrice+=props.cartState[i].price*props.cartState[i].qty
    
  }
   
  return (
    <>
      <a href='#/cart' className='btn btn-outline-light me-2 '>
        <span className='fa fa-shopping-cart me-1'></span> Cart({sum})
      </a>
       
    </>
  )
}

const mapStateToProps = (state) => {
    return{
        ...state
    }
}

export default connect(mapStateToProps)(CartBtn) 