import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "./ProductItem";
import ModalCart from "./ModalCart";
import { addToCart } from "../../features/cartSlice";

const BaiTapShoeShop = () => {
    const shoes = useSelector((state) => state.shoe.shoes);
    const dispatch = useDispatch();

    const handleCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className="container">
            <ModalCart />
            <ProductItem shoes={shoes} handleCart={handleCart} />
        </div>
    );
};

export default BaiTapShoeShop;
