import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import OrderTable from "./OrderTable";
import OrderForm from "./OrderForm";
import orderApi from "../../../apis/orderApi";
import DialogWrapper from '../../../components/admin/dialogWapper';

function AdminOrder() {
    const [categories, setCategories] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editValues, setEditValues] = useState(null);

    const fetch = async () => {
        await orderApi.getList().then((response) => {
            setCategories(response);
        }).catch((error) => {
            setCategories([]);
        });
    };

    const handleCreate = async (formData) => {
        await orderApi.create(formData).then((response) => {
            // setCategories((prev) => [...prev, response]);
            fetch();
        }).catch((error) => {
            console.log(error);
        });
        setShowModal(false);
    };

    const handleDelete = async (id) => {
        await orderApi.delete(id).then((response) => {
            if (response) {
                /*setCategories((prev) => {
                    return prev.filter((prev) => prev.id !== id);
                });*/
                fetch();
            }
        });
    };

    const handleSaveEdit = async (id, formData) => {
        await orderApi.update(id, formData).then((response) => {
            if (response) {
                /*setCategories((prev) => {
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
                <span style={{fontSize: 24, color: "black"}}>Quản lý đơn hàng</span>
                <div className="add-product-button">
                    {/*<Button
                        onClick={() => setShowModal(true)}
                        endIcon={<Add/>}
                    >
                        Tạo mới
                    </Button>*/}
                </div>
            </div>

            <DialogWrapper
                title={editValues ? 'Edit' : 'Create'}
                open={showModal}
                onClose={handleClose}
            >
                <OrderForm
                    editValues={editValues}
                    onCreate={handleCreate}
                    onSaveEdit={handleSaveEdit}
                    onReset={handleReset}
                />
            </DialogWrapper>

            <OrderTable
                rows={categories}
                onDelete={handleDelete}
                onEdit={handleEdit}
            />
        </main>
    );
};

export default AdminOrder;
