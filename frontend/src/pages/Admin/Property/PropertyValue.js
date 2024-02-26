import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Add } from '@mui/icons-material';
import { Box, Button, IconButton } from '@mui/material';

import PropertyValueItem from './PropertyValueItem';
import proertyValueApi from 'apis/propertyValueApi';
import FieldInput from 'components/common/form/field/FieldInput';
import propertyApi from 'apis/propertyApi';

const PropertyValue = ({ propertyId, onClose }) => {
  const [propertyValues, setPropertyValue] = useState([]);
  const [inputAdd, setInputAdd] = useState('');
  const dragItem = useRef();
  const dragItemOver = useRef();

  const handleDragStart = (index) => {
    dragItem.current = index;
  };

  const handleDragEnd = (index) => {
    dragItemOver.current = index;
  };

  const handleSoft = () => {
    let listPropertyValue = [...propertyValues];
    //remove drag item
    const draggerContent = listPropertyValue.splice(dragItem.current, 1)[0];
    //push draggerContent position
    listPropertyValue.splice(dragItemOver.current, 0, draggerContent);
    //reset
    dragItem.current = null;
    dragItemOver.current = null;
    //call api and sort in ui
    handleSoftApi(listPropertyValue);
    setPropertyValue(listPropertyValue);
  };

  const handleSoftApi = async (listPropertySoft) => {
    const list = listPropertySoft.map((item, index) => {
      return {
        ...item,
        order_property: index,
      };
    });
    const formData = {
      id_property: propertyId,
      order_list: [...list],
    };
    await proertyValueApi.updateOrder(formData);
  };

  const fetchPropertyValue = async (propertyId) => {
    await propertyApi.getPropertyValue(propertyId).then((response) => {
      setPropertyValue(response.data);
    });
  };

  const handleClose = () => {
    onClose();
  };

  const handleAdd = async () => {
    const formData = {
      value_property: inputAdd,
      id_property: propertyId,
    };
    if (inputAdd) {
      await proertyValueApi.add(formData).then((response) => {
        const data = response.data;
        const dataFormat = { ...formatData(data) };
        setPropertyValue((prev) => [dataFormat, ...prev]);
      });
    }
    setInputAdd('');
  };

  const handleSaveEdit = async (propertyValueId, formData) => {
    if (formData.value_property) {
      await proertyValueApi
        .update(propertyValueId, formData)
        .then((response) => {
          if (response) {
            const data = response.data;
            const dataFormat = { ...formatData(data) };
            setPropertyValue((prev) => {
              return prev.map((item) => {
                if (item.id_property_value === dataFormat.id_property_value) {
                  return dataFormat;
                }
                return item;
              });
            });
          }
        });
    }
  };

  const handleDelete = async (propertyValueId) => {
    await proertyValueApi.delete(propertyValueId).then((response) => {
      if (response) {
        const result = propertyValues.filter(
          (item) => item.id_property_value !== propertyValueId,
        );
        setPropertyValue(result);
      }
    });
  };

  const formatData = (data) => {
    const dataFormat = {
      id_property: data.id_property,
      id_property_value: data.id_property_value,
      order_property: data.order_property,
      value_property: data.value_property,
    };
    return dataFormat;
  };

  useEffect(() => {
    fetchPropertyValue(propertyId);
  }, [propertyId]);

  return (
    <div>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        sx={{ margin: '5px 0px' }}
      >
        <FieldInput
          name='title'
          style={{
            flex: 4,
          }}
          value={inputAdd}
          onChangeField={(e) => setInputAdd(e.target.value)}
          classes=''
        />
        <IconButton onClick={handleAdd}>
          <Add />
        </IconButton>
      </Box>
      {propertyValues.map((item, index) => {
        return (
          <PropertyValueItem
            key={index}
            propertyValue={item}
            onDragStart={() => handleDragStart(index)}
            onDragEnter={() => handleDragEnd(index)}
            onDragEnd={handleSoft}
            onDragOver={(e) => e.preventDefault()}
            onSaveEdit={handleSaveEdit}
            onDelete={handleDelete}
          />
        );
      })}

      <Box
        display='flex'
        justifyContent='center'
        gap='10px'
        sx={{ margin: '10px 0px' }}
      >
        <Button
          onClick={handleClose}
          size='small'
          color='warning'
          variant='contained'
        >
          Close
        </Button>
      </Box>
    </div>
  );
};

PropertyValue.propTypes = {
  propertyId: PropTypes.number,
  onClose: PropTypes.func,
};

export default PropertyValue;
