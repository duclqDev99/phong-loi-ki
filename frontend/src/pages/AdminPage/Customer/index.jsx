import React, { useState } from 'react';
import { Table, Button, Modal, Form, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import CustomerTable from "./CustomerTable";

function AdminCategory() {
    const [showModal, setShowModal] = useState(false);

    const [customers, setCustomers] = useState([
        { username: 'User01', name: 'Category 1', description: '', status: 'On'},
        { username: 'User02', name: 'Category 2', description: '', status: 'Off'},
    ]);

    const [newCustomer, setNewCustomer] = useState({ id: '', title: '', description: '', status: '' });

    const handleAddCategory = () => {
        setCustomers([...customers, { id: customers.length + 1, ...newCustomer }]);
        setNewCustomer({ username: '', email: '', phoneNumber: '', status: '', createdAt: '' });
        setShowModal(false);
    };

    function createData(
        username: string,
        email: string,
        phoneNumber: string,
        status: string,
        createdAt: string,
    ) {
        return { username, email, phoneNumber, status, createdAt };
    }

    const rows = [
        createData('User01', 'Email 01', '0987654321', 'On', '18:00:00 20-02-2024'),
        createData('User02', 'Email 02', '0987654321', 'On', '18:00:00 20-02-2024'),
        createData('User03', 'Email 03', '0987654321', 'Off', '18:00:00 20-02-2024'),
        createData('User04', 'Email 04', '0987654321', 'On', '18:00:00 20-02-2024'),
        createData('User05', 'Email 05', '0987654321', 'Off', '18:00:00 20-02-2024'),
    ];

    const handleStatusChange = (value) => {
        setNewCustomer({ ...newCustomer, status: value });
    };

    return (
        <main className="main-container">
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px'}}>
                <span style={{fontSize: 24, color: "black"}}>Manage Customer</span>

                <Button variant="primary" onClick={() => setShowModal(true)}>
                    Add Customer
                </Button>
            </div>

            <div className="row">
                <CustomerTable rows={rows}/>
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="customerUsername">
                            <Form.Label style={{fontWeight: 'bold'}}>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter customer username"
                                value={newCustomer.username}
                                onChange={(e) => setNewCustomer({...newCustomer, username: e.target.value})}
                                style={{ fontSize: '0.9em', borderBottom: '1px solid #000' }}
                            />
                        </Form.Group>
                        <Form.Group controlId="customerEmail">
                            <Form.Label style={{fontWeight: 'bold'}}>Email</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter customer email"
                                value={newCustomer.email}
                                onChange={(e) => setNewCustomer({...newCustomer, email: e.target.value})}
                                style={{ fontSize: '0.9em', borderBottom: '1px solid #000' }}
                            />
                        </Form.Group>
                        <Form.Group controlId="customerPhoneNumber">
                            <Form.Label style={{fontWeight: 'bold'}}>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter customer phone number"
                                value={newCustomer.phoneNumber}
                                onChange={(e) => setNewCustomer({...newCustomer, phoneNumber: e.target.value})}
                                style={{ fontSize: '0.9em', borderBottom: '1px solid #000' }}
                            />
                        </Form.Group>
                        <Form.Group controlId="customerStatus" style={{ paddingTop: 25 }}>
                            <Form.Label style={{ fontWeight: 'bold' }}>Status</Form.Label>
                            <ToggleButtonGroup
                                type="radio"
                                name="status"
                                value={newCustomer.status}
                                onChange={handleStatusChange}
                                style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}
                            >
                                <ToggleButton
                                    value="on"
                                    variant={newCustomer.status === 'on' ? 'success' : 'outline-success'}
                                    style={{ flex: 1, textAlign: 'center', fontSize: '14px' }}
                                >
                                    On
                                </ToggleButton>
                                <ToggleButton
                                    value="off"
                                    variant={newCustomer.status === 'off' ? 'danger' : 'outline-danger'}
                                    style={{ flex: 1, textAlign: 'center', fontSize: '14px' }}
                                >
                                    Off
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Form.Group>
                        <Form.Group controlId="customerCreatedAt">
                            <Form.Label style={{fontWeight: 'bold'}}>Created At</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter customer created at"
                                value={newCustomer.createdAt}
                                onChange={(e) => setNewCustomer({...newCustomer, createdAt: e.target.value})}
                                style={{ fontSize: '0.9em', borderBottom: '1px solid #000' }}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleAddCategory}>
                        Add Customer
                    </Button>
                </Modal.Footer>
            </Modal>
        </main>
    );
};

export default AdminCategory;
