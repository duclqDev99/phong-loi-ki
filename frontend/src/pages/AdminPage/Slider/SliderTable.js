import { Box } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import PropTypes from 'prop-types';

const SliderTable = ({ rows, onDelete }) => {
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'image',
      headerName: 'Ảnh',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Hành động',
      getActions: (params) => [
        <GridActionsCellItem
          key='delete'
          icon={<Delete />}
          label='Xóa'
          onClick={() => onDelete(params.id)}
          showInMenu
        />,
      ],
    },
  ];

  return (
    <Box >
      <DataGrid
        columns={columns}
        rows={rows}
        getRowId={(row) => row.id}
      />
    </Box>
  );
};

SliderTable.propTypes = {
  rows: PropTypes.array,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

export default SliderTable;
