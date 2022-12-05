import React, { useState } from "react";
import { connect } from "react-redux";

const Cart = (props) => {
  const [total,setTotal]=useState(0)
  
  const handleClose = (product) => {
    props.dispatch({
      type: "close_item",
      payload: product,
    });
  };

  const handleAddButton = (product,index) => {
    props.dispatch({
      type: "add_item",
      payload: product,
    })
    setTotal(total+1)
    // setTotal(product.reduce((x,y)=>x.qty+y.qty),0)
  };
  const handleDelButton = (product) => {
    props.dispatch({
      type: "delete_item",
      payload: product,
    });
    setTotal(total-1)
  };
  console.log(props.cartState.map(item=>item.price*item.qty)
  .reduce((a, b) => a + b, 0).toFixed(2))
  /* setTotal(props.cartState.map(item=>item.price*item.qty)
  .reduce((a, b) => a + b, 0).toFixed(2)) */
  return (  
    <>
      <div className="row g-5 px-4">
        <div className="col-md-7 col-lg-8">
          {props.cartState.length ? (
            props.cartState.map((item,index) => {
              return (
                <div className="px-4 my-5 bg-light rounded-3" key={item.id}>
                  <div className="container py-4">
                    <button
                      onClick={() => handleClose(item)}
                      className="btn float-end"
                      aria-label="Close"
                    >
                      <i
                        className="fa fa-trash fa-xl fa-red"
                        aria-hidden="true"
                      ></i>
                    </button>
                    <div className="row justify-content-center">
                      <div className="col-md-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          height="150px"
                          width="150px"
                        />
                      </div>
                      <div className="col-md-4 ">
                        <h3>{item.title}</h3>
                        <p className="lead fw-bold ">
                          {item.qty} X {item.price} TL =
                          {(item.qty * item.price).toFixed(2)} TL
                        </p>
                        <button
                          className="btn btn-danger "
                          onClick={() => handleDelButton(item)}
                        >
                          <i className="fa fa-minus"></i>
                        </button>
                        <button
                          className="btn btn-success"
                          onClick={() => handleAddButton(item,index)}
                        >
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="display-6 d-flex justify-content-center my-5">
              There is no item in your cart
            </p>
          )}
        </div>
        <div className="col-md-5 col-lg-4 order-md-last ">
          <div className="d-flex justify-content-between align-items-center">
            <a href='#/' className=" w-50 btn btn-success my-4">
              Continue Shoping
            </a>
            <h4>
              <span className="text-danger">Your cart</span>
            </h4>
          </div>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <span className=" fw-bold">
                  selected products ({props.cartState.length})
                </span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <h1 className="my-0 text-success fw-bold">{props.cartState.map(item=>item.price*item.qty)
  .reduce((a, b) => a + b, 0).toFixed(2)} TL</h1>
              <small className="text-success fw-bold display-6 ">Total</small>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Cart);
