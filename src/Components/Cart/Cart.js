import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    const grandTotal = (Number(total)).toFixed(2);

    return (
        <div className="cart">
            <div className="text">
                <h4>Order Summary</h4>
                <p>Course Ordered: {cart.length}</p>
                <p>{cart.name}</p>
                <p>Total Price: {grandTotal}$</p>
                <br />
                {
                    props.children
                }
            </div>
        </div>
    );
};

export default Cart;