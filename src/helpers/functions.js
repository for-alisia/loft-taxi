import is from 'is_js';
import React from 'react';

function isInputValid(value, validation) {
    if (!validation) {
        return true;
    }

    let isValid = true;
    if (validation.required) {
        isValid = value.trim() !== '' && isValid;
    }
    if (validation.email) {
        isValid = is.email(value) && isValid;
    }
    if (validation.minLength) {
        isValid = value.length >= validation.minLength && isValid;
    }
    if (validation.cardNumber) {
        isValid = is.creditCard(value) && isValid;
    }

    if (validation.latin) {
        isValid = /^[A-Za-z]*$/.test(value) && isValid;
    }
    if (validation.length) {
        isValid = value.length === validation.length && isValid;
    }
    if (validation.date) {
        const [month, year] = value.split('/');
        isValid = +month <= 31 && +year >= 20 && isValid;
    }

    return isValid;
}

function updateStateInputs({ inputs }, obj) {
    inputs.forEach(input => {
        obj[input.name] = input;
        obj[input.name]['value'] = '';
        obj[input.name]['isValid'] = obj[input.name].validation ? false : true;
    });
}

function validateInput(input) {
    const { value, validation } = input;
    const isValid = isInputValid(value, validation);
    const currentInput = { ...input };
    if (!isValid) {
        currentInput.hasError = true;
        currentInput.isvalid = false;
    } else {
        currentInput.hasError = false;
        currentInput.isValid = true;
    }

    return currentInput;
}

function defineNewInputValue(e, name, state) {
    const currentInput = { ...state[name] };
    let currentValue = e.target.value;

    if (name === 'ownerName') {
        currentValue = currentValue.toUpperCase();
    }

    if (name === 'expireDate') {
        currentValue =
            currentValue.length === 2 ? `${currentValue} / ` : currentValue;
    }

    currentInput.value = currentValue;
    return currentInput;
}

function clearInput(name, state) {
    const currentInput = { ...state[name] };
    if (currentInput.name === 'cvv') {
        const isPassword = currentInput.type === 'password' ? true : false;
        currentInput.classes = isPassword ? 'cvv-input-visible' : 'cvv-input';
        currentInput.type = isPassword ? 'text' : 'password';
    } else {
        currentInput.value = '';
    }

    currentInput.hasError = false;

    return currentInput;
}

function createInputs(
    inputs,
    View,
    state,
    handleInputChange,
    handleInputBlur,
    handleClearInput
) {
    return inputs.map(({ name }) => {
        const {
            type,
            placeholder,
            label,
            id,
            value,
            errorMsg,
            hasError,
            validation,
            classes
        } = state[name];

        return (
            <View
                type={type}
                placeholder={placeholder}
                label={label}
                key={id}
                name={name}
                value={value}
                errorMsg={errorMsg}
                hasError={hasError}
                validation={validation}
                classes={classes}
                onInputChange={e => handleInputChange(e, name)}
                onBlur={e => handleInputBlur(e, name)}
                onClearInput={e => handleClearInput(e, name)}
            />
        );
    });
}

export {
    isInputValid,
    updateStateInputs,
    validateInput,
    createInputs,
    defineNewInputValue,
    clearInput
};
