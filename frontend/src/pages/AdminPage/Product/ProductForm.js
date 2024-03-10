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
                         categories,
                     }) => {
    const validationSchema = object({
        name: string().required('Tên sản phẩm là bắt buộc'),
        price: number().required('Giá sản phẩm là bắt buộc'),
        quantity: number().required('Số lượng sản phẩm là bắt buộc'),
        status: string().required('Trạng thái sản phẩm là bắt buộc'),
        image: mixed().required('Hình ảnh sản phẩm là bắt buộc'),
        author: string().required('Tác giả sản phẩm là bắt buộc'),
        rating: number().required('Đánh giá sản phẩm là bắt buộc'),
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
        category_id: categories[0]?.id ?? 1,
    };

    const formik = useFormik({
        initialValues,
        enableReinitialize: true,
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('price', values.price);
            formData.append('quantity', values.quantity);
            formData.append('description', values.description);
            formData.append('status', values.status);
            formData.append('image', values.image); // Thêm file hình ảnh
            formData.append('author', values.author);
            formData.append('rating', values.rating);
            formData.append('category_id', values.category_id);
            console.log('values',values)
            /*formData.append(
                "myFile",
                ...values,
                values.image.name
            );*/
            if (editValues) {
              onSaveEdit(formData, editValues.id);
            } else {
              onCreateProduct(formData);
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
            formik.setFieldValue('category_id', editValues.category_id);
        }
    }, [editValues]);

    return (
        <form onSubmit={formik.handleSubmit}>
            <FieldInput
                label='Tên'
                name='name'
                value={formik.values.name}
                onChangeField={formik.handleChange}
                error={
                    formik.touched.name && Boolean(formik.errors.name)
                        ? formik.errors.name
                        : ''
                }
                isRequired={true}
            />
            <FieldInput
                label='Giá'
                name='price'
                type='number'
                value={formik.values.price}
                onChangeField={formik.handleChange}
                error={
                    formik.touched.price && Boolean(formik.errors.price)
                        ? formik.errors.price
                        : ''
                }
                isRequired={true}
            />
            <FieldInput
                label='Số lượng'
                name='quantity'
                type='number'
                value={formik.values.quantity}
                onChangeField={formik.handleChange}
                error={
                    formik.touched.quantity && Boolean(formik.errors.quantity)
                        ? formik.errors.quantity
                        : ''
                }
                isRequired={true}
            />
            <FieldSelect
                label='Loại'
                name='category_id'
                dataSet={categories}
                value={formik.values.category_id}
                onChangeField={formik.handleChange}
                isRequired={true}  
            />
            <FieldSelect
                label='Trạng thái'
                name='status'
                dataSet={[
                    {label: 'Active', value: 1},
                    {label: 'Inactive', value: 0},
                ]}
                value={formik.values.status}
                onChangeField={formik.handleChange}
                isRequired={true}  
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
                isRequired={true}
            />
            <FieldInput
                label='Tác giả'
                name='author'
                value={formik.values.author}
                onChangeField={formik.handleChange}
                error={
                    formik.touched.author && Boolean(formik.errors.author)
                        ? formik.errors.author
                        : ''
                }
                isRequired={true}
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
                isRequired={true}
            />
            <FieldTextArea
                label='Mô tả'
                name='description'
                value={formik.values.description}
                onChangeField={formik.handleChange}
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
