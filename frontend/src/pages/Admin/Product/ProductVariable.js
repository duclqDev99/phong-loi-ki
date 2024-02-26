import { ManageHistory } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import PropTypes from 'prop-types';

import FieldInput from 'components/common/form/field/FieldInput';

const ProductVariable = ({
  productGenerate,
  onChangeQuantity,
  onChangePrice,
}) => {
  const handleChangeQuantity = (e) => {
    const { name, value } = e.target;
    const idx = Number(name.replace('quantity', ''));
    const result = productGenerate.map((item, index) => {
      if (index === idx) {
        return {
          ...item,
          quantity: value,
        };
      }

      return item;
    });

    onChangeQuantity(result);
  };

  const handleChangePrice = (e) => {
    const { name, value } = e.target;
    const idx = Number(name.replace('price', ''));
    const result = productGenerate.map((item, index) => {
      if (index === idx) {
        return {
          ...item,
          price: value,
        };
      }

      return item;
    });

    onChangePrice(result);
  };

  return (
    <div className='card mb-4'>
      <div className='card-header'>
        <Box display='flex' justifyContent='space-between'>
          <h4>Product variable</h4>
          <IconButton size='large' color='primary' aria-label='Edit'>
            <ManageHistory />
          </IconButton>
        </Box>
      </div>
      <div className='card-body'>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th className='text-center'>
                {/* <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value="" />
                              </div> */}
              </th>
              <th>Name</th>
              <th>Variable</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {productGenerate.map((item, index) => (
              <tr key={index}>
                <td></td>
                <td> {item.name} </td>
                <td> {item.propertyValue} </td>
                <td style={{ width: '20%' }}>
                  <FieldInput
                    type='number'
                    classes=''
                    placeholder='Quantity'
                    name={`quantity${index}`}
                    value={item.quantity}
                    onChangeField={handleChangeQuantity}
                  />
                </td>
                <td style={{ width: '20%' }}>
                  <FieldInput
                    type='number'
                    classes=''
                    placeholder='Price'
                    name={`price${index}`}
                    value={item.price}
                    onChangeField={handleChangePrice}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

ProductVariable.propTypes = {
  productGenerate: PropTypes.array,
  onChangeQuantity: PropTypes.func,
  onChangePrice: PropTypes.func,
};

export default ProductVariable;
