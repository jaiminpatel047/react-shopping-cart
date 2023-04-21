import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { ButtonGroup, Tooltip } from "@mui/material";

const Cart = ({ cart }) => {
  const buttonStyle = { backgroundColor: "#f3c13d" };

  const handleClose = (item) => {
    setUpdateCard(updatedCart.filter((cartItem) => cartItem !== item))
  };

  const [updatedCart, setUpdateCard] = useState([])

  useEffect(()=>{
    setUpdateCard(cart)
  }, [cart])

  return (
    <div className="container">
      <div className="cartSection">
        <div className="cart-title">
          <h1>Shopping Cart</h1>
          <p>You have {updatedCart.length} items in Shopping Cart</p>
        </div>
        <div className="cart-section">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <img
                className="cart-empty-img"
                src="../image/empty-cart.png"
                alt="Empty Cart Img"
              />
            </div>
          ) : (
            updatedCart.map((item, cartIndex) => (
              <div className="cart-shopping-box">
                <div className="cart-img">
                  <img
                    className="cart-img-box"
                    src={item.menuItemImg}
                    alt="ddddd"
                  />
                </div>
                <div className="cart-button-box">
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                  >
                    <Tooltip title="Remove">
                      <Button
                        onClick={() => {
                          const CartPlus = updatedCart.map((item, index) => cartIndex === index ? { ...item,  quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item)
                        setUpdateCard(CartPlus)
                        }}
                        style={buttonStyle}
                      >
                        {" "}
                        <i className="fa-solid fa-minus"></i>
                      </Button>
                    </Tooltip>
                    <Button style={buttonStyle}>{item.quantity}</Button>
                    <Tooltip title="Add">
                      <Button
                        onClick={() => {
                          const CartPlus = updatedCart.map((item, index)=>{
                              return cartIndex === index ? { ...item,  quantity: item.quantity + 1 } : item; })
                          setUpdateCard(CartPlus)
                        }}
                        style={buttonStyle}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </Button>
                    </Tooltip>
                  </ButtonGroup>
                </div>
                <div className="cart-price">
                  <span>&#8377;</span> {item.menuPrice * item.quantity}
                </div>
                <button className="cart-button" onClick={() => handleClose(item)}>
                  <i className="fa-solid fa-rectangle-xmark"></i>
                </button>
              </div>
            ))
          )}
          <div className="cart-total-section">
            {cart.length === 0 ? (
              ""
            ) : (
              <p> Subtotal (<span className="cart-qyt">{updatedCart.length} items</span>) : 
                <span>&#8377;</span>
                <span className="cart-total"> 
                   {updatedCart
                    .map((item) => parseInt(item.menuPrice * item.quantity))
                    .reduce((total, value) => total + value, 0)}
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
