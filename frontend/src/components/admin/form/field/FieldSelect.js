import PropTypes from 'prop-types';
import ValidateNotification from '../validation/ValidateNotification';

const FieldSelect = ({
  label,
  value,
  name,
  classes,
  error,
  dataSet,
  onChangeField,
  isRequired, 
}) => {
  return (
    <div className={classes ?? 'mb-4'}>
      {label} {isRequired && <span style={{ color: 'red' }}> *</span>}
      {dataSet && (
        <select
          className='form-select'
          name={name}
          onChange={onChangeField}
          value={value}
        >
          {dataSet.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      )}
      {error && <ValidateNotification message={error} />}
    </div>
  );
};

FieldSelect.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  classes: PropTypes.string,
  error: PropTypes.string,
  dataSet: PropTypes.array,
  onChangeField: PropTypes.func,
};

export default FieldSelect;
