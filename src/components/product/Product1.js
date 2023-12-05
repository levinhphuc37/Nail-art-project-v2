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
        { name: 'Real Desire', price: '$10.00', imgSrc: 'images/products/Real Desire.png' },
        { name: 'Secret Dreams', price: '$10.00', imgSrc: 'images/products/Secret Dreams.png' },
        { name: 'Red Ruby', price: '$10.00', imgSrc: 'images/products/Red Ruby.png' },
        { name: 'Pour Vous', price: '$10.00', imgSrc: 'images/products/Pour Vous.png' }, 
        { name: 'Real Baroc', price: '$10.00', imgSrc: 'images/products/Real Baroc.png' },
        { name: 'Fashionista', price: '$10.00', imgSrc: 'images/products/Fashionista.png' },
        { name: 'Valentine', price: '$10.00', imgSrc: 'images/products/Valentine.png' },
        { name: 'Inferno', price: '$10.00', imgSrc: 'images/products/Inferno.png' },
        { name: 'Blue Marlin', price: '$10.00', imgSrc: 'images/products/Blue Marlin.png' },  
        { name: 'Royal Novelty', price: '$10.00', imgSrc: 'images/products/Royal Novelty.png' },
        { name: 'Roses Red', price: '$10.00', imgSrc: 'images/products/Roses Red.png' },   
          
         
    ];

    const accessoriesData = [
        {
          title: 'FLUIDS & REMOVERS',
          accessories: [
            {productName: 'Gel Cleanser', price: '$10.00', productBio: 'Cleanser perfect for finishing gel nails and removing the inhibition layer, can be used with all Nail Creation gels.', imgSrc: 'images/products/Gel-cleanser.png'},
            {productName: 'Nail Polish Remover', price: '$10.00', productBio: 'Remover without acetone designed to remove nail polish from natural-, gel- and acrylic nails', imgSrc: 'images/products/Nail Polish Remover.png'},
            {productName: 'Brush cleaner', price: '$10.00',productBio: 'Designed to remove acrylic and gel product residue and prevent brush hairs from damaging.' , imgSrc: 'images/products/Brush cleaner.png'},
          ]
        },
        {
          title: 'FILES',
          accessories: [
            {productName: 'King File', price: '$10.00', productBio: 'Sanitizable File. Thanks to its unique shape, it can be held comfortably in the hand, making filing easier. This file is used to reduce the scratch marks left after contour filing. It is also suitable for filing natural nails.', imgSrc: 'images/products/King File.png'},
            {productName: 'Lord File', price: '$10.00', productBio: 'Sanitizable File. Thanks to its unique shape, it can be held comfortably in the hand, making filing easier. This file has two different grit sides.', imgSrc: 'images/products/Lord File.png'},
            {productName: 'Empress File', price: '$10.00', productBio: 'Empress File Sanitizable File. The Empress is a special buffer made of padded foam that is specially designed for removing any remaining scratches in artificial nails before finishing them with the Shine Buffer. This file has two different grit sides', imgSrc: 'images/products/Empress File.png'},
          ]
        },
        {
            title: 'ACCESSORIES',
            accessories: [
              {productName: 'Nail Wipesroduct', price: '$10.00', productBio: 'Highly absorbent lint-free cotton wipes.', imgSrc: 'images/products/Nail Wipes.png'},
              {productName: 'Table towels', price: '$10.00', productBio: 'Strong table protector. Available in boxes of 25.', imgSrc: 'images/products/Table towels.png'},
              {productName: 'Blank Color Ring', price: '$10.00', productBio: 'Color ring that can be colored in with your favourite colors or Nail Art. 30 tips on the ring', imgSrc: 'images/products/Blank Color Ring.png'},
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