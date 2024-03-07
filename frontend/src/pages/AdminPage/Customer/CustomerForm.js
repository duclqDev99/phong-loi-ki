import {useFormik} from 'formik';
import {string, number, object} from 'yup';
import {useEffect} from 'react';
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
    const validationSchema = object({
        username: string().required('Customer\'s username is required'),
        fullname: string().required('Customer\'s fullname is required'),
        password: string().required('Customer\'s password is required'),
        email: string().required('Customer\'s email is required'),
        phone: string().required('Customer\'s phone is required'),
        gender: string().required('Customer\'s gender is required'),
        birthday: string().required('Customer\'s birthday is required'),
    });

    let initialValues = {
        username: '',
        fullname: '',
        password: '',
        email: '',
        phone: '',
        gender: '',
        birthday: '',
    };

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
            formik.setFieldValue('gender', editValues.gender);
            formik.setFieldValue('birthday', editValues.birthday);
        }
    }, [editValues]);

    return (
        <form onSubmit={formik.handleSubmit}>
            <FieldInput
                label='Username *'
                name='username'
                value={formik.values.username}
                onChangeField={formik.handleChange}
                error={
                    formik.touched.username && Boolean(formik.errors.username)
                        ? formik.errors.username
                        : ''
                }
            />
            <FieldInput
                label='Password *'
                name='password'
                type='password'
                value={formik.values.password}
                onChangeField={formik.handleChange}
                error={
                    formik.touched.password && Boolean(formik.errors.password)
                        ? formik.errors.password
                        : ''
                }
            />
            <FieldInput
                label='Fullname *'
                name='fullname'
                value={formik.values.fullname}
                onChangeField={formik.handleChange}
                error={
                    formik.touched.fullname && Boolean(formik.errors.fullname)
                        ? formik.errors.fullname
                        : ''
                }
            />
            <FieldInput
                label='Email *'
                name='email'
                value={formik.values.email}
                onChangeField={formik.handleChange}
                error={
                    formik.touched.email && Boolean(formik.errors.email)
                        ? formik.errors.email
                        : ''
                }
            />
            <FieldInput
                label='Phone *'
                name='phone'
                value={formik.values.phone}
                onChangeField={formik.handleChange}
                error={
                    formik.touched.phone && Boolean(formik.errors.phone)
                        ? formik.errors.phone
                        : ''
                }
            />
            <FieldSelect
                label='Gender'
                name='gender'
                dataSet={[
                    {label: 'Female', value: 'Female'},
                    {label: 'Male', value: 'Male'},
                ]}
                value={formik.values.gender}
                onChangeField={formik.handleChange}
            />
            <FieldInput
                label='Birthday'
                name='birthday'
                type='date'
                value={formik.values.birthday}
                onChangeField={formik.handleChange}
                error={
                    formik.touched.birthday && Boolean(formik.errors.birthday)
                        ? formik.errors.birthday
                        : ''
                }
            />
            <Box display='flex' justifyContent='right' gap='10px'>
                <Button
                    type='submit'
                    size='small'
                    color='secondary'
                    variant='contained'
                >
                    {editValues ? 'Edit' : 'Save'}
                </Button>
                <Button
                    onClick={handleReset}
                    size='small'
                    color='warning'
                    variant='contained'
                >
                    Close
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
