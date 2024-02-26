import { Chip } from '@mui/material';
import { statusConstant } from 'constants';
import PropTypes from 'prop-types';
import { Check, Close } from '@mui/icons-material';

const Status = ({ status }) => {
  const Comp = () => {
    switch (status) {
      case statusConstant.ACTIVE: {
        return (
          <Chip
            icon={<Check />}
            label='Active'
            color='secondary'
            size='small'
            variant='outlined'
          />
        );
      }
      case statusConstant.INACTIVE: {
        return (
          <Chip
            icon={<Close />}
            label='Inactive'
            color='warning'
            size='small'
            variant='outlined'
          />
        );
      }
      case statusConstant.INSTOCK: {
        return (
          <Chip
            icon={<Check />}
            label='InStock'
            color='secondary'
            size='small'
            variant='outlined'
          />
        );
      }
      case statusConstant.OUTSTOCK: {
        return (
          <Chip
            icon={<Close />}
            label='Outstock'
            color='warning'
            size='small'
            variant='outlined'
          />
        );
      }
    }
  };

  return <Comp />;
};

Status.propTypes = {
  status: PropTypes.string,
};

export default Status;
