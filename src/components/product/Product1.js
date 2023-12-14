import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './Product.css'
import dataProduct from './dataProduct'
import dataAccessories from './dataAccessories'


const ProductComponent = ({ name, price, imgSrc }) => {
    return (
        <div className="col-3">
            <div className="product-img">
                <img src={imgSrc} alt={name} />
            </div>
            <div className="product-name">
                <h3>{name}</h3>
            </div>
            <div className="product-price">
                <p>{price}</p>
            </div>
            <button className='product-button'>
                <Link to="/appointment">Book Now</Link>
            </button>
        </div>
    )
}

const AccessoriesComponentTitle = ({ typeName }) => {
    return (
        <div className="product-title">
            <h2 style={{ color: '#911429' }}>{typeName}</h2>
        </div>
    )
}

const AccessoriesComponent = ({ productName, productBio, productPrice, imgSrc }) => {
    return (
        <div className="row">
            <div className="col-7 d-flex flex-column justify-content-center">
                <h5>{productName}</h5>
                <p>{productBio}</p>
                <p>{productPrice}</p>
                <button className='access-button'>
                    <Link to="/appointment">Book Now</Link>
                </button>
            </div>
            <div className="col-5">
                <img src={imgSrc} alt={productName} />
            </div>
        </div>
    )
}

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(dataProduct);
    }, []);

    const [accessoriesData, setAccessoriesData] = useState([]);

    useEffect(() => {
        setAccessoriesData(dataAccessories);
    }, []);

    return (
        <section>
            <Header />
            {/* product and accessories banner */}
            <section>
                <div className="wrapper">
                    <h1 style={{ color: '#911429' }}>Products and Accessories Services</h1>
                </div>
            </section>
            {/* product content */}
            <div className="blog-wrapper-one">
                <div className="container">
                    <div className="product-title">
                        <h2 style={{ color: '#911429' }}>Acrylic, Gel System and Glamazone</h2>
                    </div>

                    <div>
                        <p>Welcome to CherryBlossomNail, where elegance meets innovation in the world of nail care! Our store is your one-stop destination for premium nail products and salon equipment, designed to elevate your nail care experience to new heights. Whether you're a seasoned nail professional or an at-home enthusiast, we take pride in offering a curated selection of high-quality, on-trend products that cater to all your nail needs.</p>
                    </div>

                    <div className="row">
                        {products.map(product => <ProductComponent {...product} />)}
                    </div>
                </div>
            </div>
            {/* salon equipment */}
            <div className="container">
                {accessoriesData.map(({ title, accessories }) => (
                    <div>
                        <AccessoriesComponentTitle typeName={title} />
                        {accessories.map(accessory => <AccessoriesComponent {...accessory} />)}
                    </div>
                ))}
            </div>
            <Footer />
        </section>
    )
}

export default Product