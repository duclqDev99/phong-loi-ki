import { Box } from '@mui/material';
import { Delete, Update } from '@mui/icons-material';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import Status from '../../../components/admin/status';

const CategoryTable = ({ rows, onDelete, onEdit }) => {
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'title',
      headerName: 'Tiêu đề',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'description',
      headerName: 'Mô tả',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'status',
      headerName: 'Trạng thái',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => <Status status={params.value} />,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Hành động',
      getActions: (params) => [
        <GridActionsCellItem
          key='update'
          icon={<Update />}
          label='Cập nhật'
          onClick={() => onEdit(params.row)}
          showInMenu
        />,
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

CategoryTable.propTypes = {
  rows: PropTypes.array,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

export default CategoryTable;
