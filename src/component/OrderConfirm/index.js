import React from 'react';
import '../../App.css';

const OrderConfirm = () => {
    return (
        <div className="order-confirm">
            <img src="https://shoplane.netlify.app/img/img_confirm.png" />
            <h3>Order Placed Successfully!!</h3>
            <p>We have sent you an email with the order details</p>
        </div>
    );
}
 
export default OrderConfirm;