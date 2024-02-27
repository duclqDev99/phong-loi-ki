import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import ProductTable from "./ProductTable";

function AdminProduct() {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', price: 20 },
        { id: 2, name: 'Product 2', price: 30 },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', quantity: '', author: '', rating: '' });

    const handleAddProduct = () => {
        setProducts([...products, { id: products.length + 1, ...newProduct }]);
        setNewProduct({ name: '', price: '', quantity: '', author: '', rating: '' });
        setShowModal(false);
    };

    function createData(
        name: string,
        price: number,
        quantity: number,
        author: string,
        rating: number,
    ) {
        return { name, price, quantity, author, rating };
    }

    const rows = [
        createData('Book 1', 159, 6.0, "Author 01", 4.0),
        createData('Book 2', 237, 9.0, "Author 02", 4.3),
        createData('Book 3', 262, 16.0, "Author 03", 6.0),
        createData('Book 4', 305, 3.0, "Author 04", 4.3),
        createData('Book 5', 356, 16.0, "Author 05", 3.9),
    ];

    return (
        <main className="main-container" >

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
                <span style={{ fontSize: 24, color: "black" }}>Manage Product</span>
                <div className="add-product-button">
                    <Button variant="primary" onClick={() => setShowModal(true)}>
                        Add Product
                    </Button>
                </div>
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="productName">
                            <Form.Label style={{ fontWeight: 'bold' }}>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter product name"
                                value={newProduct.name}
                                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                                style={{ fontSize: '0.9em', borderBottom: '1px solid #000' }}
                            />
                        </Form.Group>
                        <Form.Group controlId="productPrice">
                            <Form.Label style={{ fontWeight: 'bold' }}>Price</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter product price"
                                value={newProduct.price}
                                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                                style={{ fontSize: '0.9em', borderBottom: '1px solid #000' }}
                            />
                        </Form.Group>
                        <Form.Group controlId="productQuantity">
                            <Form.Label style={{ fontWeight: 'bold' }}>Quantity</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter product quantity"
                                value={newProduct.quantity}
                                onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })}
                                style={{ fontSize: '0.9em', borderBottom: '1px solid #000' }}
                            />
                        </Form.Group>
                        <Form.Group controlId="productAuthor">
                            <Form.Label style={{ fontWeight: 'bold' }}>Author</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter product author"
                                value={newProduct.author}
                                onChange={(e) => setNewProduct({ ...newProduct, author: e.target.value })}
                                style={{ fontSize: '0.9em', borderBottom: '1px solid #000' }}
                            />
                        </Form.Group>
                        <Form.Group controlId="productRating">
                            <Form.Label style={{ fontWeight: 'bold' }}>Rating</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter product rating"
                                value={newProduct.rating}
                                onChange={(e) => setNewProduct({ ...newProduct, rating: e.target.value })}
                                style={{ fontSize: '0.9em', borderBottom: '1px solid #000' }}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleAddProduct}>
                        Add Product
                    </Button>
                </Modal.Footer>
            </Modal>

            <ProductTable rows={rows}/>
        </main>
    );
};

export default AdminProduct;
