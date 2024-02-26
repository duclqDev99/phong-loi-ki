import { number, object, string } from 'yup';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { isEmptyArray, useFormik } from 'formik';

import FieldTextArea from 'components/common/form/field/FieldTextArea';
import FieldInput from 'components/common/form/field/FieldInput';
import { statusConstant } from 'constants';
import ProductVariable from './ProductVariable';
import CategoryForm from './CategoryForm';
import { slugFormat, toastMessage } from 'utils';
import productApi from 'apis/productApi';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductForm = () => {
  /* eslint-disable no-unused-vars */
  const [toggle, setToggle] = useState(false);
  const [productGenerate, setProductGenerate] = useState([]);
  const [categoryIds, setCategoryIds] = useState([]);
  const [editValue, setEditValue] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  //Init formik
  const initialValues = {
    name: '',
    slug: '',
    price: '',
    quantity: '',
    description: '',
    status: statusConstant.INSTOCK,
  };

  const validationSchema = object({
    name: string().required('Name is required'),
    slug: string()
      .matches(/^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/, 'Slug incorrect format')
      .required('Slug is required'),
    price: number().required('Price is required'),
    quantity: number().required('Quantity is required'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const formData = {
        ...values,
        categoryIds,
      };
      if (editValue) {
        handleUpdateProduct(editValue.id_product, formData);
      } else {
        handleCreateProduct(formData);
      }
    },
  });

  // Handle toggle form configuare product
  const handleToggleConfiguare = () => {
    formik.validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        setToggle(true);
      }
    });
  };

  //handle receive product generate
  const handleGenerateProduct = (propertyValues) => {
    const result = [];
    for (let propertyValue of propertyValues) {
      const name = `${formik.values.name}-${propertyValue}`;
      const slug = slugFormat(name);
      result.push({
        name,
        slug,
        description: name,
        propertyValue,
        quantity: 0,
        price: 0,
      });
    }
    setProductGenerate(result);
    setToggle(false);
  };

  const handleChangeQuantity = (result) => {
    setProductGenerate(result);
  };

  const handleChangePrice = (result) => {
    setProductGenerate(result);
  };

  const handleSelectCategory = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCategoryIds((prev) => [...prev, Number(value)]);
    } else {
      setCategoryIds((prev) => {
        return prev.filter((item) => item != value);
      });
    }
  };

  const handleChangeName = (e) => {
    const name = e.target.value;
    const slug = slugFormat(name);

    formik.setFieldValue('name', name);
    formik.setFieldValue('slug', slug);
  };

  const handleCreateProduct = async (formData) => {
    await productApi
      .create(formData)
      .then((response) => {
        if (response.data) {
          navigate('/admin/products');
          toastMessage('success', 'Create Product Success');
        }
      })
      .catch((error) => {
        const result = error.response.data;
        toastMessage('error', result.data.message);
      });
  };

  const handleUpdateProduct = async (productId, formData) => {
    await productApi
      .update(productId, formData)
      .then((response) => {
        if (response.data) {
          navigate('/admin/products');
          toastMessage('success', 'Update Product Success');
        }
      })
      .catch((error) => {
        const result = error.response.data;
        toastMessage('error', result.data.message);
      });
  };

  const fetchCategories = async (productId) => {
    await productApi.getListCategory(productId).then((response) => {
      if (response.data) {
        const categories = [];
        response.data.forEach((item) => {
          categories.push(item.id_category);
        });
        setCategoryIds(categories);
      }
    });
  };

  useEffect(() => {
    if (location?.state.editValue) {
      setEditValue(location.state.editValue);

      const edit = location.state.editValue;
      formik.setFieldValue('name', edit.name);
      formik.setFieldValue('slug', edit.slug);
      formik.setFieldValue('description', edit.description);
      formik.setFieldValue('price', edit.price);
      formik.setFieldValue('quantity', edit.quantity);

      fetchCategories(edit.id_product);
    }
  }, []);

  return (
    <section className='content-main'>
      <form onSubmit={formik.handleSubmit}>
        <div className='row'>
          {/* Action product form */}
          <div className='col-12'>
            <div className='content-header'>
              <h2 className='content-title'>
                {!editValue ? 'Add New Product' : 'Edit Product'}
              </h2>
              <div>
                <button className='btn btn-light rounded font-sm text-body hover-up'>
                  Save to draft
                </button>
                <Button
                  sx={{
                    margin: '0px 5px',
                  }}
                  type='submit'
                  size='medium'
                  color='secondary'
                  variant='contained'
                >
                  Public
                </Button>
              </div>
            </div>
          </div>
          {/* Action Product form */}
          <div className='col-lg-9'>
            {/* Information product */}
            <div className='card mb-4'>
              <div className='card-header'>
                <h4>{editValue ? 'Update' : 'Create'}</h4>
              </div>
              <div className='card-body'>
                <FieldInput
                  label='Name'
                  name='name'
                  value={formik.values.name}
                  onChangeField={handleChangeName}
                  error={
                    formik.touched.title && Boolean(formik.errors.title)
                      ? formik.errors.name
                      : ''
                  }
                />
                <FieldInput
                  label='Slug'
                  name='slug'
                  value={formik.values.slug}
                  onChangeField={formik.handleChange}
                  error={
                    formik.touched.slug && Boolean(formik.errors.slug)
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
                <div className='row'>
                  <div className='col-lg-4'>
                    <div className='mb-4'>
                      <label className='form-label'>Price</label>
                      <div className='row gx-2'>
                        <FieldInput
                          classes=''
                          name='price'
                          onChangeField={formik.handleChange}
                          value={formik.values.price}
                          error={
                            formik.touched.price && Boolean(formik.errors.price)
                              ? formik.errors.price
                              : ''
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div className='mb-4'>
                      <label className='form-label'>Quantity</label>
                      <FieldInput
                        classes=''
                        name='quantity'
                        value={formik.values.quantity}
                        onChangeField={formik.handleChange}
                        error={
                          formik.touched.quantity &&
                          Boolean(formik.errors.quantity)
                            ? formik.errors.quantity
                            : ''
                        }
                      />
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <label className='form-label'>Currency</label>
                    <select className='form-select'>
                      <option>VNĐ</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* End informatuin product */}
            {!isEmptyArray(productGenerate) && (
              <ProductVariable
                productGenerate={productGenerate}
                onChangeQuantity={handleChangeQuantity}
                onChangePrice={handleChangePrice}
              />
            )}
          </div>
          <div className='col-lg-3'>
            <div className='card mb-4'>
              <div className='card-header'>
                <h4>Media</h4>
              </div>
              <div className='card-body'>
                <div className='input-upload'>
                  <img src='/assets/admin/imgs/theme/upload.svg' alt='' />
                  <input className='form-control' type='file' />
                </div>
              </div>
            </div>
            <CategoryForm
              categoryIds={categoryIds}
              onSelectCategory={handleSelectCategory}
            />
          </div>
        </div>
      </form>
      {/* Modal choose option product variabel */}
      {/* <ConfiguareProductForm
        toggle={toggle}
        formData={formik.values}
        onClose={() => setToggle(false)}
        onGenerateProduct={handleGenerateProduct}
      /> */}
      {/* End modal choose option product variabel */}
    </section>
  );
};

export default ProductForm;
