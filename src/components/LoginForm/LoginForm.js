import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formLoginData, formRegisterData } from '../../helpers/config';
import Input from '../Input';
import { AuthContext } from '../../helpers/context';
import { updateStateInputs, validateInput } from '../../helpers/functions';
import './LoginForm.scss';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: formLoginData
        };

        updateStateInputs(formLoginData, this.state);
        updateStateInputs(formRegisterData, this.state);
    }

    static contextType = AuthContext;

    static propTypes = {
        onPageChange: PropTypes.func
    };

    handleSubmit = e => {
        e.preventDefault();

        let isValid = true;
        const currentForm = this.state.data;
        const inputs = currentForm.inputs.map(({ name }) => name);
        inputs.forEach(name => {
            if (!this.state[name].isValid) {
                isValid = false;
            }
        });

        console.log(isValid);

        this.props.onPageChange('MapPage');
    };

    handleChangeForm = e => {
        e.preventDefault();
        this.setState(prevState => {
            const newData =
                prevState.data === formLoginData
                    ? formRegisterData
                    : formLoginData;

            return {
                data: newData
            };
        });
    };

    handleInputChange = (e, name) => {
        const currentInput = { ...this.state[name] };
        currentInput.value = e.target.value;
        this.setState({
            [name]: currentInput
        });
    };

    handleInputBlur(e, name) {
        const currentInput = validateInput(this.state[name]);

        this.setState({
            [name]: currentInput
        });
    }

    render() {
        const {
            title,
            subtitle,
            linkText,
            submitLabel,
            inputs
        } = this.state.data;

        const formInputs = inputs.map(({ name }) => {
            const {
                type,
                placeholder,
                label,
                id,
                value,
                errorMsg,
                hasError,
                validation
            } = this.state[name];
            return (
                <Input
                    type={type}
                    placeholder={placeholder}
                    label={label}
                    key={id}
                    name={name}
                    value={value}
                    onInputChange={e => this.handleInputChange(e, name)}
                    errorMsg={errorMsg}
                    onBlur={e => this.handleInputBlur(e, name)}
                    hasError={hasError}
                    validation={validation}
                />
            );
        });

        const registerFormClass =
            this.state.data === formRegisterData ? 'register-form' : '';

        const { isLogined } = this.context;

        return (
            <div className='LoginForm'>
                <form
                    className='LoginForm__form form'
                    onSubmit={this.handleSubmit}
                >
                    <h2 className='form-title'>{title}</h2>
                    <span>
                        {isLogined ? 'Вы залогинены' : 'Вы не залогинены'}
                    </span>
                    <p className='form-text'>
                        {subtitle}
                        <span
                            className='form-link link'
                            onClick={this.handleChangeForm}
                        >
                            {linkText}
                        </span>
                    </p>
                    <div
                        className={`LoginForm__inputs-block ${registerFormClass}`}
                    >
                        {formInputs}
                    </div>
                    <input
                        className='LoginForm__submit form-submit'
                        type='submit'
                        value={submitLabel}
                    />
                </form>
            </div>
        );
    }
}
