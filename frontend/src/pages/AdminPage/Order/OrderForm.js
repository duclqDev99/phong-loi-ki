import {useFormik} from 'formik';
import {string, object} from 'yup';
import {useEffect} from 'react';
import PropTypes from 'prop-types';

import FieldInput from '../../../components/admin/form/field/FieldInput';
import FieldTextArea from '../../../components/admin/form/field/FieldTextArea';
import FieldSelect from '../../../components/admin/form/field/FieldSelect';
import {Box, Button} from '@mui/material';

const OrderForm = ({
                         editValues,
                         onCreate,
                         onSaveEdit,
                         onReset,
                     }) => {
    const validationSchema = object({
        fullname: string().required('Order\'s fullname is required'),
        total_amount: string().required('Order\'s total amount is required'),
        address: string().required('Order\'s address is required'),
        phone: string().required('Order\'s phone is required'),
        email: string().required('Order\'s email is required'),
        status: string().required('Order\'s status is required'),
    });

    let initialValues = {
        fullname: '',
        total_amount: '',
        address: '',
        phone: '',
        email: '',
        status: '',
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
            formik.setFieldValue('fullname', editValues.fullname);
            formik.setFieldValue('total_amount', editValues.total_amount);
            formik.setFieldValue('address', editValues.address);
            formik.setFieldValue('phone', editValues.phone);
            formik.setFieldValue('email', editValues.email);
            formik.setFieldValue('status', editValues.status);
        }
    }, [editValues]);

    return (
        <form onSubmit={formik.handleSubmit}>
            <FieldInput
                label='Fullname'
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
                label='Total Amount'
                name='total_amount'
                value={formik.values.total_amount}
                onChangeField={formik.handleChange}
                error={
                    formik.touched.total_amount && Boolean(formik.errors.total_amount)
                        ? formik.errors.total_amount
                        : ''
                }
            />
            <FieldInput
                label='Address'
                name='address'
                value={formik.values.address}
                onChangeField={formik.handleChange}
                error={
                    formik.touched.address && Boolean(formik.errors.address)
                        ? formik.errors.address
                        : ''
                }
            />
            <FieldInput
                label='Phone'
                name='phone'
                value={formik.values.phone}
                onChangeField={formik.handleChange}
                error={
                    formik.touched.phone && Boolean(formik.errors.phone)
                        ? formik.errors.phone
                        : ''
                }
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
            />
            <FieldSelect
                label='Status'
                name='status'
                dataSet={[
                    {label: 'Processing', value: 'processing'},
                    {label: 'Transporting', value: 'transporting'},
                    {label: 'Success', value: 'success'},
                    {label: 'Cancel', value: 'cancel'},
                ]}
                value={formik.values.status}
                onChangeField={formik.handleChange}
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

OrderForm.propTypes = {
    editValues: PropTypes.object,
    onCreate: PropTypes.func,
    onSaveEdit: PropTypes.func,
    onReset: PropTypes.func,
};

export default OrderForm;
