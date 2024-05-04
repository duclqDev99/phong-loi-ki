import {useFormik} from 'formik';
import {string, object} from 'yup';
import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Box, Button} from '@mui/material';
import FieldInputFile from "../../../components/admin/form/field/FieldInputFile";

const SliderForm = ({
                         onCreate,
                         onReset,
                     }) => {
    const [imageTmp, setImageTmp] = useState("");

    let initialValues = {
        image: '',
    };

    const formik = useFormik({
        initialValues,
        enableReinitialize: true,
        onSubmit: async (values) => {
            onCreate(values);
            formik.resetForm();
        },
    });

    const handleReset = () => {
        onReset();
        formik.resetForm();
    };

    return (
        <form onSubmit={formik.handleSubmit}>
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

SliderForm.propTypes = {
    onCreate: PropTypes.func,
    onReset: PropTypes.func,
};

export default SliderForm;
