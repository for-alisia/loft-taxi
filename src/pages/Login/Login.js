import React, { Component } from 'react';
import Logo from '../../components/Logo';
import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';
import './Login.scss';

export default class Login extends Component {
    state = {
        form: LoginForm
    };

    handleFormChange = e => {
        this.setState(prevState => {
            const newForm =
                prevState.form === LoginForm ? RegisterForm : LoginForm;

            return {
                form: newForm
            };
        });
    };

    render() {
        const { form: Form } = this.state;
        return (
            <div className='Login city'>
                <Logo />
                <Form
                    onPageChange={this.props.onPageChange}
                    onFormChange={this.handleFormChange}
                />
            </div>
        );
    }
}
