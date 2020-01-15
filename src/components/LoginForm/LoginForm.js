import React, { Component } from 'react';
import './LoginForm.css';

export default class LoginForm extends Component {
    onSubmit = e => {
        e.preventDefault();
        this.props.onPageChange('MapPage');
    };

    onRegisterPage = e => {
        e.preventDefault();
        this.props.onPageChange('Register');
    };

    render() {
        return (
            <div className='LoginForm'>
                <form className='LoginForm__form form' onSubmit={this.onSubmit}>
                    <h2 className='form-title'>Войти</h2>
                    <p className='form-text'>
                        Новый пользователь?
                        <span
                            className='form-link link'
                            onClick={this.onRegisterPage}
                        >
                            Зарегистрируйтесь
                        </span>
                    </p>

                    <input
                        className='LoginForm__input form-input'
                        type='text'
                        placeholder='Введите имя пользователя'
                        id='loginName'
                    />
                    <label
                        className='LoginForm__label form-label'
                        htmlFor='loginName'
                    >
                        Имя пользователя
                    </label>

                    <input
                        className='LoginForm__input form-input'
                        type='password'
                        placeholder='Введите пароль'
                        id='loginPassword'
                    />
                    <label
                        className='LoginForm__label form-label'
                        htmlFor='loginPassword'
                    >
                        Пароль
                    </label>
                    <input
                        className='LoginForm__submit form-submit'
                        type='submit'
                        value='Войти'
                    />
                </form>
            </div>
        );
    }
}
