import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { route } from '../../helpers/config';
import { AuthContext } from '../../helpers/context';
import { auth } from '../../firebase/firebase-utils';
import './Menu.scss';

export default class Menu extends Component {
    static propTypes = {
        page: PropTypes.oneOf(['MapPage', 'Login', 'Profile']).isRequired
    };

    static contextType = AuthContext;

    handleChangePage = (e, name) => {
        e.preventDefault();
        if (name === 'Login') {
            auth.signOut();
        }

        this.props.onPageChange(name);
    };

    render() {
        const menuItems = Object.keys(route).map(item => {
            const { label, name } = route[item];
            let className = ['Menu__item'];
            if (this.props.page === name) {
                className.push('active');
            }

            return (
                <button
                    className={className.join(' ')}
                    key={name}
                    onClick={e => this.handleChangePage(e, name)}
                >
                    {label}
                </button>
            );
        });

        return <nav className='Menu'>{menuItems}</nav>;
    }
}
