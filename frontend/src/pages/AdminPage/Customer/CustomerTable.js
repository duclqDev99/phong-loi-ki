import {Box} from '@mui/material';
import {Delete, Update} from '@mui/icons-material';
import {DataGrid, GridActionsCellItem} from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import Status from '../../../components/admin/status';

const CategoryTable = ({rows, onDelete, onEdit}) => {
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'username',
            headerName: 'Username',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'fullname',
            headerName: 'Fullname',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'phone',
            headerName: 'Phone',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'gender',
            headerName: 'Gender',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'birthday',
            headerName: 'Birthday',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Action',
            getActions: (params) => [
                <GridActionsCellItem
                    key='update'
                    icon={<Update/>}
                    label='Update'
                    onClick={() => onEdit(params.row)}
                    showInMenu
                />,
                <GridActionsCellItem
                    key='delete'
                    icon={<Delete/>}
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
