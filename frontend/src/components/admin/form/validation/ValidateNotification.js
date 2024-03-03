import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const ValidateNotification = ({ message }) => {
  return (
    <Typography component='span' variant='body1'>
      <Box sx={{ color: 'error.main', fontSize: 14 }}>
        {message ?? 'Error Validate'}
      </Box>
    </Typography>
  );
};

ValidateNotification.propTypes = {
  message: PropTypes.string,
};

export default ValidateNotification;
