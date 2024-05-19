import {useFormik} from 'formik';
import {string, number, object, date} from 'yup';
import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import FieldInput from '../../../components/admin/form/field/FieldInput';
import FieldTextArea from '../../../components/admin/form/field/FieldTextArea';
import FieldSelect from '../../../components/admin/form/field/FieldSelect';
import {Box, Button} from '@mui/material';

const CustomerForm = ({
                         editValues,
                         onCreate,
                         onSaveEdit,
                         onReset,
                     }) => {
    /*const validationSchema = object({
        username: string().required('Customer\'s username is required'),
        fullname: string().required('Customer\'s fullname is required'),
        password: string().required('Customer\'s password is required'),
        email: string().required('Customer\'s email is required'),
        phone: string().required('Customer\'s phone is required'),
    });*/
    const [validationSchema, setValidationSchema] = useState(null);

    /*if (!editValues) {

    }*/

    let initialValues = {
        username: '',
        fullname: '',
        password: '',
        email: '',
        phone: '',
    };

    useEffect((() => {
        const temp_schema = {
            username: string().required('Tên đăng nhập của khách hàng là bắt buộc'),
            fullname: string().required('Họ tên của khách hàng là bắt buộc'),
            email: string().required('Email của khách hàng là bắt buộc'),
            phone: string().required('Số điện thoại của khách hàng là bắt buộc'),
        };

        if (!editValues) {
            temp_schema.password = string().required('Mật khẩu của khách hàng là bắt buộc');
        }

        setValidationSchema(object(temp_schema));
    }), [])

    const formik = useFormik({
        initialValues,
        enableReinitialize: true,
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            if (editValues) {
              onSaveEdit(values, editValues.id);
            } else {
              onCreate(values);
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
            formik.setFieldValue('username', editValues.username);
            formik.setFieldValue('fullname', editValues.fullname);
            formik.setFieldValue('email', editValues.email);
            formik.setFieldValue('phone', editValues.phone);
        }
    }, [editValues]);

    return (
        <form onSubmit={formik.handleSubmit}>
            <FieldInput
                label='Tên đăng nhập'
                name='username'
                value={formik.values.username}
                onChangeField={formik.handleChange}
                error={
                    formik.touched.username && Boolean(formik.errors.username)
                        ? formik.errors.username
                        : ''
                }
                isRequired={true}
            />
            <FieldInput
                label='Mật khẩu'
                name='password'
                type='password'
                value={formik.values.password}
                onChangeField={formik.handleChange}
                error={
                    formik.touched.password && Boolean(formik.errors.password)
                        ? formik.errors.password
                        : ''
                }
                isRequired={true}
            />
            <FieldInput
                label='Tên'
                name='fullname'
                value={formik.values.fullname}
                onChangeField={formik.handleChange}
                error={
                    formik.touched.fullname && Boolean(formik.errors.fullname)
                        ? formik.errors.fullname
                        : ''
                }
                isRequired={true}
            />
            <FieldInput
                label='Email'
                name='email'
                value={formik.values.email}
                onChangeField={formik.handleChange}
                error={
                    formik.touched.email && Boolean(formik.errors.email)
                        ? formik.errors.email
                        : ''
                }
                isRequired={true}
            />
            <FieldInput
                label='Số điện thoại'
                name='phone'
                value={formik.values.phone}
                onChangeField={formik.handleChange}
                error={
                    formik.touched.phone && Boolean(formik.errors.phone)
                        ? formik.errors.phone
                        : ''
                }
                isRequired={true}
            />
            <Box display='flex' justifyContent='right' gap='10px'>
                <Button
                    type='submit'
                    size='small'
                    color='secondary'
                    variant='contained'
                >
                    Lưu
                </Button>
                <Button
                    onClick={handleReset}
                    size='small'
                    color='warning'
                    variant='contained'
                >
                    Đóng
                </Button>
            </Box>
        </form>
    );
};

CustomerForm.propTypes = {
    editValues: PropTypes.object,
    onCreate: PropTypes.func,
    onSaveEdit: PropTypes.func,
    onReset: PropTypes.func,
};

export default CustomerForm;
