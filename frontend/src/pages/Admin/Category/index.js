import CategoryForm from './CategoryForm';
import CategoryTable from './CategoryTable';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { Add } from '@mui/icons-material';

import './style.scss';
import DialogWrapper from '../../../components/common/dialogWapper';
import FormFilter from '../../../components/common/form/formFilter';

const Category = () => {
  const [categories, setCategory] = useState([]);
  const [editValues, setEditValues] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <section className='content-main'>
      <div className='content-header'>
        <div>
          <h2 className='content-title card-title'>Categories</h2>
          <p>Add, edit or delete a category</p>
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
          <CategoryTable
            rows={categories}
            onDeleteCategory={handleDelete}
            onEdit={handleEdit}
          />
        </div>
      </div>
      <DialogWrapper
        title={editValues ? 'Edit' : 'Create'}
        open={open}
        onClose={handleClose}
      >
        <CategoryForm
          editValues={editValues}
          onCreateCategory={handleCreate}
          onSaveEdit={handleSaveEdit}
          onReset={handleReset}
        />
      </DialogWrapper>
    </section>
  );
};

export default Category;
