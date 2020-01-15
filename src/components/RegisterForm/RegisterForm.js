import React, { Component } from 'react';
import './RegisterForm.css';

export default class RegisterForm extends Component {
    onSubmit = e => {
        e.preventDefault();
        this.props.onPageChange('MapPage');
    };

    onLoginPage = e => {
        e.preventDefault();
        this.props.onPageChange('Login');
    };

    render() {
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
                        id='RegisterMail'
                    />
                    <label
                        className='RegisterForm__label form-label'
                        htmlFor='RegisterMail'
                    >
                        Адрес электронной почты
                    </label>
                    <div>
                        <div className='RegisterForm__short-input-wrapper'>
                            <input
                                className='RegisterForm__input form-input '
                                type='text'
                                placeholder='Ваше имя'
                                id='RegisterName'
                            />
                            <label
                                className='RegisterForm__label form-label '
                                htmlFor='RegisterName'
                            >
                                Ваше имя
                            </label>
                        </div>

                        <div className='RegisterForm__short-input-wrapper'>
                            <input
                                className='RegisterForm__input form-input '
                                type='text'
                                placeholder='Ваша фамилия'
                                id='RegisterSurname'
                            />
                            <label
                                className='RegisterForm__label form-label '
                                htmlFor='RegisterSurname'
                            >
                                Ваша фамилия
                            </label>
                        </div>
                    </div>

                    <input
                        className='RegisterForm__input form-input'
                        type='password'
                        placeholder='Придумайте пароль'
                        id='RegisterPassword'
                    />
                    <label
                        className='RegisterForm__label form-label'
                        htmlFor='RegisterPassword'
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
