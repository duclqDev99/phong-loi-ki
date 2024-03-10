import {useFormik} from 'formik';
import {string, object} from 'yup';
import {useEffect} from 'react';
import PropTypes from 'prop-types';

import FieldInput from '../../../components/admin/form/field/FieldInput';
import FieldTextArea from '../../../components/admin/form/field/FieldTextArea';
import FieldSelect from '../../../components/admin/form/field/FieldSelect';
import {Box, Button} from '@mui/material';

const CategoryForm = ({
                         editValues,
                         onCreate,
                         onSaveEdit,
                         onReset,
                     }) => {
    const validationSchema = object({
        title: string().required('Tiêu đề của danh mục là bắt buộc'),
        status: string().required('Trạng thái của danh mục là bắt buộc'),
    });

    let initialValues = {
        title: '',
        description: '',
        status: '1',
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
            formik.setFieldValue('title', editValues.title);
            formik.setFieldValue('description', editValues.description);
            formik.setFieldValue('status', editValues.status);
        }
    }, [editValues]);

    return (
        <form onSubmit={formik.handleSubmit}>
            <FieldInput
                label='Tiêu đề'
                name='title'
                value={formik.values.title}
                onChangeField={formik.handleChange}
                error={
                    formik.touched.title && Boolean(formik.errors.title)
                        ? formik.errors.title
                        : ''
                }
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

CategoryForm.propTypes = {
    editValues: PropTypes.object,
    onCreate: PropTypes.func,
    onSaveEdit: PropTypes.func,
    onReset: PropTypes.func,
};

export default CategoryForm;
