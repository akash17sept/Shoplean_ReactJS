import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearCart } from '../../redux/action'
import './cart.css'

export class index extends Component {

    clearCart() {
        this.props.clearCart([])
    }

    render() {

        let carts=[]
        carts = this.props.cart
        console.log(carts)
        let amount = 0

        for(let i=0; i<carts.length; i++) {
            amount += carts[i].price
        }

        let nCarts = carts.slice(0, carts.length).sort((a, b) => a.id - b.id);
        for(let i = 0; i < nCarts.length - 1; i++) {
            if(nCarts[i].id === nCarts[i + 1].id) {
                delete nCarts[i];
            }
        }

        return (
            <div className="cart">
                <h1>Checkout</h1>
                <h2>Total Items : {carts.length}</h2>
            <div id="mainDiv1">
                
                <div className="lleft">
                    {nCarts.map((v,i) =>
                        <div className="cardDiv" key={i}>
                        <img src={v.preview} alt={i}/>
                            <div>
                                <p>{v.name}</p>
                                {/* {ncart id is matched with main cart id to get the no.of same products} */}
                                <p>Qty: X {carts.filter(val => val.id === v.id).length}</p>
                                <p>Amount: Rs {v.price}</p>
                            </div>
                        </div>
                    )}                   
                </div>


                <div id="right">
                <p>Total Amount</p>
                    <p className="amt">Amount Rs: <span>{amount}</span></p>
                    <Link to={{pathname: "/orderconfirm"}}>
                    <button onClick={() => this.clearCart()}>Place Order</button>
                    </Link>
                </div>

            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart
})

const mapDispatchToProps = (dispatch) => ({
    clearCart: (payload) => dispatch(clearCart(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
