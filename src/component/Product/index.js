import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBorderImg, addPreviewImg,getProduct,addProductToCart } from '../../redux/action'
import './product.css'

export class index extends Component {

    componentDidMount() {
        const $id = this.props.match.params.id
        const api = "https://5d76bf96515d1a0014085cf9.mockapi.io/product/"+$id
        axios.get(api)
        .then(({data}) => {
            this.props.getProduct(data)
            // console.log(this.props.getProduct(data))
        })
        
    }

    addProduct() {
        const item = this.props.product;
        this.props.addProductToCart(item)
    }

    addBorder(item,index) {
        this.props.addBorderImg(item)
        console.log(this.props.addBorderImg(item))
        this.props.addPreviewImg(item)
        // console.log(this.props.addPreviewImg(item))
    }

    render() {
        const {name,brand,id,price,preview,description,photos=[]} = this.props.product
        // console.log({name})
        const borderImg = this.props.borderImg
        const $previewImg = this.props.previewImg
        // console.log($previewImg)
        return (
            <div className="product">
                <div className="left-column">
                    <img src={!$previewImg ? preview: $previewImg} alt={id} />
                </div>
                <div className="right-column">
                    <div className="product-description">
                        <h1>{name}</h1>
                        <h4>{brand}</h4>
                        <h3>Price: Rs <span>{price}</span></h3>
                        <div className="description">
                            <h3>Description</h3>
                            <p>{description}</p>
                        </div>
                        <div className="product-preview">
                            <h3>Product Preview</h3>
                            <div className="preview-img">
                                {photos.length && photos.map((item,index) => (
                                    <img  src={item} alt={index} key={"img"+index} onClick=
                                    {() => {this.addBorder(item,index)}} style={{border: borderImg === item ? "2px solid #009688": ""}} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="btn">
                        <button className="add-to-cart" onClick={() => this.addProduct()}>Add to Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.product,
    borderImg: state.borderImg,
    previewImg: state.previewImg
})

const mapDispatchToProps = (dispatch) => ({
    getProduct: (payload) => dispatch(getProduct(payload)),
    addProductToCart: (payload) => dispatch(addProductToCart(payload)),
    addBorderImg: (payload) => dispatch(addBorderImg(payload)),
    addPreviewImg: (payload) => dispatch(addPreviewImg(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
