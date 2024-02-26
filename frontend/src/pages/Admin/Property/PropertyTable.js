import { Box } from '@mui/material';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { Delete, Update, Visibility } from '@mui/icons-material';
import PropTypes from 'prop-types';

import Status from 'components/common/status';

const PropertyTable = ({ rows, onEdit, onDelete, onDetail }) => {
  const columns = [
    {
      field: 'id_property',
      headerName: 'ID',
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'title',
      headerName: 'Title',
      headerAlign: 'center',
      align: 'center',
      flex: 1,
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
          key='detail'
          icon={<Visibility />}
          label='Detail'
          onClick={() => onDetail(params.id)}
          showInMenu
        />,
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
          onClick={() => onDelete(params.id)}
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
        getRowId={(row) => row.id_property}
      />
    </Box>
  );
};

PropertyTable.propTypes = {
  rows: PropTypes.array,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onDetail: PropTypes.func,
};

export default PropertyTable;
