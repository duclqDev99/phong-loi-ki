import { Alert, Box, Button, Drawer, Typography } from '@mui/material';
import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from '@mui/icons-material';
import { PropTypes } from 'prop-types';
import { useState } from 'react';

import SelectProperty from './Step/SelectProperty';
import { isEmptyArray } from 'formik';
import SelectPropertyValue from './Step/SelectPropertyValue';
import { stepGenerateProduct } from 'constants';
import './style.scss';

const ConfiguareProductForm = ({ toggle, onClose, onGenerateProduct }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [selectProperty, setSelectProperty] = useState([]);
  const [selectPropertyValue, setSelectPropertyValue] = useState([]);
  const [step, setStep] = useState(stepGenerateProduct[0]);

  // check step next
  const isNext = () => {
    if (step === 'select-property' && isEmptyArray(selectProperty)) {
      setErrorMessage('Please select property');
    } else if (
      step === 'select-property-value' &&
      isEmptyArray(selectPropertyValue)
    ) {
      setErrorMessage('Please select property value');
    } else {
      setErrorMessage('');
      handleChangeStep('next');
    }
  };

  // Handle change step: prev, next
  const handleChangeStep = (type) => {
    const currentIndex = stepGenerateProduct.indexOf(step);
    const lengthStep = stepGenerateProduct.length - 1;
    if (type === 'next' && currentIndex < lengthStep) {
      setStep(stepGenerateProduct[currentIndex + 1]);
    }

    if (type === 'prev' && currentIndex > 0) {
      setStep(stepGenerateProduct[currentIndex - 1]);
    }

    if (type === 'next' && currentIndex == lengthStep) {
      setStep(stepGenerateProduct[0]);
      onGenerateProduct(selectPropertyValue);
    }
  };

  // Handle Choose property value
  const handleChangePropertyValue = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      setSelectPropertyValue((prev) => {
        const result = [...prev];
        result.push(value);
        return result;
      });
    } else {
      setSelectPropertyValue((prev) => {
        return prev.filter((item) => item != value);
      });
    }
  };

  // Handle choose property
  const handleChangeProperty = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setSelectProperty((prev) => {
        const result = [...prev];
        result.push(value);
        return result;
      });
    } else {
      setSelectProperty((prev) => {
        return prev.filter((item) => item != value);
      });
    }
    setSelectPropertyValue([]);
  };

  // Handle steps
  const Step = () => {
    let comp = '';
    switch (step) {
      case 'select-property':
        comp = (
          <SelectProperty
            selectProperty={selectProperty}
            onSelect={handleChangeProperty}
          />
        );
        break;
      case 'select-property-value':
        comp = (
          <SelectPropertyValue
            selectProperty={selectProperty}
            selectPropertyValue={selectPropertyValue}
            onChangePropertyValue={handleChangePropertyValue}
          />
        );
        break;
    }
    return comp;
  };

  return (
    <>
      <Drawer anchor='right' open={toggle} onClose={() => onClose()} sx={{}}>
        <Box>
          <Typography component='h1'>CREATE PRODUCT CONFIGUARE</Typography>
          {errorMessage && <Alert severity='error'>{errorMessage}</Alert>}
          <Box display='flex' justifyContent='right'>
            <Box
              display='flex'
              gap='5px'
              sx={{
                margin: '10px 0px',
              }}
            >
              <Button
                onClick={() => handleChangeStep('prev')}
                color='warning'
                variant='outlined'
              >
                <KeyboardDoubleArrowLeft />
                Prev
              </Button>
              <Button onClick={isNext} color='warning' variant='contained'>
                Next
                <KeyboardDoubleArrowRight />
              </Button>
            </Box>
          </Box>
          {Step()}
        </Box>
      </Drawer>
    </>
  );
};

ConfiguareProductForm.propTypes = {
  toggle: PropTypes.any,
  formData: PropTypes.object,
  onClose: PropTypes.func,
  onGenerateProduct: PropTypes.func,
};

export default ConfiguareProductForm;
