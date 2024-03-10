import { Box } from '@mui/material';
import { Delete, Update } from '@mui/icons-material';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import Status from '../../../components/admin/status';

const ProductTable = ({ rows, onDeleteProduct, onEdit }) => {
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'name',
      headerName: 'Tên',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'quantity',
      headerName: 'Số lượng',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'author',
      headerName: 'Tác Giả',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'rating',
      headerName: 'Xếp hạng',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'status',
      headerName: 'Trang Thái',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => <Status status={params.value} />,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Hành Động',
      getActions: (params) => [
        <GridActionsCellItem
          key='update'
          icon={<Update />}
          label='Cập Nhật'
          onClick={() => onEdit(params.row)}
          showInMenu
        />,
        <GridActionsCellItem
          key='delete'
          icon={<Delete />}
          label='Xóa'
          onClick={() => onDeleteProduct(params.id)}
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

ProductTable.propTypes = {
  rows: PropTypes.array,
  onDeleteProduct: PropTypes.func,
  onEdit: PropTypes.func,
};

export default ProductTable;
