import React, { Component } from 'react'
import Modal from '../HOC/Modal/Modal'
export default class Product extends Component {
    render() {
        const { item } = this.props;
        // console.log(this.state.productDetail)
        return (
            
            <div className='card mt-2' >
                 
                <img src={item.image} alt="..." />
                <div className='card-body'>
                    <h3>{item.name}</h3>
                    <p>{item.price} $</p>
                    <button className='btn btn-dark' data-bs-toggle="modal" data-bs-target={`#modelId${item.id}`}>
                        Add To Cart
                        <i className='mx-2 fa fa-cart-plus'>

                        </i>
                    </button>
                </div>
                
            </div>

        )
    }
}


