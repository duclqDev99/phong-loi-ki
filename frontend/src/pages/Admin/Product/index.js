import { Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ProductTable from './ProductTable';
import FormFilter from 'components/common/form/formFilter';
import productApi from 'apis/productApi';

const Product = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const handleCreateProduct = () => {
    navigate('/admin/products/form');
  };

  const handleFilter = async (filter) => {
    await productApi.getList(filter).then((response) => {
      setProducts(response.data);
    });
  };

  const handleEdit = (data) => {
    navigate('/admin/products/form', { state: { editValue: data } });
  };

  const fetch = async () => {
    await productApi.getList().then((response) => {
      setProducts(response.data);
    });
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <section className='content-main'>
      <div className='content-header'>
        <div>
          <h2 className='content-title card-title'>Products List</h2>
        </div>
        <div>
          <Button
            variant='contained'
            color='secondary'
            endIcon={<Add />}
            onClick={handleCreateProduct}
          >
            Create
          </Button>
        </div>
      </div>
      <div className='card mb-4'>
        <div className='card-header'>
          <FormFilter onFilter={handleFilter} onClear={handleFilter} />
        </div>
        <div className='card-body'>
          <ProductTable products={products} onEdit={handleEdit} />
        </div>
      </div>
    </section>
  );
};

export default Product;
