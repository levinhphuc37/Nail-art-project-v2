import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './Product.css'

const ProductComponent = ({name, price, imgSrc}) => {
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
            <div>
                <Link to="/appointment" className="product-btn">Book Now</Link>
            </div>
        </div>
    )
}

const AccessoriesComponentTitle = ({typeName}) => {
    return (
        <div className="product-title">
                <h2 style={{ color: '#911429' }}>{typeName}</h2>
        </div>
    )
}

const AccessoriesComponent = ({productName, productBio, productPrice, imgSrc}) => {
    return (
            <div className="row">
                <div className="col-7 d-flex flex-column justify-content-center">
                    <h5>{productName}</h5>
                    <p>{productBio}</p>
                    <p>{productPrice}</p>
                </div>
                <div className="col-5">
                    <img src={imgSrc} alt={productName} />
                </div>
            </div>
    )
}

const Product = () => 
{
    const products = [
        { name: 'Pink Lady', price: '$10.00', imgSrc: 'images/products/pink_lady.png' },
        { name: 'Pink Lady', price: '$10.00', imgSrc: 'images/products/pink_lady.png' },
        { name: 'Pink Lady', price: '$10.00', imgSrc: 'images/products/pink_lady.png' },
        { name: 'Pink Lady', price: '$10.00', imgSrc: 'images/products/pink_lady.png' },
        { name: 'Pink Lady', price: '$10.00', imgSrc: 'images/products/pink_lady.png' },   
    ];

    const accessoriesData = [
        {
          title: 'Title 1',
          accessories: [
            {productName: 'Product 1', price: '$10.00', productBio: 'Bio 1', imgSrc: 'images/products/Gel-cleanser.png'},
            {productName: 'Product 2', price: '$10.00', productBio: 'Bio 2', imgSrc: 'images/products/Gel-cleanser.png'},
          ]
        },
        {
          title: 'Title 2',
          accessories: [
            {productName: 'Product 3', price: '$10.00', productBio: 'Bio 3', imgSrc: 'images/products/Gel-cleanser.png'},
            {productName: 'Product 4', price: '$10.00', productBio: 'Bio 4', imgSrc: 'images/products/Gel-cleanser.png'},
          ]
        },
        // More titles and accessories...
    ];

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
                    {products.map(product => <ProductComponent {...product} /> )}
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
        <Footer/>
        </section>
    )
}

export default Product