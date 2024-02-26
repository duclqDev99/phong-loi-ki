import { useEffect, useState } from 'react';
import PropertyForm from './PropertyForm';
import PropertyTable from './PropertyTable';
import propertyApi from 'apis/propertyApi';
import PropertyValue from './PropertyValue';
import DialogWrapper from 'components/common/dialogWapper';

import './style.scss';
import { Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import FormFilter from 'components/common/form/formFilter';
const Property = () => {
  const [properties, setProperties] = useState([]);
  const [detail, setDetail] = useState(null);
  const [editValue, setEditValue] = useState(null);
  const [open, setOpen] = useState(false);

  const fetch = async () => {
    const result = await propertyApi.getList();
    setProperties(result.data);
  };

  const handleCreate = async (formData) => {
    await propertyApi.create(formData).then((response) => {
      setProperties((prev) => [...prev, response.data]);
    });
    setOpen(false);
  };

  const handleEdit = async (id, formData) => {
    await propertyApi.update(id, formData).then((response) => {
      setProperties((prev) => {
        return prev.map((item) => {
          if (item.id_property === response.data.id_property) {
            return response.data;
          }
          return item;
        });
      });

      setEditValue(null);
      setOpen(false);
    });
  };

  const handleDelete = async (id) => {
    await propertyApi.delete(id).then((response) => {
      setProperties((prev) => {
        if (response) {
          return prev.filter((item) => item.id_property !== id);
        }
      });
    });
  };

  const handleEditForm = (formData) => {
    setEditValue(formData);
    setOpen(true);
  };

  const handleDetail = async (id) => {
    setDetail(id);
    setOpen(true);
  };

  const handleReset = () => {
    setEditValue(null);
    setOpen(false);
  };

  const handleClose = () => {
    setDetail(null);
    setOpen(false);
  };

  const handleFilter = async (filter) => {
    await propertyApi.getList(filter).then((response) => {
      setProperties(response.data);
    });
  };

  useEffect(() => {
    fetch();
  }, []);
  return (
    <section className='content-main'>
      <div className='content-header'>
        <div>
          <h2 className='content-title card-title'>Properties</h2>
          <p>Add, edit or delete a property</p>
        </div>
        <div>
          <Button
            onClick={() => setOpen(true)}
            variant='contained'
            color='secondary'
            endIcon={<Add />}
          >
            Create
          </Button>
        </div>
      </div>
      <div className='card'>
        <div className='card-header'>
          <FormFilter onFilter={handleFilter} onClear={handleFilter} />
        </div>
        <div className='card-body'>
          <div className='row'>
            <PropertyTable
              rows={properties}
              onDelete={handleDelete}
              onEdit={handleEditForm}
              onDetail={handleDetail}
            />
          </div>
        </div>
      </div>
      <DialogWrapper
        title={editValue ? 'Edit' : detail ? 'Property Value' : 'Create'}
        open={open}
        onClose={handleClose}
      >
        {!detail ? (
          <PropertyForm
            onCreate={handleCreate}
            editValues={editValue}
            onReset={handleReset}
            onSaveEdit={handleEdit}
          />
        ) : (
          <PropertyValue propertyId={detail} onClose={handleClose} />
        )}
      </DialogWrapper>
    </section>
  );
};

export default Property;
