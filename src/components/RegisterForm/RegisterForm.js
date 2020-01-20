import React, { Component } from 'react';
import './RegisterForm.scss';

export default class RegisterForm extends Component {
    state = {
        registerMail: '',
        registerName: '',
        registerSurname: '',
        registerPassword: ''
    };
    onSubmit = e => {
        e.preventDefault();
        this.props.onPageChange('MapPage');
    };

    onLoginPage = e => {
        e.preventDefault();
        this.props.onFormChange();
    };

    onInputChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    render() {
        const {
            registerMail,
            registerName,
            registerSurname,
            registerPassword
        } = this.state;
        return (
            <div className='RegisterForm'>
                <form
                    className='RegisterForm__form form'
                    onSubmit={this.onSubmit}
                >
                    <h2 className='form-title'>Регистрация</h2>
                    <p className='form-text'>
                        Уже зарегистрирован?
                        <span
                            className='form-link link'
                            onClick={this.onLoginPage}
                        >
                            Войти
                        </span>
                    </p>
                    <input
                        className='RegisterForm__input form-input'
                        type='text'
                        placeholder='Введите адрес электронной почты'
                        id='registerMail'
                        onChange={this.onInputChange}
                        value={registerMail}
                    />
                    <label
                        className='RegisterForm__label form-label'
                        htmlFor='registerMail'
                    >
                        Адрес электронной почты
                    </label>
                    <div>
                        <div className='RegisterForm__short-input-wrapper'>
                            <input
                                className='RegisterForm__input form-input '
                                type='text'
                                placeholder='Ваше имя'
                                id='registerName'
                                onChange={this.onInputChange}
                                value={registerName}
                            />
                            <label
                                className='RegisterForm__label form-label '
                                htmlFor='registerName'
                            >
                                Ваше имя
                            </label>
                        </div>

                        <div className='RegisterForm__short-input-wrapper'>
                            <input
                                className='RegisterForm__input form-input '
                                type='text'
                                placeholder='Ваша фамилия'
                                id='registerSurname'
                                onChange={this.onInputChange}
                                value={registerSurname}
                            />
                            <label
                                className='RegisterForm__label form-label '
                                htmlFor='registerSurname'
                            >
                                Ваша фамилия
                            </label>
                        </div>
                    </div>

                    <input
                        className='RegisterForm__input form-input'
                        type='password'
                        placeholder='Придумайте пароль'
                        id='registerPassword'
                        onChange={this.onInputChange}
                        value={registerPassword}
                    />
                    <label
                        className='RegisterForm__label form-label'
                        htmlFor='registerPassword'
                    >
                        Пароль
                    </label>
                    <input
                        className='RegisterForm__submit form-submit'
                        type='submit'
                        value='Зарегистрироваться'
                    />
                </form>
            </div>
        );
    }
}
