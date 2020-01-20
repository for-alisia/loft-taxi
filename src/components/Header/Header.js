import React from 'react';
import Menu from '../Menu';
import './Header.scss';
import logoImg from './logo.png';

const Header = props => {
    const { onPageChange, page } = props;
    return (
        <header className='Header'>
            <div className='Header__content'>
                <div className='Header__logo'>
                    <img src={logoImg} alt='Logo' />
                </div>
                <Menu onPageChange={onPageChange} page={page} />
            </div>
        </header>
    );
};

export default Header;
