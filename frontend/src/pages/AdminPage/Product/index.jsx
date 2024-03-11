import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Add, CleaningServices } from '@mui/icons-material';
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";
import productApi from "../../../apis/productApi";
import categoryApi from "../../../apis/categoryApi";
import DialogWrapper from '../../../components/admin/dialogWapper';
import axios from 'axios';

function AdminProduct() {
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editValues, setEditValues] = useState(null);
    const [categories, setCategories] = useState([]);

    const fetch = async () => {
        await productApi.getList().then((response) => {
            setProducts(response);
        }).catch((error) => {
            setProducts([]);
        });
    };

    const getData = async () => {
        let categories = await categoryApi.getList()
        const transformedData = categories.map(item => ({
            value: item.id,
            label: item.title,
        }));
        setCategories(transformedData)
    }

    const handleCreate = async (formData) => {
        // await axios.post('products/create', formData, {
        //     headers: {
        //       'Content-Type': 'multipart/form-data'
        //     },
        //     baseURL: `http://localhost:3001/api/`,
        //   })
        //   .then(response => fetch())
        //   .catch(error => console.error(error));
        await productApi.create(formData).then((response) => {
            fetch();
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
        await productApi.update(id, formData).then((response) => {
            if (response) {
                /*setProducts((prev) => {
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
        }).catch((error) => {
            console.log(error);
        });
        setShowModal(false);
    };

    const handleReset = () => {
        setEditValues(null);
        setShowModal(false);
    };

    const handleClose = () => {
        setEditValues(null);
        setShowModal(false);
    };

    const handleEdit = (values) => {
        setEditValues(values);
        setShowModal(true);
    };

    useEffect(() => {
        fetch();
        getData();
    }, []);

    return (
        <main className="main-container" >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
                <span style={{ fontSize: 24, color: "black" }}>Quản lý sản phẩm</span>
                <div className="add-product-button">
                    <Button
                        onClick={() => setShowModal(true)}
                        endIcon={<Add />}
                    >
                        Tạo mới
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
                    categories={categories}
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
