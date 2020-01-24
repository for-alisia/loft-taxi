import React, { Component } from 'react';
import { formOrderData } from '../../helpers/config';
import {
    updateStateInputs,
    createInputs,
    defineNewInputValue,
    clearInput
} from '../../helpers/functions';
import Input from '../Input';

import './OrderForm.scss';

export default class OrderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: formOrderData
        };

        updateStateInputs(formOrderData, this.state);
    }

    handleInputChange = (e, name) => {
        const currentInput = defineNewInputValue(e, name, this.state);
        this.setState({
            [name]: currentInput
        });
    };

    handleInputBlur = (e, name) => {};

    handleClearInput = (e, name) => {
        const currentInput = clearInput(name, this.state);
        this.setState({
            [name]: currentInput
        });
    };

    render() {
        const { submitLabel, inputs } = this.state.data;
        const formInputs = createInputs(
            inputs,
            Input,
            this.state,
            this.handleInputChange,
            this.handleInputBlur,
            this.handleClearInput
        );
        return (
            <div className='OrderForm'>
                <form className='OrderForm__form form'>
                    <div className='OrderForm__inputs-block'>{formInputs}</div>
                    <input
                        className='OrderForm__form-submit form-submit'
                        type='submit'
                        value={submitLabel}
                    />
                </form>
            </div>
        );
    }
}
