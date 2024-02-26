import Menu from './Menu';

export default function Header() {
  return (
    <header className='main-header navbar'>
      <div className='col-search'>
        <form className='searchform'>
          <div className='input-group'>
            <input
              list='search_terms'
              type='text'
              className='form-control'
              placeholder='Search term'
            />
            <button className='btn btn-light bg' type='button'>
              <i className='material-icons md-search'></i>
            </button>
          </div>
          <datalist id='search_terms'>
            <option value='Products'></option>
            <option value='New orders'></option>
            <option value='Apple iphone'></option>
            <option value='Ahmed Hassan'></option>
          </datalist>
        </form>
      </div>
      <Menu />
    </header>
  );
}
