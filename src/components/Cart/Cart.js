import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    // console.log(cart);
    let quantity = 0;
    let total = 0;
    let shipping = 0;
    for(const product of cart)
    {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = total * 10 / 100;
    const grandTotal = total + shipping + tax;
    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <p>Selected Items : {quantity}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping Charge : ${shipping}</p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <h4>Grand Total : ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;