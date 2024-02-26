import { Box, Button, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import FieldInput from 'components/common/form/field/FieldInput';

const SettingProduct = ({
  selectProperty,
  selectPropertyValue,
  formData,
  onProductGenerate,
}) => {
  const [rows, setRows] = useState([]);

  // Generate Product using selectProperty and selectPropertyValue
  const generateProduct = () => {
    const result = [];
    for (let property of selectProperty) {
      for (let propertyValue of selectPropertyValue) {
        const name = `${formData.name}-${property}-${propertyValue}`;
        result.push({
          name,
          property,
          propertyValue,
          quantity: 0,
          price: 0,
        });
      }
    }
    setRows(result);
  };

  // Handle when change quantity
  const handleChangeQuantity = (e) => {
    const { name, value } = e.target;
    const idx = Number(name.replace('quantity', ''));
    setRows((prev) =>
      prev.map((row, index) => {
        if (index === idx) {
          return {
            ...row,
            quantity: value,
          };
        }
        return row;
      }),
    );
  };

  // Handle when change price
  const handleChangePrice = (e) => {
    const { name, value } = e.target;
    const idx = Number(name.replace('price', ''));
    setRows((prev) =>
      prev.map((row, index) => {
        if (index === idx) {
          return {
            ...row,
            price: value,
          };
        }
        return row;
      }),
    );
  };

  // Send Product generate for parent component
  const handleGenerateProduct = () => {
    onProductGenerate(rows);
  };

  useEffect(() => {
    generateProduct();
  }, []);

  return (
    <Box>
      <Box>
        <Typography component='h1'>Step 3: Setting product config</Typography>
      </Box>
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
          {rows.map((item, index) => (
            <tr key={index}>
              <td></td>
              <td> {item.name} </td>
              <td> {`${item.property} - ${item.propertyValue}`} </td>
              <td style={{ width: '20%' }}>
                <FieldInput
                  type='number'
                  name={`quantity${index}`}
                  value={item.quantity}
                  placeholder='Quantity'
                  onChangeField={handleChangeQuantity}
                />
              </td>
              <td style={{ width: '20%' }}>
                <FieldInput
                  type='number'
                  name={`price${index}`}
                  value={item.price}
                  placeholder='Price'
                  onChangeField={handleChangePrice}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Box display='flex' justifyContent='right'>
        <Button
          color='secondary'
          variant='contained'
          onClick={handleGenerateProduct}
        >
          Save Product Variable
        </Button>
      </Box>
    </Box>
  );
};

SettingProduct.propTypes = {
  selectProperty: PropTypes.array,
  selectPropertyValue: PropTypes.array,
  formData: PropTypes.object,
  onProductGenerate: PropTypes.func,
};

export default SettingProduct;
