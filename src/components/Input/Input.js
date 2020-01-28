import React from 'react';
import PropTypes, { shape } from 'prop-types';
import './Input.scss';

const Input = ({
    onInputChange,
    label,
    hasError,
    errorMsg,
    validation,
    classes,
    onClearInput,
    ...otherProps
}) => {
    const inputId = `input${Math.random()}`;
    const className = ['form-input'];
    const isInvalid = hasError ? true : false;

    if (hasError) {
        className.push('invalid');
    }

    return (
        <div className='form-input-wrapper'>
            <input
                className={className.join(' ')}
                id={inputId}
                onChange={onInputChange}
                {...otherProps}
            />
            <label className='form-label' htmlFor={inputId}>
                {label}
                {validation ? <span>*</span> : null}
                <i
                    className={`form-input-icon ${classes}`}
                    onClick={onClearInput}
                ></i>
            </label>
            {isInvalid ? (
                <span className='form-input-error'>{errorMsg}</span>
            ) : null}
        </div>
    );
};

Input.propTypes = {
    onInputChange: PropTypes.func,
    onClearInput: PropTypes.func,
    label: PropTypes.string,
    hasError: PropTypes.bool,
    errorMsg: PropTypes.string,
    classes: PropTypes.string,
    otherProps: shape({
        type: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        name: PropTypes.string
    })
};

export default Input;
