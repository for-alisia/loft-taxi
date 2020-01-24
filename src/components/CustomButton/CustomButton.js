import React from 'react';
import PropTypes from 'prop-types';
import './CustomButton.scss';

const CustomButton = ({ children, type, classes, handleClick }) => {
    const className = ['form-submit'];
    if (classes) {
        className.push(classes);
    }
    return (
        <button
            className={className.join(' ')}
            type={type}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

CustomButton.propTypes = {
    type: PropTypes.string,
    classes: PropTypes.string,
    handleClick: PropTypes.func
};

export default CustomButton;
