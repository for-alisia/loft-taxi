import React from 'react';
import Logo from '../Logo/Logo';
import LoginForm from '../LoginForm/LoginForm';
import './Login.css';

const Login = props => {
    return (
        <div className='Login city'>
            <Logo />
            <LoginForm onPageChange={props.onPageChange} />
        </div>
    );
};

export default Login;
