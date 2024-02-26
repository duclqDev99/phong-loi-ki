import { Box, Checkbox, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { DragIndicator } from '@mui/icons-material';

import propertyApi from 'apis/propertyApi';

const SelectPropertyValue = ({
  selectProperty,
  selectPropertyValue,
  onChangePropertyValue,
}) => {
  const [property, setProperty] = useState([]);

  // fetch property with relationship property value
  const fetchPropertyValue = async () => {
    await propertyApi
      .getAllPropertyValue({ codes: [...selectProperty] })
      .then((response) => {
        const propertyFormat = format(response.data);
        setProperty(propertyFormat);
      });
  };

  // format data from DB. Add field checked for propertyValue to using in checkbox
  const format = (data) => {
    const result = data.map((property) => {
      const values = property.values.map((propertyValue) => {
        if (
          selectPropertyValue.indexOf(
            property.code + '-' + propertyValue.code,
          ) != -1
        ) {
          return {
            ...propertyValue,
            checked: true,
          };
        }
        return propertyValue;
      });
      return {
        ...property,
        values,
      };
    });
    return result;
  };

  // handle when choose property value
  const handleSelect = (e) => {
    onChangePropertyValue(e);
  };

  useEffect(() => {
    fetchPropertyValue();
  }, [selectProperty]);

  return (
    <Box>
      <Box>
        <Typography component='h1'>Step 2: Select Property Value</Typography>
      </Box>
      {property.map((property, index) => {
        return (
          <Box key={index}>
            {property.values.length > 0 && (
              <Box
                sx={{
                  padding: '10px',
                  border: '1px solid rgba(224, 224, 224, 1)',
                  width: '400px',
                  margin: '5px',
                }}
              >
                <Box
                  display='flex'
                  justifyContent='left'
                  alignItems='center'
                  sx={{}}
                >
                  <DragIndicator />
                  <Typography component='h1'>{property.title}</Typography>
                </Box>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  {property.values.map((propertyValue, index) => {
                    return (
                      <Grid item xs={4} key={index}>
                        <Box display='flex' justifyContent='left'>
                          <Checkbox
                            name=''
                            checked={propertyValue.checked}
                            value={`${property.code}-${propertyValue.code}`}
                            onChange={handleSelect}
                          />
                          <Typography component='span'>
                            {propertyValue.value_property}
                          </Typography>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  );
};

SelectPropertyValue.propTypes = {
  selectProperty: PropTypes.array,
  selectPropertyValue: PropTypes.array,
  onChangePropertyValue: PropTypes.func,
};

export default SelectPropertyValue;
