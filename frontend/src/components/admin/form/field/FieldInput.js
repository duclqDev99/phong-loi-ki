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
                        accept,
                    }) => {
    return (
        <div className={classes ?? 'mb-4'} style={style ? {...style} : {}}>
            {label && (
                <label 
                    htmlFor='title' 
                    className='form-label'
                    style={{ textTransform: 'capitalize' }} 
                >
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
                accept={accept ?? ''}
                style={{ borderBottom: '1px solid #CED4DA' }} 
            />
            {error && <ValidateNotification message={error}/>}
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
    accept: PropTypes.string,
};

export default FieldInput;
