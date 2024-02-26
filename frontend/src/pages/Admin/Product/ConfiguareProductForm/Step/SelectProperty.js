import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Status from 'components/common/status';
import propertyApi from 'apis/propertyApi';

const SelectProperty = ({ selectProperty, onSelect }) => {
  const [rows, setRow] = useState([]);
  // Fetch properties from DB
  const fetchProperty = async () => {
    await propertyApi.getList().then((response) => {
      const format = formatRows(response.data);
      setRow(format);
    });
  };

  // Handle data form DB. Add field checked to handle checkbox
  const formatRows = (rows) => {
    return rows.map((row) => {
      return {
        ...row,
        checked: selectProperty.indexOf(row.code) !== -1,
      };
    });
  };

  // Handle when choose property checkbox.
  const handleSelect = (e) => {
    const { checked, value } = e.target;
    setRow((prev) => {
      return prev.map((item) => {
        if (item.code == value) {
          return {
            ...item,
            checked: checked,
          };
        }
        return item;
      });
    });
    onSelect(e);
  };

  useEffect(() => {
    fetchProperty();
  }, []);

  return (
    <Box>
      <Box>
        <Typography component='h1'>Step 1: Select Property</Typography>
      </Box>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th className='text-center'>
              {/* <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" />
                            </div> */}
            </th>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>created_at</th>
            <th>update_at</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((item, index) => (
            <tr key={index}>
              <td className='text-center'>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value={item.code}
                    onChange={handleSelect}
                    checked={item.checked}
                  />
                </div>
              </td>
              <td>{item.id_property}</td>
              <td>
                <b>{item.title}</b>
              </td>
              <td>
                <Status status={item.status} />
              </td>
              <td>{item.created_at}</td>
              <td>{item.updated_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};

SelectProperty.propTypes = {
  selectProperty: PropTypes.array,
  onSelect: PropTypes.func,
};

export default SelectProperty;
