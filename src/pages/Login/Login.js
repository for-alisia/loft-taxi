import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../components/Logo';
import LoginForm from '../../components/LoginForm';
import './Login.scss';

const Login = props => {
    return (
        <div className='Login city'>
            <Logo />
            <LoginForm onPageChange={props.onPageChange} />
        </div>
    );
};

Login.propTypes = {
    onPageChange: PropTypes.func.isRequired
};

export default Login;
