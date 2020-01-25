import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { route } from '../../helpers/config';
import { AuthContext } from '../../helpers/context';
import './Menu.scss';

const Menu = props => {
    const auth = useContext(AuthContext);

    const handleChangePage = (e, name) => {
        e.preventDefault();
        if (name === 'Login') {
            auth.logout();
        }

        props.onPageChange(name);
    };
    const menuItems = Object.keys(route).map(item => {
        const { label, name } = route[item];
        let className = ['Menu__item'];
        if (props.page === name) {
            className.push('active');
        }

        return (
            <button
                className={className.join(' ')}
                key={name}
                onClick={e => handleChangePage(e, name)}
            >
                {label}
            </button>
        );
    });

    return <nav className='Menu'>{menuItems}</nav>;
};

Menu.propTypes = {
    page: PropTypes.oneOf(['MapPage', 'Login', 'Profile']).isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default Menu;
