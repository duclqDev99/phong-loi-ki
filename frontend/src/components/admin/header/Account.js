import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'stores/reducer/authReducer';

const Account = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <li className='dropdown nav-item'>
      <a
        className={show ? 'dropdown-toggle show' : 'dropdown-toggle'}
        data-bs-toggle='dropdown'
        href='#'
        id='dropdownAccount'
        aria-expanded={show}
        onClick={() => setShow(!show)}
      >
        <img
          className='img-xs rounded-circle'
          src='/assets/admin/imgs/people/avatar-2.png'
          alt='User'
        />
      </a>
      <div
        className={
          show
            ? 'dropdown-menu dropdown-menu-end show'
            : 'dropdown-menu dropdown-menu-end'
        }
        aria-labelledby='dropdownAccount'
      >
        <a className='dropdown-item' href='#'>
          <i className='material-icons md-perm_identity'></i>Edit Profile
        </a>
        <a className='dropdown-item' href='#'>
          <i className='material-icons md-settings'></i>Account Settings
        </a>
        <a className='dropdown-item' href='#'>
          <i className='material-icons md-account_balance_wallet'></i>Wallet
        </a>
        <a className='dropdown-item' href='#'>
          <i className='material-icons md-receipt'></i>Billing
        </a>
        <a className='dropdown-item' href='#'>
          <i className='material-icons md-help_outline'></i>Help center
        </a>
        <div className='dropdown-divider'></div>
        <a className='dropdown-item text-danger' onClick={handleLogout}>
          <i className='material-icons md-exit_to_app'></i>Logout
        </a>
      </div>
    </li>
  );
};

export default Account;
