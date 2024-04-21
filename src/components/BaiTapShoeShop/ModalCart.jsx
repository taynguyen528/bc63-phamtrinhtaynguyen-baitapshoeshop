import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { PiShoppingCartFill } from "react-icons/pi";
import { useSelector, useDispatch } from "react-redux";
import {
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
} from "../../features/cartSlice";

function ModalCart() {
    const [show, setShow] = useState(false);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button
                variant="primary"
                onClick={handleShow}
                style={{ fontSize: "20px" }}
            >
                Giỏ hàng: <PiShoppingCartFill />
            </Button>

            <Modal show={show} onHide={handleClose} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table className="table">
                        <thead className="text-center">
                            <tr>
                                <th>STT</th>
                                <th>Mã Sản phẩm</th>
                                <th>Tên sản phẩm</th>
                                <th>Hình ảnh</th>
                                <th>Giá</th>
                                <th>Số lượng</th>
                                <th>Xóa sản phẩm</th>
                                <th>Tổng</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {cartItems &&
                                cartItems.length > 0 &&
                                cartItems.map((product, index) => {
                                    return (
                                        <tr key={product.id}>
                                            <td>{index + 1}</td>
                                            <td>Sản phẩm: {product.id}</td>
                                            <td>{product.name}</td>
                                            <td>
                                                <img
                                                    width={100}
                                                    height={100}
                                                    src={product.image}
                                                    alt="..."
                                                />
                                            </td>

                                            <td>{product.price}</td>
                                            <td>
                                                <button
                                                    className="btn btn-info me-2"
                                                    onClick={() =>
                                                        dispatch(
                                                            incrementQuantity(
                                                                product
                                                            )
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>
                                                {product.cartQuantity}
                                                <button
                                                    className="btn btn-info ms-2"
                                                    onClick={() =>
                                                        dispatch(
                                                            decrementQuantity(
                                                                product
                                                            )
                                                        )
                                                    }
                                                >
                                                    -
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() =>
                                                        dispatch(
                                                            removeFromCart(
                                                                product
                                                            )
                                                        )
                                                    }
                                                >
                                                    X
                                                </button>
                                            </td>
                                            <td>
                                                {product.price *
                                                    product.cartQuantity}
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCart;
