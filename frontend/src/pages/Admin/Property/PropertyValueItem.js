import { Check, Close, Delete, Edit, ViewList } from '@mui/icons-material';
import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import FieldInput from 'components/common/form/field/FieldInput';

const PropertyValueItem = ({
  propertyValue,
  onDragStart,
  onDragEnter,
  onDragEnd,
  onDragOver,
  onSaveEdit,
  onDelete,
}) => {
  const [edit, setEdit] = useState(false);
  const [inputEdit, setInputEdit] = useState(propertyValue.value_property);
  const handleEdit = () => {
    setEdit(true);
    setInputEdit(propertyValue.value_property);
  };

  const handleDragStart = () => {
    setEdit(false);
    onDragStart();
  };

  const handleSaveEdit = () => {
    const formData = {
      ...propertyValue,
      value_property: inputEdit,
    };
    setEdit(false);
    onSaveEdit(propertyValue.id_property_value, formData);
  };

  const handleChange = (e) => {
    setInputEdit(e.target.value);
  };

  useEffect(() => {
    setInputEdit(propertyValue.value_property);
  }, [propertyValue.value_property]);
  return (
    <ListItem
      draggable
      onDragStart={handleDragStart}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
    >
      <ListItemIcon>
        <ViewList />
      </ListItemIcon>
      {!edit ? (
        <>
          <ListItemText primary={propertyValue.value_property} />
          <ListItemSecondaryAction>
            <IconButton onClick={handleEdit}>
              <Edit />
            </IconButton>
            <IconButton
              onClick={() => onDelete(propertyValue.id_property_value)}
            >
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      ) : (
        <>
          <FieldInput
            name='value_property'
            style={{
              flex: 4,
            }}
            value={inputEdit}
            onChangeField={handleChange}
            classes=''
          />
          <ListItemSecondaryAction>
            <IconButton onClick={handleSaveEdit}>
              <Check />
            </IconButton>
            <IconButton onClick={() => setEdit(false)}>
              <Close />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};

PropertyValueItem.propTypes = {
  propertyValue: PropTypes.object,
  onDragStart: PropTypes.func,
  onDragEnter: PropTypes.func,
  onDragEnd: PropTypes.func,
  onDragOver: PropTypes.func,
  onSaveEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default PropertyValueItem;
