import { Box, IconButton } from '@mui/material';
import { Clear, Search } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { useState } from 'react';

import FieldSelect from '../field/FieldSelect';
import FieldInput from '../field/FieldInput';
import { statusConstant } from '../../../../constants';

const FormFilter = ({ onFilter, onClear }) => {
  const [status, setStatus] = useState('active');
  const [search, setSearch] = useState('');

  const handleFilter = () => {
    const filter = {
      status,
      search,
    };
    onFilter(filter);
  };

  const handleClear = () => {
    handleReset();
    onClear({});
  };

  const handleReset = () => {
    setSearch('');
    setStatus('active');
  };

  return (
    <Box display='flex' justifyContent='right' gap='5px'>
      <FieldSelect
        classes=''
        dataSet={[
          { label: 'Active', value: statusConstant.ACTIVE },
          { label: 'Inactive', value: statusConstant.INACTIVE },
        ]}
        value={status}
        onChangeField={(e) => setStatus(e.target.value)}
      />
      <Box
        display='flex'
        sx={{
          '& .MuiButtonBase-root': {
            backgroundColor: '#37517e',
            borderRadius: 'inherit',
            color: 'white',

            '&:hover': {
              backgroundColor: '#37517e',
            },
          },
        }}
      >
        <FieldInput
          value={search}
          onChangeField={(e) => setSearch(e.target.value)}
          placeholder='Search...'
          classes=''
        />
        <IconButton onClick={handleFilter}>
          <Search />
        </IconButton>
        <IconButton
          sx={{
            backgroundColor: '#e65100 !important',
          }}
          onClick={handleClear}
        >
          <Clear />
        </IconButton>
      </Box>
    </Box>
  );
};

FormFilter.propTypes = {
  onFilter: PropTypes.func,
  onClear: PropTypes.func,
};

export default FormFilter;
