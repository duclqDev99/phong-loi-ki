import { useState } from 'react';
import {
  Alert,
  Box,
  Checkbox,
  Chip,
  ListItemText,
  MenuItem,
  Select,
} from '@mui/material';

import PropTypes from 'prop-types';
import { isEmptyArray } from 'formik';

const FieldMultipleSelect = ({ dataSet }) => {
  const [categorySelected, setCategorySelected] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setCategorySelected(value);
  };

  return (
    <>
      {!isEmptyArray(dataSet) ? (
        <Select
          multiple
          value={categorySelected}
          onChange={handleChange}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((title, index) => (
                <Chip key={index} label='title' />
              ))}
            </Box>
          )}
          sx={{
            margin: '10px',
            border: 'none',
            borderRadius: '4px',
            minHeight: '41px',
            backgroundColor: '#f4f5f9',
            outline: 'none',
            boxShadow: 'none',
            '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          }}
        >
          {dataSet.map((item, index) => (
            <MenuItem key={index} value={item.value} title={item.title}>
              <Checkbox checked={categorySelected.indexOf(item.value) > -1} />
              <ListItemText primary={item.title} />
            </MenuItem>
          ))}
        </Select>
      ) : (
        <Alert severity='warning'>Dataset not found</Alert>
      )}
    </>
  );
};

FieldMultipleSelect.propTypes = {
  dataSet: PropTypes.array,
};

export default FieldMultipleSelect;
