import { Box } from '@mui/material';
import { Delete, Update } from '@mui/icons-material';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import Status from '../../../components/admin/status';

const OrderTable = ({ rows, onDelete, onEdit }) => {
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'fullname',
      headerName: 'Tên',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'phone',
      headerName: 'Số Điện Thoại',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'total_amount',
      headerName: 'Tổng Tiền',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'status',
      headerName: 'Trạng Thái',
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
          label='Cập Nhật'
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

OrderTable.propTypes = {
  rows: PropTypes.array,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

export default OrderTable;
