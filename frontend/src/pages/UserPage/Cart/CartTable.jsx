import React from "react";
import CartItem from "./CartItem";

function CartTable({ cartItems, handleDelete }) {

    return (
        <div className="table-responsive">
            <table className="table">
                <thead className="text-uppercase">
                <tr>
                    <th scope="col" className="fw-light">Sản phẩm</th>
                    <th scope="col" className="fw-light">Số lượng</th>
                    <th scope="col" className="fw-light">Tổng tiền</th>
                    <th scope="col" className="fw-light"></th>
                </tr>
                </thead>
                <tbody className="border-top border-gray">
                    {cartItems.map((item, index) => (
                        <CartItem product={item} handleDelete={handleDelete}/>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CartTable;
