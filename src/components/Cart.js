import React from "react";
import "./cart.css";

function Cart() {
  return (
    <div>
      <div className="container-fluid bg-checkout">
        <div className=" cart-start">
          <p className="my-cart">My Cart</p>
          <div className=" item-section">
           <p className="text-center">Your cart is empty.</p>
          </div>
        </div>
        <div className="container">
   
        </div>
      </div>
    </div>
  );
}

export default Cart;
