import {useFormik} from 'formik';
import {string, number, object, mixed, date} from 'yup';
import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import FieldInput from '../../../components/admin/form/field/FieldInput';
import FieldTextArea from '../../../components/admin/form/field/FieldTextArea';
import FieldSelect from '../../../components/admin/form/field/FieldSelect';
import {Box, Button} from '@mui/material';
import FieldInputFile from "../../../components/admin/form/field/FieldInputFile";

const ProductForm = ({
                         editValues,
                         onCreateProduct,
                         onSaveEdit,
                         onReset,
                         categories,
                     }) => {

    const [validationSchema, setValidationSchema] = useState(null);

    useEffect((() => {
        const temp_schema = {
            name: string().required('Tên sản phẩm là bắt buộc'),
            price: number().required('Giá sản phẩm là bắt buộc'),
            quantity: number().required('Số lượng sản phẩm là bắt buộc'),
            status: string().required('Trạng thái sản phẩm là bắt buộc'),
            author: string().required('Tác giả sản phẩm là bắt buộc'),
            rating: number().required('Đánh giá sản phẩm là bắt buộc'),
        };

        if (!editValues) {
            temp_schema.image = mixed().required('Hình ảnh sản phẩm là bắt buộc');
        }

        setValidationSchema(object(temp_schema));
    }), [editValues])
    /*const validationSchema = {
        name: string().required('Tên sản phẩm là bắt buộc'),
        price: number().required('Giá sản phẩm là bắt buộc'),
        quantity: number().required('Số lượng sản phẩm là bắt buộc'),
        status: string().required('Trạng thái sản phẩm là bắt buộc'),
        author: string().required('Tác giả sản phẩm là bắt buộc'),
        rating: number().required('Đánh giá sản phẩm là bắt buộc'),
    };*/

    const [imageTmp, setImageTmp] = useState("");

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
        show_on_homepage: 0,
    };

    const formik = useFormik({
        initialValues,
        enableReinitialize: true,
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            if (editValues) {
                if (!values.image || values.image === "") {
                    delete values.image;
                }
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

    useEffect(() => {
        if (editValues) {
            setImageTmp(editValues.image);
            formik.setFieldValue('name', editValues.name);
            formik.setFieldValue('price', editValues.price);
            formik.setFieldValue('quantity', editValues.quantity);
            formik.setFieldValue('description', editValues.description);
            formik.setFieldValue('status', editValues.status);
            formik.setFieldValue('author', editValues.author);
            formik.setFieldValue('rating', editValues.rating);
            formik.setFieldValue('category_id', editValues.category_id);
            formik.setFieldValue('show_on_homepage', editValues.show_on_homepage);
            console.log(editValues);
        } else {
            setImageTmp("");
        }
    }, [editValues]);

    return (
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
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
            <FieldSelect
                label='Hiển thị ở Slider'
                name='show_on_homepage'
                dataSet={[
                    {label: 'Enabled', value: 1},
                    {label: 'Disabled', value: 0},
                ]}
                value={formik.values.show_on_homepage}
                onChangeField={formik.handleChange}
                isRequired={true}
            />
                <FieldInputFile
                    label='Image'
                    name='image'
                    type='file'
                    accept='image/*'
                    span={imageTmp ? imageTmp : ""}
                    onChangeField={(event) => {
                        console.log('event.target.files[0]', event.target.files[0]);
                        formik.setFieldValue('image', event.target.files[0]);
                        setImageTmp(event.target.files[0]?.name || ''); // Lấy tên file
                    }}
                    error={
                        formik.touched.image && Boolean(formik.errors.image)
                            ? formik.errors.image
                            : ''
                    }
                    isRequired={true}
                />

            {/*<FieldInput
                label='Old image'
                name='image_old'
                type='text'
                value={formik.values.image}
                onChangeField={formik.handleChange}
                error={
                    formik.touched.image && Boolean(formik.errors.image)
                        ? formik.errors.image
                        : ''
                }
                isRequired={true}
            />*/}

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
