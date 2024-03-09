import {useFormik} from 'formik';
import {string, number, object, mixed} from 'yup';
import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import FieldInput from '../../../components/admin/form/field/FieldInput';
import FieldTextArea from '../../../components/admin/form/field/FieldTextArea';
import FieldSelect from '../../../components/admin/form/field/FieldSelect';
import {Box, Button} from '@mui/material';

const ProductForm = ({
                         editValues,
                         onCreateProduct,
                         onSaveEdit,
                         onReset,
                     }) => {
    const validationSchema = object({
        name: string().required('Product\'s name is required'),
        price: number().required('Product\'s price is required'),
        quantity: number().required('Product\'s quantity is required'),
        description: string().required('Product\'s description is required'),
        status: string().required('Product\'s status is required'),
        image: mixed().required('Product\'s image is required'),
        author: string().required('Product\'s author is required'),
        rating: number().required('Product\'s rating is required'),
    });

    const [imageTmp, setImageTmp] = useState({});

    let initialValues = {
        name: '',
        price: 0,
        quantity: 0,
        description: '',
        status: '1',
        image: '',
        author: '',
        rating: 0,
    };

    const formik = useFormik({
        initialValues,
        enableReinitialize: true,
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            const formData = new FormData();
            /*formData.append(
                "myFile",
                ...values,
                values.image.name
            );*/
            console.log(values);
            if (editValues) {
              onSaveEdit(values, editValues.id);
            } else {
              onCreateProduct(values);
            }
            formik.resetForm();
        },
    });

    const handleReset = () => {
        onReset();
        formik.resetForm();
    };

    /*const handleFileUpload = () => {
        let reader = new FileReader();
        let file = imageTmp;
        reader.onloadend = () => {
            this.setState({
                file: reader.result
            });
        };
        reader.readAsDataURL(file);
    };*/

    useEffect(() => {
        if (editValues) {
            formik.setFieldValue('name', editValues.name);
            formik.setFieldValue('price', editValues.price);
            formik.setFieldValue('quantity', editValues.quantity);
            formik.setFieldValue('description', editValues.description);
            formik.setFieldValue('status', editValues.status);
            formik.setFieldValue('image', editValues.image);
            formik.setFieldValue('author', editValues.author);
            formik.setFieldValue('rating', editValues.rating);
        }
    }, [editValues]);

    return (
        <form onSubmit={formik.handleSubmit}>
            <FieldInput
                label='Name'
                name='name'
                value={formik.values.name}
                onChangeField={formik.handleChange}
                error={
                    formik.touched.name && Boolean(formik.errors.name)
                        ? formik.errors.name
                        : ''
                }
            />
            <FieldInput
                label='Price'
                name='price'
                type='number'
                value={formik.values.price}
                onChangeField={formik.handleChange}
                error={
                    formik.touched.price && Boolean(formik.errors.price)
                        ? formik.errors.price
                        : ''
                }
            />
            <FieldInput
                label='Quantity'
                name='quantity'
                type='number'
                value={formik.values.quantity}
                onChangeField={formik.handleChange}
                error={
                    formik.touched.quantity && Boolean(formik.errors.quantity)
                        ? formik.errors.quantity
                        : ''
                }
            />
            <FieldTextArea
                label='Description'
                name='description'
                value={formik.values.description}
                onChangeField={formik.handleChange}
            />
            <FieldSelect
                label='Status'
                name='status'
                dataSet={[
                    {label: 'Active', value: 1},
                    {label: 'Inactive', value: 0},
                ]}
                value={formik.values.status}
                onChangeField={formik.handleChange}
            />
            <FieldInput
                label='Image'
                name='image'
                type='file'
                accept='image/*'
                onChangeField={(event) => {
                    console.log('event.target.files[0]', event.target.files[0]);
                    formik.setFieldValue('image', event.target.files[0]);
                    setImageTmp(event.target.files[0]);
                }}
                /*value={formik.values.image}
                onChangeField={formik.handleChange}*/
                /*onChangeField={(event) => {
                    formik.setFieldValue('image', event.target.files[0]);
                    setImageTmp(event.target.files[0]);
                }}*/
                error={
                    formik.touched.image && Boolean(formik.errors.image)
                        ? formik.errors.image
                        : ''
                }
            />
            <FieldInput
                label='Author'
                name='author'
                value={formik.values.author}
                onChangeField={formik.handleChange}
                error={
                    formik.touched.author && Boolean(formik.errors.author)
                        ? formik.errors.author
                        : ''
                }
            />
            <FieldInput
                label='Rating'
                name='rating'
                type='number'
                value={formik.values.rating}
                onChangeField={formik.handleChange}
                error={
                    formik.touched.rating && Boolean(formik.errors.rating)
                        ? formik.errors.rating
                        : ''
                }
            />
            <Box display='flex' justifyContent='right' gap='10px'>
                <Button
                    type='submit'
                    size='small'
                    color='primary'
                    variant='contained'
                >
                    Lưu
                </Button>
                <Button
                    onClick={handleReset}
                    size='small'
                    color='secondary'
                    variant='contained'
                >
                    Đóng
                </Button>
            </Box>
        </form>
    );
};

ProductForm.propTypes = {
    editValues: PropTypes.object,
    onCreateProduct: PropTypes.func,
    onSaveEdit: PropTypes.func,
    onReset: PropTypes.func,
};

export default ProductForm;
