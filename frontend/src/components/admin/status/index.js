import { Chip } from '@mui/material';
import PropTypes from 'prop-types';
import { Check, Close } from '@mui/icons-material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const Status = ({ status }) => {
  const Comp = () => {
    switch (status) {
      case "active":
      case 1: {
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
      case 0: {
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
      case "processing": {
        return (
            <Chip
                icon={<HourglassBottomIcon />}
                label='Processing'
                color='warning'
                size='small'
                variant='outlined'
            />
        );
      }
      case "transporting": {
        return (
            <Chip
                icon={<LocalShippingIcon />}
                label='Transporting'
                color='secondary'
                size='small'
                variant='outlined'
            />
        );
      }
      case "success": {
        return (
            <Chip
                icon={<CheckBoxIcon />}
                label='Success'
                color='primary'
                size='small'
                variant='outlined'
            />
        );
      }
      case "cancel": {
        return (
            <Chip
                icon={<CancelIcon />}
                label='Cancel'
                color='error'
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
