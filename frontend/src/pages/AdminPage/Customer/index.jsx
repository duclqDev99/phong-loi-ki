import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import CustomerForm from "./CustomerForm";
import CustomerTable from "./CustomerTable";
import customerApi from "../../../apis/customerApi";
import DialogWrapper from '../../../components/admin/dialogWapper';

function AdminCategory() {
    const [customers, setCustomers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editValues, setEditValues] = useState(null);

    const fetch = async () => {
        await customerApi.getList().then((response) => {
            setCustomers(response);
        }).catch((error) => {
            console.log(error);
            setCustomers([]);
        });
    };


    const handleCreate = async (formData) => {
        await customerApi.create(formData).then((response) => {
            setCustomers((prev) => [...prev, response]);
        }).catch((error) => {
            console.log(error);
        });
        setShowModal(false);
    };

    const handleDelete = async (id) => {
        await customerApi.delete(id).then((response) => {
            if (response) {
                setCustomers((prev) => {
                    return prev.filter((prev) => prev.id !== id);
                });
            }
        });
    };

    const handleSaveEdit = async (formData, id) => {
        await customerApi.update(formData, id).then((response) => {
            if (response) {
                /*setCustomers((prev) => {
                    return prev.map((item) => {
                        if (item.id === id) {
                            return response;
                        }
                        return item;
                    });
                });*/
                fetch();
                setEditValues(null);
            }
        });
        setShowModal(false);
    };

    const handleReset = () => {
        setEditValues(null);
        setShowModal(false);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const handleEdit = (values) => {
        setEditValues(values);
        setShowModal(true);
    };

    useEffect(() => {
        fetch();
    }, []);

    return (
        <main className="main-container">
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px'}}>
                <span style={{fontSize: 24, color: "black"}}>Manage Customer</span>

                <div className="add-product-button">
                    <Button
                        onClick={() => setShowModal(true)}
                        endIcon={<Add/>}
                    >
                        Create
                    </Button>
                </div>
            </div>

            <DialogWrapper
                title={editValues ? 'Edit' : 'Create'}
                open={showModal}
                onClose={handleClose}
            >
                <CustomerForm
                    editValues={editValues}
                    onCreate={handleCreate}
                    onSaveEdit={handleSaveEdit}
                    onReset={handleReset}
                />
            </DialogWrapper>

            <CustomerTable
                rows={customers}
                onDelete={handleDelete}
                onEdit={handleEdit}
            />
        </main>
    );
};

export default AdminCategory;
