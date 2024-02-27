import React, { useState } from 'react';
import { Table, Button, Modal, Form, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import CategoryTable from "./CategoryTable";

function AdminCategory() {
    const [showModal, setShowModal] = useState(false);

    const [categories, setCategories] = useState([
        { id: 1, name: 'Category 1', description: '', status: 'On'},
        { id: 2, name: 'Category 2', description: '', status: 'Off'},
    ]);

    const [newCategory, setNewCategory] = useState({ id: '', title: '', description: '', status: '' });

    const handleAddCategory = () => {
        setCategories([...categories, { id: categories.length + 1, ...newCategory }]);
        setNewCategory({ id: '', title: '', description: '', status: '' });
        setShowModal(false);
    };

    function createData(
        id: number,
        title: string,
        description: string,
        status: string,
    ) {
        return { id, title, description, status };
    }

    const rows = [
        createData(1, 'Category 01', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incidi...', 'On'),
        createData(2, 'Category 02', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incidi...', 'On'),
        createData(3, 'Category 03', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incidi...', 'Off'),
        createData(4, 'Category 04', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incidi...', 'On'),
        createData(5, 'Category 05', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incidi...', 'Off'),
    ];

    const handleStatusChange = (value) => {
        setNewCategory({ ...newCategory, status: value });
    };

    return (
        <main className="main-container">
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px'}}>
                <span style={{fontSize: 24, color: "black"}}>Manage Category</span>

                <Button variant="primary" onClick={() => setShowModal(true)}>
                    Add Category
                </Button>
            </div>

            <div className="row">
                <CategoryTable rows={rows}/>
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="categoryTitle">
                            <Form.Label style={{fontWeight: 'bold'}}>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter category title"
                                value={newCategory.title}
                                onChange={(e) => setNewCategory({...newCategory, title: e.target.value})}
                                style={{ fontSize: '0.9em', borderBottom: '1px solid #000' }}
                            />
                        </Form.Group>
                        <Form.Group controlId="categoryDescription">
                            <Form.Label style={{fontWeight: 'bold'}}>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter category title"
                                value={newCategory.description}
                                onChange={(e) => setNewCategory({...newCategory, description: e.target.value})}
                                style={{ fontSize: '0.9em', borderBottom: '1px solid #000' }}
                            />
                        </Form.Group>
                        <Form.Group controlId="categoryStatus" style={{ paddingTop: 25 }}>
                            <Form.Label style={{ fontWeight: 'bold' }}>Status</Form.Label>
                            <ToggleButtonGroup
                                type="radio"
                                name="status"
                                value={newCategory.status}
                                onChange={handleStatusChange}
                                style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}
                            >
                                <ToggleButton
                                    value="on"
                                    variant={newCategory.status === 'on' ? 'success' : 'outline-success'}
                                    style={{ flex: 1, textAlign: 'center', fontSize: '14px' }}
                                >
                                    On
                                </ToggleButton>
                                <ToggleButton
                                    value="off"
                                    variant={newCategory.status === 'off' ? 'danger' : 'outline-danger'}
                                    style={{ flex: 1, textAlign: 'center', fontSize: '14px' }}
                                >
                                    Off
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleAddCategory}>
                        Add Category
                    </Button>
                </Modal.Footer>
            </Modal>
        </main>
    );
};

export default AdminCategory;
