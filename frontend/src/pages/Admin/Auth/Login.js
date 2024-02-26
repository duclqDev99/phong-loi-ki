import FieldInput from '../../../components/common/form/field/FieldInput';

const AdminLogin = () => {
  return (
    <section className='content-main mt-80 mb-80'>
      <div className='card mx-auto card-login'>
        <div className='card-body'>
          <h4 className='card-title mb-4'>Sign in</h4>
          <form >
            <FieldInput
              name='email'
              placeholder='Email'
            />
            <FieldInput
              type='password'
              name='password'
              placeholder='Password'
            />
            <div className='mb-4'>
              <button type='submit' className='btn btn-primary w-100'>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
