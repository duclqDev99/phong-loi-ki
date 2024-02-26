import { useFormik } from 'formik';
import { object, string } from 'yup';
import { PropTypes } from 'prop-types';
import { Box, Button } from '@mui/material';
import { useEffect } from 'react';

import FieldInput from 'components/common/form/field/FieldInput';
import { statusConstant } from 'constants';
import FieldSelect from 'components/common/form/field/FieldSelect';

const PropertyForm = ({ editValues, onCreate, onSaveEdit, onReset }) => {
  const vaidationSchema = object({
    title: string().required('Title is required'),
  });

  let initialValues = {
    title: '',
    status: statusConstant.ACTIVE,
  };

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: vaidationSchema,
    onSubmit: async (values) => {
      if (editValues) {
        onSaveEdit(editValues.id_property, values);
      } else {
        onCreate(values);
      }
      formik.resetForm();
    },
  });

  const handleReset = () => {
    formik.resetForm();
    onReset();
  };

  useEffect(() => {
    if (editValues) {
      formik.setFieldValue('title', editValues.title);
      formik.setFieldValue('slug', editValues.slug);
      formik.setFieldValue('description', editValues.description);
      formik.setFieldValue('status', editValues.status);
    }
  }, [editValues]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <FieldInput
        label='Title'
        name='title'
        value={formik.values.title}
        onChangeField={formik.handleChange}
        error={
          formik.touched.title && Boolean(formik.errors.title)
            ? formik.errors.title
            : ''
        }
      />
      <FieldSelect
        label='Status'
        name='status'
        value={formik.values.status}
        onChangeField={formik.handleChange}
      />
      <Box display='flex' justifyContent='center' gap='10px'>
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

PropertyForm.propTypes = {
  editValues: PropTypes.object,
  onCreate: PropTypes.func,
  onSaveEdit: PropTypes.func,
  onReset: PropTypes.func,
};

export default PropertyForm;
