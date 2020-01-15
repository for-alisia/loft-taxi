import React from 'react';
import Logo from '../Logo/Logo';
import RegisterForm from '../RegisterForm/RegisterForm';
import './Register.css';

const Register = props => {
    return (
        <div className='Register city'>
            <Logo />
            <RegisterForm onPageChange={props.onPageChange} />
        </div>
    );
};

export default Register;
