import { Add } from '@mui/icons-material';
import { Box, Checkbox, FormControlLabel, IconButton } from '@mui/material';
import PropTypes from 'prop-types';

import CategoryFormAction from '../Category/CategoryForm';
import DialogWrapper from 'components/common/dialogWapper';
import { useEffect, useState } from 'react';
import categoryApi from 'apis/categoryApi';

const CategoryForm = ({ categoryIds, onSelectCategory }) => {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const handleCreateCategory = async (formData) => {
    await categoryApi.add(formData).then((response) => {
      setCategories((prev) => [...prev, response.data]);
    });
    setOpen(false);
  };

  // Fetch categories
  const fetchCategories = async () => {
    await categoryApi.getList().then((response) => {
      const dataSet = response.data.map((item) => {
        return {
          value: item.id_category,
          title: item.title,
        };
      });
      setCategories(dataSet);
    });
  };

  // Event when component mounted
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className='card mb-4'>
      <div className='card-header'>
        <Box display='flex' justifyContent='space-between'>
          <h4>Categories</h4>
          <IconButton onClick={() => setOpen(true)}>
            <Add />
          </IconButton>
        </Box>
      </div>
      <Box
        sx={{
          margin: '5px 15px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {categories.map((category, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                size='small'
                value={category.value}
                checked={categoryIds.indexOf(category.value) !== -1}
                onChange={onSelectCategory}
              />
            }
            label={category.title}
          />
        ))}
      </Box>
      <DialogWrapper
        title='Add Category'
        open={open}
        onClose={() => setOpen(false)}
      >
        <CategoryFormAction
          onCreateCategory={handleCreateCategory}
          onReset={() => setOpen(false)}
        />
      </DialogWrapper>
    </div>
  );
};

CategoryForm.propTypes = {
  categoryIds: PropTypes.array,
  onSelectCategory: PropTypes.func,
};

export default CategoryForm;
