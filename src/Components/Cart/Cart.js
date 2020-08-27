import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    const grandTotal = (Number(total)).toFixed(2);

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Course Ordered: {cart.length}</p>
            <p>Course Price: {(Number(total).toFixed(2))}</p>
            <p>Total Price: {grandTotal}</p>
            <br />
            {
                props.children
            }
        </div>
    );
};

export default Cart;