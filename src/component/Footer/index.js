import React from 'react';
import './index.css';

const Footbar = () => {
    return (
        <div className="footer">
            <div>
                <p className="footer-heading">Online Store</p>
                <a href="/" className="footer-link">Men Clothing</a>
                <a href="/" className="footer-link">Women Clothing</a>
                <a href="/" className="footer-link">Men Accessories</a>
                <a href="/" className="footer-link">Women Accessories</a>
            </div>
            <div>
                <p className="footer-heading">Helpful Links</p>
                <a href="/" className="footer-link">Home</a>
                <a href="/" className="footer-link">About</a>                    
                <a href="/" className="footer-link">Contact</a>
            </div>
            <div>
                <p className="footer-heading">Partners</p>
                <a href="/" className="footer-link">Zara</a>                    
                <a href="/" className="footer-link">Pantaloons</a>
                <a href="/" className="footer-link">Levis</a>
                <a href="/" className="footer-link">UCB</a>
                <a href="/" className="footer-link">+ Many More</a>
            </div>
            <div>
                <p className="footer-heading">Address</p>
                <p className="footer-link">Building 101</p>
                <p className="footer-link">Central Avenue</p>
                <p className="footer-link">LA - 902722</p>
                <p className="footer-link">United States</p>
            </div>
        </div>
    );
}
 
export default Footbar;