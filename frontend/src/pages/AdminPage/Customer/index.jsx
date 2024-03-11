import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import CustomerForm from "./CustomerForm";
import CustomerTable from "./CustomerTable";
import customerApi from "../../../apis/customerApi";
import DialogWrapper from '../../../components/admin/dialogWapper';
const moment = require('moment');

function AdminCategory() {
    const [customers, setCustomers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editValues, setEditValues] = useState(null);

    const fetch = async () => {
        await customerApi.getList().then((response) => {
            const modifiedCustomers = response.map(customer => {
                return {
                    ...customer,
                    birthday: moment(customer.birthday).format('YYYY-MM-DD')
                };
            });
            setCustomers(modifiedCustomers);
            console.log(modifiedCustomers);
        }).catch((error) => {
            setCustomers([]);
        });
    };


    const handleCreate = async (formData) => {
        await customerApi.create(formData).then((response) => {
            /*setCustomers((prev) => [...prev, response]);*/
            fetch();
        }).catch((error) => {
            console.log(error);
        });
        setShowModal(false);
    };

    const handleDelete = async (id) => {
        await customerApi.delete(id).then((response) => {
            if (response) {
                /*setCustomers((prev) => {
                    return prev.filter((prev) => prev.id !== id);
                });*/
                fetch();
            }
        });
    };

    const handleSaveEdit = async (formData, id) => {
        if (formData.password == null || formData.password == "") {
            delete formData.password;
        }

        await customerApi.update(id, formData).then((response) => {
            if (response) {
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
                <span style={{fontSize: 24, color: "black"}}>Quản lý khách hàng</span>

                <div className="add-product-button">
                    <Button
                        onClick={() => setShowModal(true)}
                        endIcon={<Add/>}
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
