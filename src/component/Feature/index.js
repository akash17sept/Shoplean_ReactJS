import React from 'react';
import './feature.css';

const Feature = () => {
    return (
        <div className="features">
            <div className="icon-container">
                <div className="img-wrapper">
                    <img src="https://shoplane.netlify.app/img/icon1.png" />
                </div>
                <h4>Free Delivery</h4>
            </div>
            <div className="icon-container">
                <div className="img-wrapper">
                    <img src="https://shoplane.netlify.app/img/icon2.png" />
                </div>
                <h4>Money Back Gurantee</h4>
            </div>
            <div className="icon-container">
                <div className="img-wrapper">
                    <img src="https://shoplane.netlify.app/img/icon3.png" />
                </div>
                <h4>Always Support</h4>
            </div>
            <div className="icon-container">
                <div className="img-wrapper">
                    <img src="https://shoplane.netlify.app/img/icon4.png" />
                </div>
                <h4>Secure Payment</h4>
            </div>
        </div>
    );
}
 
export default Feature;