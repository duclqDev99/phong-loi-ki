import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import SliderTable from "./SliderTable";
import SliderForm from "./SliderForm";
import sliderApi from "../../../apis/sliderApi";
import DialogWrapper from '../../../components/admin/dialogWapper';

function AdminCategory() {
    const [sliders, setSliders] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const fetch = async () => {
        await sliderApi.getList().then((response) => {
            setSliders(response);
        }).catch((error) => {
            setSliders([]);
        });
    };

    const handleCreate = async (formData) => {
        await sliderApi.create(formData).then((response) => {
            fetch();
        }).catch((error) => {
            console.log(error);
        });
        setShowModal(false);
    };

    const handleDelete = async (id) => {
        await sliderApi.delete(id).then((response) => {
            if (response) {
                fetch();
            }
        });
    };

    const handleReset = () => {
        setShowModal(false);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    useEffect(() => {
        fetch();
    }, []);

    return (
        <main className="main-container">
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px'}}>
                <span style={{fontSize: 24, color: "black"}}>Quản lý danh mục</span>
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
                title={'Create'}
                open={showModal}
                onClose={handleClose}
            >
                <SliderForm
                    onCreate={handleCreate}
                    onReset={handleReset}
                />
            </DialogWrapper>

            <SliderTable
                rows={sliders}
                onDelete={handleDelete}
                onEdit={null}
            />
        </main>
    );
};

export default AdminCategory;
