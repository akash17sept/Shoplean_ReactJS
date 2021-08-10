import React, { Component } from 'react'
import { connect } from 'react-redux'
import Feature from '../Feature'
import Card from '../Card';
import '../../App.css'
import { getProducts } from '../../redux/action'
import axios from 'axios';
import Slider from '../Slider';

export class index extends Component {
    componentDidMount() {
        axios
        .get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
        .then(({data}) => {this.props.getProd(data)})
    }
    render() {
        const {products=[]} = this.props
        return (
            <div>
                <Slider />
                <Feature />
                <div>
                    <h2 className="section-heading">Clothing for Men and Women</h2>
                    <div className="card-container">
                        {products.map((item, index) => (
                            item.isAccessory ? "" : <Card {...item} />
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="section-heading">Accessories for Men and Women</h2>
                    <div className="card-container">
                        {products.map((item, index) => (
                            item.isAccessory ? <Card {...item} /> : ""
                        ))}
                    </div>
                </div> 
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    products : state.products
})

const mapDispatchToProps = (dispatch) => ({
    getProd: (payload) => dispatch(getProducts(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(index)               