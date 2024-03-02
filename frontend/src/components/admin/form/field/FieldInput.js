import PropTypes from 'prop-types';
import ValidateNotification from '../validation/ValidateNotification';

const FieldInput = ({
  label,
  value,
  name,
  type,
  placeholder,
  error,
  classes,
  style,
  onChangeField,
}) => {
  return (
    <div className={classes ?? 'mb-4'} style={style ? { ...style } : {}}>
      {label && (
        <label htmlFor='title' className='form-label'>
          {label}
        </label>
      )}
      <input
        type={type ?? 'text'}
        placeholder={placeholder ?? 'Type here'}
        className='form-control'
        value={value}
        name={name}
        onChange={onChangeField}
        id={name}
      />
      {error && <ValidateNotification message={error} />}
    </div>
  );
};

FieldInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  classes: PropTypes.string,
  style: PropTypes.object,
  onChangeField: PropTypes.func,
};

export default FieldInput;
