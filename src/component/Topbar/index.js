import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './topbar.css'

export class index extends Component {
    render() {
        const {cart} = this.props
        return (
            <div>
                <div className="topbar">
                    <div className="logo">
                        <Link to="/">
                            <h4>
                                <span>SHOP</span>
                                LANE
                            </h4>
                        </Link>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">Clothing</Link>
                        </li>
                        <li>
                            <Link to="/">Accessories</Link>
                        </li>
                    </ul>
                    <div className="icons">
                        <i className="fa fa-search"></i>
                        <div className="cart cartIcon">
                            <Link to="/cart">
                                <i className="fa fa-shopping-cart">
                                    <sup className="cart-count">{cart.length}</sup>
                                </i>
                            </Link>
                        </div>
                        <i className="fa fa-user-circle"></i>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cart : state.cart
})



export default connect(mapStateToProps, null)(index)
