import PropTypes from 'prop-types';

const FieldTextArea = ({ label, value, name, onChangeField }) => {
  return (
    <div className='mb-4'>
      <label 
        className='form-label'
        style={{ textTransform: 'capitalize' }} 
      >{label}</label>
      <textarea
        placeholder='Type here'
        className='form-control'
        name={name}
        onChange={onChangeField}
        value={value}
        style={{ borderBottom: '1px solid #CED4DA' }} 
      ></textarea>
    </div>
  );
};

FieldTextArea.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  onChangeField: PropTypes.func,
};

export default FieldTextArea;
