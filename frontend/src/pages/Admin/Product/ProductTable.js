import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';

import Status from 'components/common/status';
import { SaveAs } from '@mui/icons-material';

const ProductTable = ({ products, onEdit }) => {
  const handleEdit = async (productEdit) => {
    onEdit(productEdit);
  };

  return (
    <div className='col-md-12'>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>Product</th>
            <th>Slug</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Status</th>
            <th className='text-end'>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td width='40%'>
                <a href='#' className='itemside'>
                  <div className='left'>
                    <img
                      src='/assets/admin/imgs/people/avatar-1.png'
                      className='img-sm img-avatar'
                      alt='Userpic'
                    />
                  </div>
                  <div className='info pl-3'>
                    <h6 className='mb-0 title'>{item.name}</h6>
                    <small className='text-muted'>
                      Product ID: #{item.id_product}
                    </small>
                  </div>
                </a>
              </td>
              <td>{item.slug}</td>
              <td>{item.quantity}</td>
              <td>{item.price} VNĐ</td>
              <td>
                <Status status={item.status} />
              </td>
              <td className='text-end'>
                <IconButton size='large' onClick={() => handleEdit(item)}>
                  <SaveAs />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ProductTable.propTypes = {
  products: PropTypes.array,
  onEdit: PropTypes.func,
};

export default ProductTable;
