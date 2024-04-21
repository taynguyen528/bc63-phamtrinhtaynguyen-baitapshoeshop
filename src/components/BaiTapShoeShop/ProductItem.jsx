
import React from "react";
import "./BaiTapShoeShop.css";
const ProductItem = ({ shoes, handleCart }) => {
    return (
        <div className="row gap-4 product-list">
            {shoes.map((product) => (
                <div className="col-4 product-item" key={product.id}>
                    <img
                        src={product.image}
                        alt="..."
                        width={250}
                        height={250}
                    />
                    <h2>Name: {product.name}</h2>
                    <p className="price">Price: {product.price}</p>
                    <p className="desc">
                        Description: {product.shortDescription}
                    </p>
                    <button
                        className="btn btn-success"
                        onClick={() => handleCart(product)}
                    >
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductItem;
