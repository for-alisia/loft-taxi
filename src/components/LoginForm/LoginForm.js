import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formLoginData, formRegisterData } from '../../helpers/config';
import Input from '../Input';
import CustomButton from '../CustomButton';
import { AuthContext } from '../../helpers/context';
import {
    updateStateInputs,
    validateInput,
    createInputs,
    defineNewInputValue,
    clearInput
} from '../../helpers/functions';
import { signInWithGoogle } from '../../firebase/firebase-utils';
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

    handleSubmit = async e => {
        e.preventDefault();

        let isValid = true;
        const { login, signUp } = this.context;
        const currentForm = this.state.data;
        const inputs = currentForm.inputs.map(({ name }) => name);
        inputs.forEach(name => {
            if (!this.state[name].isValid) {
                isValid = false;
            }
        });

        if (isValid && currentForm === formLoginData) {
            const { userName, userPassword } = this.state;

            const loginResult = await login(userName.value, userPassword.value);

            if (loginResult) {
                this.setState({
                    errorAuth: loginResult.code
                });
            }
        }
        if (isValid && currentForm === formRegisterData) {
            const { email, password, firstName, lastName } = this.state;

            const additionalData = {
                displayName: `${firstName.value} ${lastName.value || ''}`
            };

            signUp(email.value, password.value, additionalData);
        }
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
        const currentInput = defineNewInputValue(e, name, this.state);
        this.setState({
            [name]: currentInput
        });
    };

    handleInputBlur = (e, name) => {
        const currentInput = validateInput(this.state[name]);

        this.setState({
            [name]: currentInput
        });
    };

    handleClearInput = (e, name) => {
        const currentInput = clearInput(name, this.state);
        this.setState({
            [name]: currentInput
        });
    };

    handleGoogleClick = e => {
        e.preventDefault();
        signInWithGoogle();
    };

    render() {
        const {
            title,
            subtitle,
            linkText,
            submitLabel,
            inputs
        } = this.state.data;

        const formInputs = createInputs(
            inputs,
            Input,
            this.state,
            this.handleInputChange,
            this.handleInputBlur,
            this.handleClearInput
        );

        const extFormClass =
            this.state.data === formRegisterData
                ? 'register-form'
                : 'login-form';

        return (
            <div className='LoginForm'>
                <form
                    className='LoginForm__form form'
                    onSubmit={this.handleSubmit}
                >
                    <h2 className='form-title'>{title}</h2>

                    {this.state.errorAuth ? (
                        <span className='error'>
                            Вы ввели неверный логин или пароль
                        </span>
                    ) : null}

                    <p className='form-text'>
                        {subtitle}
                        <span
                            className='form-link link'
                            onClick={this.handleChangeForm}
                        >
                            {linkText}
                        </span>
                    </p>
                    <div className={`LoginForm__inputs-block ${extFormClass}`}>
                        {formInputs}
                    </div>
                    <div className='btn-wrapper'>
                        <CustomButton type='submit'>{submitLabel}</CustomButton>
                        {this.state.data === formLoginData ? (
                            <CustomButton
                                classes='inverse-btn'
                                handleClick={this.handleGoogleClick}
                            >
                                Войти с Google
                            </CustomButton>
                        ) : null}
                    </div>
                </form>
            </div>
        );
    }
}
