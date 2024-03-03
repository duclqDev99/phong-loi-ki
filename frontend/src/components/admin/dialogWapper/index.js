import { Close } from '@mui/icons-material';
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import PropTypes from 'prop-types';

const DialogWrapper = ({ title, open, children, onClose }) => {
  return (
    <div>
      <Dialog
        open={open}
        keepMounted
        aria-describedby='alert-dialog-slide-description'
        fullWidth
      >
        <Box
          sx={{
            margin: '5px 0px',
            padding: '0px',
            display: 'flex',
            justifyContent: 'space-between',
            '& .MuiButtonBase-root': {
              fontSize: '2rem',
              '&:hover': {
                backgroundColor: 'transparent',
              },
            },
          }}
        >
          <DialogTitle>{title ?? 'Not Title'}</DialogTitle>
          <IconButton
            sx={{
              width: '100px',
            }}
            onClick={onClose}
          >
            <Close fontSize='20px' />
          </IconButton>
        </Box>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </div>
  );
};

DialogWrapper.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
  children: PropTypes.any,
  onClose: PropTypes.func,
};

export default DialogWrapper;
