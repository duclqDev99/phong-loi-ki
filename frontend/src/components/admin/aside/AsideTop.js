export default function AsideTop() {
  return (
    <div className='aside-top'>
      <a href='index.html' className='brand-wrap'>
        <img
          src='/assets/admin/imgs/theme/logo.svg'
          className='logo'
          alt='Nest Dashboard'
        />
      </a>
      <div>
        <button className='btn btn-icon btn-aside-minimize'>
          <i className='text-muted material-icons md-menu_open'></i>
        </button>
      </div>
    </div>
  );
}
