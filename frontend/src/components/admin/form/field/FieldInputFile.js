import PropTypes from 'prop-types';
import ValidateNotification from '../validation/ValidateNotification';
import {useEffect, useState} from "react";
import {Box} from "@mui/material";

const FieldInputFile = ({
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
                        isRequired,
                        span
                    }) => {
    const [imageTmp, setImageTmp] = useState(span ?? "");

    useEffect(() => {
        setImageTmp(span ?? "");
    }, [span]);

    return (
        <div className={classes ?? 'mb-4'} style={style ? {...style} : {}}>
            {label && (
                <label
                    htmlFor='title'
                    className='form-label'
                    style={{textTransform: 'capitalize', color: "black"}}
                >
                    {label} {isRequired && <span style={{color: 'red'}}> *</span>}
                </label>
            )}
            <Box display="flex">
                <input
                    type={type ?? 'text'}
                    placeholder={placeholder ?? ''}
                    className='form-control'
                    value={value}
                    name={name}
                    onChange={onChangeField}
                    id={name}
                    accept={accept ?? ''}
                    style={{borderBottom: '1px solid #CED4DA', color: 'transparent', width: '20%'}}
                />
                <span>{imageTmp ?? ""}</span>
            </Box>
            {error && <ValidateNotification message={error}/>}
        </div>
    );
};

FieldInputFile.propTypes = {
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
    span: PropTypes.string,
};

export default FieldInputFile;
