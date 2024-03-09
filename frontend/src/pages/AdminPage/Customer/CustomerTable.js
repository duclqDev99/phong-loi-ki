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
            headerName: 'Tên đăng nhập',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'Tên',
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
            headerName: 'Số điện thoại',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'gender',
            headerName: 'Giới tính',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'birthday',
            headerName: 'Ngày sinh',
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
                    key='update'
                    icon={<Update/>}
                    label='Cập nhật'
                    onClick={() => onEdit(params.row)}
                    showInMenu
                />,
                <GridActionsCellItem
                    key='delete'
                    icon={<Delete/>}
                    label='Xóa'
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
