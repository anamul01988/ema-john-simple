import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts]= useState([]);
    useEffect(()=>{
       fetch('products.json')
       .then(res =>res.json())
       .then(data =>setProducts(data))
    },[]);
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {/* <h3>this is for products</h3>
                <p>{products.length}</p> */}
                {
                    products.map(product => <Product
                         key={product.id}
                          product = {product}
                          ></Product>)
                }

            </div>
            <div className='cart-container'>
                <h4>Order summery</h4>
            </div>
        </div>
    );
};

export default Shop;