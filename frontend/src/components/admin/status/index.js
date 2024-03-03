import { Chip } from '@mui/material';
import PropTypes from 'prop-types';
import { Check, Close } from '@mui/icons-material';

const Status = ({ status }) => {
  const Comp = () => {
    switch (status) {
      case "active":
      case '1': {
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
      case "inactive":
      case '0': {
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
      case "instock": {
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
      case "stock": {
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
  status: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
};

export default Status;
