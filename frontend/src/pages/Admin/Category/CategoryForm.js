import { useFormik } from 'formik';
import { statusConstant } from 'constants';
import { string, object } from 'yup';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

import FieldInput from 'components/common/form/field/FieldInput';
import FieldTextArea from 'components/common/form/field/FieldTextArea';
import FieldSelect from 'components/common/form/field/FieldSelect';
import { Box, Button } from '@mui/material';
import { slugFormat } from 'utils';

const CategoryForm = ({
  editValues,
  onCreateCategory,
  onSaveEdit,
  onReset,
}) => {
  const vaidationSchema = object({
    title: string().required('Title is required'),
    slug: string()
      .matches(/^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/, 'Slug incorrect format')
      .required('Slug is required'),
  });

  let initialValues = {
    title: '',
    slug: '',
    description: '',
    status: statusConstant.ACTIVE,
  };

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: vaidationSchema,
    onSubmit: async (values) => {
      if (editValues) {
        onSaveEdit(values, editValues.id_category);
      } else {
        onCreateCategory(values);
      }
      formik.resetForm();
    },
  });

  const handleChangeTitle = (e) => {
    const title = e.target.value;
    const slug = slugFormat(title);
    formik.setFieldValue('title', title);
    formik.setFieldValue('slug', slug);
  };

  const handleReset = () => {
    onReset();
    formik.resetForm();
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
        onChangeField={handleChangeTitle}
        error={
          formik.touched.title && Boolean(formik.errors.title)
            ? formik.errors.title
            : ''
        }
      />
      <FieldInput
        label='Slug'
        name='slug'
        value={formik.values.slug}
        onChangeField={formik.handleChange}
        error={
          formik.touched.title && Boolean(formik.errors.slug)
            ? formik.errors.slug
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
          { label: 'Active', value: statusConstant.ACTIVE },
          { label: 'Inactive', value: statusConstant.INACTIVE },
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

CategoryForm.propTypes = {
  editValues: PropTypes.object,
  onCreateCategory: PropTypes.func,
  onSaveEdit: PropTypes.func,
  onReset: PropTypes.func,
};

export default CategoryForm;
