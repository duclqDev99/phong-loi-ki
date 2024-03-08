import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const OrderSuccessPopup = ({ open, onClose }) => {
    const navigate = useNavigate();

    const handleContinueShopping = () => {
        onClose();
        navigate('/');
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Đặt hàng thành công!</DialogTitle>
            <DialogContent>
                <p>Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ xử lý đơn đặt hàng của bạn sớm nhất có thể.</p>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleContinueShopping} color="primary">
                    Tiếp tục mua sắm
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default OrderSuccessPopup;
