import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import './Header.scss';
import { Logo as LogoComponent } from 'loft-taxi-mui-theme';

const Header = props => {
    const { onPageChange, page } = props;

    return (
        <header className='Header'>
            <div className='Header__content'>
                <div className='Header__logo'>
                    <LogoComponent />
                </div>
                <Menu onPageChange={onPageChange} page={page} />
            </div>
        </header>
    );
};

Header.propTypes = {
    page: PropTypes.oneOf(['MapPage', 'Login', 'Profile']).isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default Header;
