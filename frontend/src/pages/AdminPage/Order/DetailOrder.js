import React, {useEffect, useState} from 'react';
import orderApi from "../../../apis/orderApi";
import { List, ListItem, ListItemText, Typography } from '@mui/material';

function DetailOrder({orderId}) {
    const [products, setProducts] = useState([]);

    const fetch = async () => {
        await orderApi.getProductsByOrderId(orderId).then((response) => {
            setProducts(response);
        }).catch((error) => {
            setProducts([]);
        });
    };

    useEffect(() => {
        fetch();
    }, [orderId]);

    return (
        <List>
            {products.map((product) => (
                <ListItem key={product.id}>
                    <ListItemText
                        primary={product.name}
                        secondary={
                            <>
                                <Typography variant="body2" color="text.secondary">
                                    Sản phẩm: {product.product_name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Số lượng: {product.quantity}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Tổng cộng: {product.sub_total}
                                </Typography>
                            </>
                        }
                    />
                </ListItem>
            ))}
        </List>
    );
};

export default DetailOrder;
