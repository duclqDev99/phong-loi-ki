import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";
import productApi from "../../../apis/productApi";
import DialogWrapper from '../../../components/admin/dialogWapper';

function AdminProduct() {
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editValues, setEditValues] = useState(null);

    const fetch = async () => {
        await productApi.getList().then((response) => {
            setProducts(response);
        }).catch((error) => {
            console.log(error);
            setProducts([]);
        });
    };

    const handleCreate = async (formData) => {
        await productApi.create(formData).then((response) => {
            setProducts((prev) => [...prev, response]);
        }).catch((error) => {
            console.log(error);
        });
        setShowModal(false);
    };

    const handleDelete = async (id) => {
        await productApi.delete(id).then((response) => {
            if (response) {
                setProducts((prev) => {
                    return prev.filter((prev) => prev.id !== id);
                });
            }
        });
    };

    const handleSaveEdit = async (formData, id) => {
        await productApi.update(formData, id).then((response) => {
            if (response) {
                setProducts((prev) => {
                    return prev.map((item) => {
                        if (item.id === id) {
                            return response;
                        }
                        return item;
                    });
                });
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
        <main className="main-container" >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
                <span style={{ fontSize: 24, color: "black" }}>Manage Product</span>
                <div className="add-product-button">
                    <Button
                        onClick={() => setShowModal(true)}
                        endIcon={<Add />}
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
                <ProductForm
                    editValues={editValues}
                    onCreateProduct={handleCreate}
                    onSaveEdit={handleSaveEdit}
                    onReset={handleReset}
                />
            </DialogWrapper>

            <ProductTable
                rows={products}
                onDeleteProduct={handleDelete}
                onEdit={handleEdit}
            />
        </main>
    );
};

export default AdminProduct;
