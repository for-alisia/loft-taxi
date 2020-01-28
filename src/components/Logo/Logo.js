import React from 'react';
import './Logo.scss';
import { Logo as LogoComponent } from 'loft-taxi-mui-theme';

const Logo = () => {
    return (
        <div className='Logo'>
            <LogoComponent white='white' />
        </div>
    );
};

export default Logo;
