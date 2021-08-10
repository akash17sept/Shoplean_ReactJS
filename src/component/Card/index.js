import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const {id,name,brand,preview,price} = props

    return (
            <Link to={{pathname: `/product/${id}`}} className="card">
                <img src={preview} />
                <div className="detail">
                    <h3>{name}</h3>
                    <h4>{brand}</h4>
                    <h5>Rs <span>{price}</span></h5>
                </div>
            </Link>
    );
}
 
export default Card;