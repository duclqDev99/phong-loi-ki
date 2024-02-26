import { Box } from '@mui/material';
import { Delete, Update } from '@mui/icons-material';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import Status from 'components/common/status';

const CategoryTable = ({ rows, onDeleteCategory, onEdit }) => {
  const columns = [
    {
      field: 'id_category',
      headerName: 'ID',
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'title',
      headerName: 'Title',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'description',
      headerName: 'Description',
      flex: 1,
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => <Status status={params.value} />,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Action',
      getActions: (params) => [
        <GridActionsCellItem
          key='update'
          icon={<Update />}
          label='Update'
          onClick={() => onEdit(params.row)}
          showInMenu
        />,
        <GridActionsCellItem
          key='delete'
          icon={<Delete />}
          label='Delete'
          onClick={() => onDeleteCategory(params.id)}
          showInMenu
        />,
      ],
    },
  ];

  return (
    <Box height='100%'>
      <DataGrid
        columns={columns}
        rows={rows}
        getRowId={(row) => row.id_category}
      />
    </Box>
  );
};

CategoryTable.propTypes = {
  rows: PropTypes.array,
  onDeleteCategory: PropTypes.func,
  onEdit: PropTypes.func,
};

export default CategoryTable;
