import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const OrderFailPopup = ({ open, onClose }) => {
    const navigate = useNavigate();

    const handleContinueShopping = () => {
        onClose();
        navigate('/cart');
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Đặt hàng thất bại!</DialogTitle>
            <DialogContent>
                <p>Đặt hàng thất bại, số lượng vượt quá giới hạn cho phép.</p>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleContinueShopping} color="primary">
                    Đổi sản phẩm
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default OrderFailPopup;
