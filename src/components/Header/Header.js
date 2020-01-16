import React from 'react';
import Menu from '../Menu/Menu';
import './Header.css';
import logoImg from './logo.png';

const Header = props => {
    return (
        <header className='Header'>
            <div className='Header__content'>
                <div className='Header__logo'>
                    <img src={logoImg} alt='Logo' />
                </div>
                <Menu onPageChange={props.onPageChange} page={props.page} />
            </div>
        </header>
    );
};

export default Header;
