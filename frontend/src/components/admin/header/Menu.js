import { NightsStay } from '@mui/icons-material';
import Action from './Action';
import Notification from './Notification';
import Account from './Account';

const Menu = () => {
  return (
    <div className='col-nav'>
      <ul className='nav'>
        <Notification />
        <Action icon={<NightsStay />} />
        {/* <li className="dropdown nav-item">
                    <a className="dropdown-toggle" data-bs-toggle="dropdown" href="#" id="dropdownLanguage" aria-expanded="false"><i className="material-icons md-public"></i></a>
                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownLanguage">
                        <a className="dropdown-item text-brand" href="#"><img src="assets/imgs/theme/flag-us.png" alt="English" />English</a>
                        <a className="dropdown-item" href="#"><img src="assets/imgs/theme/flag-fr.png" alt="Français" />Français</a>
                        <a className="dropdown-item" href="#"><img src="assets/imgs/theme/flag-jp.png" alt="Français" />日本語</a>
                        <a className="dropdown-item" href="#"><img src="assets/imgs/theme/flag-cn.png" alt="Français" />中国人</a>
                    </div>
                </li> */}
        <Account />
      </ul>
    </div>
  );
};

export default Menu;
