import is from 'is_js';

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

export { isInputValid, updateStateInputs, validateInput };
